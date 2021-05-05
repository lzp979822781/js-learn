const obj = {
    name: 'ace',
    age: 18
};

// 旧api
console.log('name' in obj); // 查看是否含有某个属性
console.log(delete obj.name); // 删除操作
console.log(Object.keys(obj)); // 获取所有key

// 新
console.log(Reflect.has(obj, 'name'));
console.log(Reflect.deleteProperty(obj, 'age'));
console.log(Reflect.ownKeys(obj));