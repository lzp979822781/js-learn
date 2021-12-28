import {makeAutoObservable, makeObservable, observable, action, flow} from 'mobx';
import axios from 'axios';

export default class TodoStore {
    constructor() {
        this.todos = [];
        // makeAutoObservable(this);
        // loaddata在组件中调用的时候无法自动绑定this
        makeAutoObservable(this, {
            loadData: flow.bound
        });
    }

    *loadData() {
        const response = yield axios.get('http://localhost:3001/todos');
        response.data.forEach(item => {
            this.todos.push(item);
        });
    }
}