function disorder(arr) {
    if(!Array.isArray(arr)) {
        return arr;
    }
    const res = [];
    while(arr.length) {
        const index = Math.floor(Math.random() * (arr.length));
        res.push(arr[index]);
        arr.splice(index, 1);
    }
    return res;
}