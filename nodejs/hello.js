var a = 1;
var b = 'world';
var c = function(x) {
    console.log("hello" + x + a);
}
console.log(process.argv[2]);
c(b);

/* process.stdin.resume();
process.stdin.on('data', function(data) {
    process.stdout.write('read from console' + data.toString());
}); */

process.stdin.setEncoding('utf-8');
const write = process.stdout.write;
let res;
process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    res += chunk;
    if(chunk !== null) {
        process.stdout.write(`数据 ${chunk}`);
    }
});

process.stdin.on('end', data => {
    process.stdout.write('end');
})