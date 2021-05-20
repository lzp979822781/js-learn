const obj = {
    store: ['foo', 'bar', 'title'],
    [Symbol.iterator]: function () {
        const that = this;
        index = 0;
        return {
            next: function () {
                const result = {
                    value: that.store[index],
                    done: index >= that.store.length
                };
                index++;
                return result;
            }
        }
    }
}

for(const item of obj) {
    console.log(item);
}