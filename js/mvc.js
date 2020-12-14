function Model(){
    var that = this;
    var text = "hello";
    this.listeners = [];

    Object.defineProperty(that, "text", {
        get: function(){
            return text;
        },
        set: function(value) {
            text = value;
            that.notify();
        }
    })
}

Model.prototype.subscribe = function(listener) {
    this.listeners.push(listener);
}

Model.prototype.notify = function(value) {
    var that = this;
    this.listeners.forEach(function(listener) {
        listener.call(that, value)
    })
}

function Controller(model){
    var that = this;
    this.model = model;

    this.getModelByKey = function(modelKey){
        return that.model[modelKey];
    }

    // 可以把任意对象注册为事件处理程序,只要他拥有handleEvent方法
    this.handleEvent = function(e) {
        e.stopPropagation();
        switch(e.type) {
            case 'click':
                that.clickHandler(e.target);
                break;
            default:
                console.log(e.target);

        }
    }

    this.clickHandler = function(target) {
        this.model.text = 'world';
    }

    setTimeout(function(){
        that.model.text = "3s";
    }, 3000);
}

function View(controller){
    var that = this;
    this.controller = controller;
    var elements = document.querySelectorAll("[data-tw-bind]");
    elements.forEach(function(element){
        if(element.type === 'button') {
            element.innerText = controller.getModelByKey("text");
            that.call = function(modelContext) {
                element.innerText = modelContext.text;
            }
            console.log("typeof controller", typeof controller);
            // 为button注册点击事件
            element.addEventListener('click', controller);
        }
    })

    this.controller.model.subscribe(this);
}

function main(){
    var model = new Model();
    var controller = new Controller(model);
    new View(controller);
}

main();