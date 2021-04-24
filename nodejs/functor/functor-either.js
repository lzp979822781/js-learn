// 发生错误时,通过返回不同的函子来达到打印的效果


/**
 * 错误函子
 * @class Left
 * @returns 返回函子自身
 */
class Left {
    static of (value) {
        return new Left(value);
    }

    constructor(value) {
        this._value = value;
    }

    map(fn) {
        return this;
    }
}

class Right {
    static of (value) {
        return new Left(value);
    }

    constructor(value) {
        this._value = value;
    }

    map(fn) {
        return Right.of(fn(this._value));
    }
}

// 对正常的函子进行捕获
function parseJson(str) {
    try {
        return Right.of(JSON.parse(str));
    } catch(e) {
        return Left.of({error: e.message})
    }
}

const res = parseJson('{"name": "aa"}');
console.log(res);

