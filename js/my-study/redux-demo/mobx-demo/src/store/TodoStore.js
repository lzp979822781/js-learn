import {makeAutoObservable, flow} from 'mobx';
import axios from 'axios';

import {genUuid} from '../utils';

export default class TodoStore {
    constructor() {
        this.todos = [];
        this.filterCondition = "All"
        // makeAutoObservable(this);
        // loaddata在组件中调用的时候无法自动绑定this
        makeAutoObservable(this, {
            loadData: flow.bound
        });
    }

    *loadData() {
        const response = yield axios.get('http://localhost:3001/todos');
        this.todos = response.data;
    }

    addTodo = title => {
        this.todos.push({title, id: genUuid()});
    }

    changeFilterCondition = condition => {
        this.filterCondition = condition;
    }

    get filterTodos() {
        switch(this.filterCondition) {
            case 'Active':
                return this.todos.filter(item => !item.isCompleted);
            case 'Completed': 
                return this.todos.filter(item => item.isCompleted);
            default:
                return this.todos;
        }
    }

    modifyTodoIsCompleted = changeItem => {
        this.todos = this.todos.map(item => {
            return {...item, isCompleted: changeItem.id === item.id ? !item.isCompleted: item.isCompleted};
        })
    }

    removeTodo = id => {
        this.todos = this.todos.filter(item => item.id !== id);
    }

    modifyTodoIsEditing = changeItem => {
        this.todos = this.todos.map(item => {
            return {...item, isEditing: changeItem.id === item.id};
        })
    }

    modifyTodoTitle = (changeItem, value) => {
        this.todos = this.todos.map(item => {
            return {
                ...item,
                title: changeItem.id === item.id ? value : item.title,
                isEditing: false
            };
        });

    }

}