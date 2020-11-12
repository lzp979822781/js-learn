window.onload = () => {
    const arr = genData(20);
    console.log("primitive array", arr);
    console.log("selectionSort array", selectionSort(arr));
}

function genData(length) {
    let arr = [];
    for(let i=0; i < length; i++) {
        arr.push(Math.floor(Math.random() * (length + 1)));
    }

    return arr;
}

// 没进行一个完整排序周期则有一个最大元素位于数组末尾
function bubbleSort(arr) {
    if(!Array.isArray(arr) || (Array.isArray(arr) && arr.length < 2)) {
        return arr;
    }

    for(let i = 0, len = arr.length; i < len - 1; i++) {
        for(let j = 0; j < len - i; j++) {
            if(arr[j] > arr[j+1]) {
                [arr[j+1], arr[j]] = [ arr[j], arr[j+1]];
            }
        }
    }
    return arr;
}

/**
 * 选择排序 每次选出一个最小元素
 * 具体选择方法是 从头开始循环，将当前元素作为初始最小元素,然后其他元素与当前元素比较，如果
 * 其他元素比小则记录索引,循环完成后进行交换
 * @param {*} arr
 */
function selectionSort(arr) {
    if(!Array.isArray(arr) || (Array.isArray(arr) && arr.length < 2)) {
        return arr;
    }

    for(let i=0, len = arr.length; i < len - 1; i++) {
        let temp = i;
        for(let j=i+1; j < len; j++) {
            if(arr[j] < arr[temp]) {
                temp = j;
            }
        }
        [arr[i], arr[temp]] = [arr[temp], arr[i]];
    }

    return arr;
}

