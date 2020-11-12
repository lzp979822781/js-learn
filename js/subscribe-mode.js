const pubSub = {
    subs: {},
    // 不要使用箭头函数不然会出现this绑定错误
    subscribe: function(type, fn){
        if(!this.subs[type]) {
            this.subs[type] = []
        }
        
        this.subs[type].push(fn);
    },

    /**
     *  第一个参数为事件类型
     *  其余参数为时间回调参数
     * 
     */
    publish: function(...arg){
        const args = arg;
        const type = args.shift();
        const fns = this.subs[type]
        if(fns) {
            for(let i=0, len= fns.length; i < len; i++) {
                fns[i](args);
            }
        }
    },

    unSubscribe: (type) => {
        delete this.subs[type]
    }
}



pubSub.subscribe("event1", function(param) {
    console.log("事件一 事件一", param);
})

pubSub.subscribe("event1", function(param) {
    console.log("事件一 事件二", param);
})

pubSub.subscribe("event2", function(param){
    console.log("事件二 事件一", param);
})

pubSub.publish('event1', '11111');
pubSub.publish('event2', '22222');