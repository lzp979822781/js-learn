const partial = function(fn, ...partialArgs) {
    let args = partialArgs;
    return function(...fullArguments) {
        const newArgs = [...args];
        let arg = 0;
        for(let i = 0; i < newArgs.length && arg < fullArguments.length; i++) {
            if (newArgs[i] === undefined) {
                newArgs[i] = fullArguments[arg++];
            }
        }
        console.log('newArgs', newArgs);
        return fn.apply(null, newArgs);
    }
};

const prettyPrintJson = partial(JSON.stringify, undefined, null, 2);

console.log('test1', prettyPrintJson({
    foo: 'bar',
    bar: 'foo'
}));

console.log('test2', prettyPrintJson({
    a: 1,
    b: 2
}))