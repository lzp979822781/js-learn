const person = {
    name: 'tom',
    age: 20
};

const personProxy = new Proxy(person, {
    get(target, property) {
        return property in target ? target[property] : undefined;
    },
    set(target, property, value) {
        console.log(target, property, value);
        target[property] = value;
    },
    deleteProperty(target, propery) {
        console.log('propery', propery);
        delete target[propery];
    }
});
/* console.log('personProxy.name', personProxy.name);
personProxy.sex = '男';
console.log('personProxy', personProxy); */
delete personProxy.name
console.log('person', person);