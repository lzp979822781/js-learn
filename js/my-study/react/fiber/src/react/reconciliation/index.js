import { updateNodeElement } from '../DOM';
import {
    createTaskQueue,
    arrified,
    createStateNode,
    getTag,
    getRoot
} from '../Misc';

/**
 * 任务队列
 */
const taskQueue = createTaskQueue();
let subTask = null;
let pendingCommit = null;

const commitAllWork = fiber => {
    fiber.effects.forEach(item => {

        if (item.tag === 'class_component') {
            item.stateNode.__fiber = item;
        }
        if (item.effectTag === 'delete') {
            item.parent.stateNode.removeChild(item.stateNode);
        }else if (item.effectTag === 'update') {
            // 节点类型相同
            if (item.type === item.alternate.type) {
                updateNodeElement(item.stateNode, item, item.alternate);
            } else {
                // 节点类型不同
                item.parent.stateNode.replaceChild(item.stateNode, item.alternate.stateNode);
            }
        } else if (item.effectTag === 'placement') {
            const fiber = item;
            let parentFiber = item.parent;
            while(
                parentFiber.tag === 'class_component' ||
                parentFiber.tag === 'function_component'
            ) {
                parentFiber = parentFiber.parent;
            }
            if (fiber.tag === 'host_component') {
                parentFiber.stateNode.appendChild(fiber.stateNode);
            }
        }
    })

    /**备份就的fiber节点 */
    fiber.stateNode.__rootFiberContainer = fiber;
};

const getFirstTask = () => {
    const task = taskQueue.pop();

    if (task.from === 'class_component') {
        const root = getRoot(task.instance);
        task.instance.__fiber.partialState = task.partialState;
        return {
            props: root.props,
            stateNode: root.stateNode,
            tag: 'host_root',
            effects: [],
            child: null,
            alternate: root
        };
    }
    /**返回最外层节点的fiber */
    return {
        props: task.props,
        stateNode: task.dom,
        tag: 'host_root',
        effects: [],
        child: null,
        alternate: task.dom.__rootFiberContainer
    };
};

const reconcileChildren = (fiber, children) => {
    // children可能是对象也可能是数组 所以需要先统一转换为数组
    const arrifiedChildren = arrified(children);
    // 循环子节点 对第一个子节点和其他子节点做不同的处理
    let index = 0;
    const numberOfElements = arrifiedChildren.length;
    let element = null;
    let newFiber = null;
    let preFiber = null;
    let alternate = null;

    if (fiber.alternate && fiber.alternate.child) {
        alternate = fiber.alternate.child;
    }

    while(index < numberOfElements || alternate) {
        element = arrifiedChildren[index];
        // 判断是更新还是新增还是删除
        if (!element && alternate) {
            alternate.effectTag = 'delete';
            fiber.effects.push(alternate);
        } else if (element && alternate) {
            newFiber = {
                type: element.type,
                props: element.props,
                tag: getTag(element),
                effects: [],
                effectTag: 'update',
                parent: fiber,
                alternate
            };

            // 判断类型是否发生了变化

            if (element.type === alternate.type) {
                newFiber.stateNode = alternate.stateNode;
            } else {
                newFiber.stateNode = createStateNode(newFiber);
            }
        } else if (element && !alternate){
            newFiber = {
                type: element.type,
                props: element.props,
                tag: getTag(element),
                effects: [],
                effectTag: 'placement',
                parent: fiber,
                alternate
            };

            newFiber.stateNode = createStateNode(newFiber);
        }

        if (index === 0) {
            fiber.child = newFiber;
        } else if (element) {
            preFiber.sibling = newFiber;
        }

        if (alternate && alternate.sibling) {
            alternate = alternate.sibling
        } else {
            alternate = null
        }


        preFiber = newFiber;

        index++;
    }
};

const executeTask = fiber => {
    if (fiber.tag === 'class_component') {
        if (fiber.stateNode.__fiber && fiber.stateNode.__fiber.partialState) {
            fiber.stateNode.state = {
                ...fiber.stateNode.state,
                ...fiber.stateNode.__fiber.partialState
            };
        }
        reconcileChildren(fiber, fiber.stateNode.render());
    } else if(fiber.tag === 'function_component') {
        reconcileChildren(fiber, fiber.stateNode(fiber.props));
    } else {
        reconcileChildren(fiber, fiber.props.children);
    }
    if (fiber.child) {
        return fiber.child;
    }
    
    let currentExecuteFiber = fiber;

    // 遍历所有节点的兄弟节点
    while(currentExecuteFiber.parent) {

        // 根节点收集所有fiber对象
        currentExecuteFiber.parent.effects = currentExecuteFiber.parent.effects.concat(
            currentExecuteFiber.effects.concat(currentExecuteFiber)
        )
        if (currentExecuteFiber.sibling) {
            return currentExecuteFiber.sibling;
        }

        currentExecuteFiber = currentExecuteFiber.parent;
    }

    pendingCommit = currentExecuteFiber;
};
 
const workLoop = deadline => {
    if (!subTask) {
        subTask = getFirstTask();
    }

    while(subTask && deadline.timeRemaining() > 1) {
        subTask = executeTask(subTask);
    }

    if (pendingCommit) {
        commitAllWork(pendingCommit);
    }
};

const performTask = (deadline) => {
    workLoop(deadline);

    if (subTask || !taskQueue.isEmpty()) {
        requestIdleCallback(performTask);
    }
};

export const render = (element, dom) => {
    /**
     * 1.向任务队列中添加任务
     * 2.指定在浏览器空闲时执行任务
     */

    /**
     * 任务就是通过vDom构建fiber 
     */
    taskQueue.push({
        dom,
        props: {children: element}
    })

    /**
     * 指定在浏览器空闲的时候执行任务
     */
    requestIdleCallback(performTask);
};

export const scheduleUpdate = (instance, partialState) => {
    // setState的时候添加一个任务
    taskQueue.push({
        from: 'class_component',
        instance,
        partialState
    });
    requestIdleCallback(performTask);
};