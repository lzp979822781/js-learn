interface Person {
    firstName: string;
    lastName: string;
}

function greetUser(person: Person) {
    return 'Hello-' + person.firstName + person.lastName;
}

var user = { firstName: '赵', lastName: '前'};

window.document.body.innerHTML = greetUser(user);