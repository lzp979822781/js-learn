const testTreeData = [
    {
        title: '工业设备智能平台',
        key: '0-0',
        children: [
            {
                title: '微服务一',
                key: '0-0-0',
                children: [
                    {
                        title: '实例一',
                        key: '0-0-0-0'
                    },
                    {
                        title: '实例二',
                        key: '0-0-0-1'
                    }
                ]
            }
        ]
    },
    {
        title: '一级父节点2',
        key: '0-1',
        children: [
            {
                title: '微服务一',
                key: '0-1-0',
                children: [
                    {
                        title: '实例一',
                        key: '0-1-0-0'
                    },
                    {
                        title: '实例二',
                        key: '0-1-0-1'
                    }
                ]
            }
        ]
    },
    {
        title: '一级父节点3',
        key: '0-2',
        children: [
            {
                title: '微服务一',
                key: '0-2-0',
                children: [
                    {
                        title: '实例一',
                        key: '0-2-0-0'
                    },
                    {
                        title: '实例二',
                        key: '0-2-0-1'
                    }
                ]
            }
        ]
    }
];

function addParentsKeys(treeData, parentKeys = []) {
    const length = treeData.length;
    const res = [];
    for (let i = 0; i < length; i++) {
        const {children, key, ...otherData} = treeData[i];
        if (!children) {
            res.push({...otherData, key, parentKeys: [...parentKeys, key]});
        } else {
            res.push({...otherData, key, parentKeys: [...parentKeys, key], children: addParentsKeys(children, [...parentKeys, key])})
        }
    }
    return res;
}

// console.log(JSON.stringify(addParentsKeys(testTreeData, [])));
const newData = addParentsKeys(testTreeData, []);

const getSelectedAllData = (treeData, selectedKey) => {
    for (let i = 0, length = treeData.length; i < length; i++) {
        const {children, key} = treeData[i];
        if (selectedKey === key) {
            return treeData[i];
        } else if (children) {
            const temp = getSelectedAllData(children, selectedKey);
            if (temp) {
                return temp;
            }
        }
    }
};

const selectedItem = getSelectedAllData(newData, '0-1-0-1');
console.log(selectedItem);