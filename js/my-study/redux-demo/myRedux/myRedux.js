function createStore(reducer, preloadedState, enhancer) {

    // reducer函数判断
    if (typeof reducer !== 'function') throw new Error("redcuer必须是函数");

    // enhance处理 enhance必须是一个函数
    if (typeof enhancer !== 'undefined') {
        if (typeof enhancer !== 'function') throw new Error('enhancer必须是函数');

        return enhancer(createStore)(reducer, preloadedState);
    }


    // 当前状态
    var currentState = preloadedState;
    // 订阅者
    var currentListeners = [];

    function getState() {
        return currentState;
    }

    // dipatch函数
    function dispatch(action) {
        // 判断action是不是对象且含有type属性
        if (!isPlainObject(action)) throw new Error('action必须是一个对象');
        if (typeof action.type === 'undefined') throw new Error("action对象中必须有type属性");

        // 先执行中间件再执行reducer

        currentState = reducer(currentState, action);
        for (var i = 0, len = currentListeners.length; i < len; i++) {
            currentListeners[i]();
        }
    }

    function subscribe(listener) {
        if (typeof listener !== 'function') {
            throw new Error("参数应该为函数");
        }

        currentListeners.push(listener);
    }

    return {
        getState,
        dispatch,
        subscribe
    }
}

function isPlainObject(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return false;
    }
    
    var proto = obj;
    while(Object.getPrototypeOf(proto) !== null) {
        proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(obj) === proto;
}

function applyMiddleware() {
    var middlewares = [...arguments];
    // 返回一个enhancer

    return function(createStore) {
        return function(reducer, preloadedState) {
            // 创建store
            var store = createStore(reducer, preloadedState);
            // 生成阉割版store
            var middlewareAPI = {
                getState: store.getState,
                dispatch: store.dispatch
            };

            // 调用中间件的第一层函数,传递阉割版的store对象
            var chain = middlewares.map(middleware => middleware(middlewareAPI));

            // 一次调用中间件
            var dispatch = compose(...chain)(store.dispatch);

            return {
                ...store,
                dispatch
            };
        };
    };
}

function compose() {
    var funcs = [...arguments];
    return function(dispatch) {
        var tempFn = dispatch;
        for (var i = funcs.length - 1; i >=0; i--) {
            tempFn = funcs[i](tempFn);
        }

        return tempFn;
    }
}

function bindActionCreators(actionCreator, dispatch) {
    if (!isPlainObject(actionCreator)) {
        throw new Error("bindActionCreators 第一个参数应该为对象");
    }

    var boundActionCreator = {};
    for (var key in actionCreator) {
        (function(key){
            boundActionCreator[key] = function() {
                dispatch(actionCreator[key]());
            }
        })(key)
    }

    return boundActionCreator;
}

/**
 *@returns {function} 返回一个reducer
 *
 */
function combineReducers(reducers) {
    if (!isPlainObject(reducers)) {
        throw new Error('combineReducers的参数为一个对象');
    }

    // 检查reducer类型必须是函数
    var reducerKeys = Object.keys(reducers);
    for (var i = 0; i <= reducerKeys.length - 1; i++) {
        var key = reducerKeys[i];
        if (typeof reducers[key] !== 'function') {
            throw new Error("reducer必须是函数");
        }
    }
    return function(state, action) {
        console.log('state', state);
        var nextState = {};
        for (var i = 0; i <= reducerKeys.length - 1; i++) {
            var key = reducerKeys[i];
            var reducer = reducers[key];
            var previousState = state[key];
            nextState[key] = reducer(previousState, action);
        }

        return nextState;
    }
}
