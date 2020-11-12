window.onload = function() {
    init();
}

function inputChange(e) {
    const value = Number(document.getElementById('input').value);
    console.log("result", add(value)());
}

function init() {
    Function.prototype.bind = function(context) {
        // 缓存调用者
        var _this = this;
        var args = Array.prototype.slice.call(arguments, 1);
        return function() {
            return _this.apply(context, args);
        }
    }
}

function add() {
    const args = Array.prototype.slice.call(arguments);
    var _add = function() {
        const newArgs = Array.prototype.slice.call(arguments);
        if(!newArgs.length) {
            return execute(args);
        }
        args.push(...arguments);
        return _add;
    }

    /* function execute() {
        console.log("执行_add.toString()", args);
        return args.reduce((sum, item )=> sum + item);
    } */
    _add.toString = function() {
        console.log("执行_add.toString()", args);
        return args.reduce((sum, item )=> sum + item);
    }

    return _add;
}