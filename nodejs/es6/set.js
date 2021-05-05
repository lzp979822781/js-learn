const set = new Set();
set.add(1);
console.log('set.size', set.size);
console.log('set has 1', set.has(1));
set.add(2);
console.log('delete 2', set.delete(2));
for(i of set) {
    console.log('i', i);
}

const arr = [1, 2, 3, 4, 2];
// 或者用Array.from(set)姜set转换为数组
console.log('new arr', [...new Set(arr)]);