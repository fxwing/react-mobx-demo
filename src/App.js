import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { observable, autorun,computed } from 'mobx'
import {observer} from "mobx-react";
import TodoStore from './test/todoStoreES6'

//一、es6 class
/*
const todoStore = new TodoStore();
todoStore.addTodo({tark:'wjl'});
console.log(todoStore.report());
*/
/*
* 二、Mobx store基础，自动监控 autorun中的方法，有何用，接下来
* */
class ObservableTodoStore{
    @observable todos = [];
    @observable pendingRequests = 0;
    constructor(){
        autorun(()=>{
            console.log(this.report);
        })
    }
    @computed get completedTodosCount() {
        return this.todos.filter(
            todo => todo.completed === true
        ).length;
    }

    @computed get report() {
        if (this.todos.length === 0)
            return "没有任务";
        return `下一个任务: "${this.todos[0].task}". ` +
            `进度: ${this.completedTodosCount}/${this.todos.length}`;
    }
    addTodo(task) {
        setTimeout(()=>{
            this.todos.push({
                task: task,
                completed: false,
                assignee: null
            });
        },1000)

    }
}
const observableTodoStore = new ObservableTodoStore()
/*const observableTodoStore = new ObservableTodoStore();
observableTodoStore.addTodo({task:'wjl'});*/

/*
* 三、
* */
@observer
class TodoList extends React.Component {
    onNewTodo = () => {
        this.props.store.addTodo(prompt('输入一个新的store:','wjl'));
    }
    render(){
        const store = this.props.store;
        return(
            <div>
                {store.report}
                <ul>
                    {
                        store.todos.map((todo,idx)=><TodoView todo={todo} key={idx} />)
                    }
                    { store.pendingRequests > 0 ? <marquee>Loading...</marquee> : null }
                    <button onClick={ this.onNewTodo }>New Todo</button>
                    <small> (double-click a todo to edit)</small>
                   {/* <RenderCounter />*/}
                </ul>
            </div>
        )
    }
}

@observer
class TodoView extends React.Component {
    render() {
        const todo = this.props.todo;
        return (
            <li onDoubleClick={ this.onRename }>
                <input
                    type='checkbox'
                    checked={ todo.completed }
                    onChange={ this.onToggleCompleted }
                />
                { todo.task }
                { todo.assignee
                    ? <small>{ todo.assignee.name }</small>
                    : null
                }
                {/*<RenderCounter />*/}
            </li>
        );
    }

    onToggleCompleted = () => {
        const todo = this.props.todo;
        todo.completed = !todo.completed;
    }

    onRename = () => {
        const todo = this.props.todo;
        todo.task = prompt('Task name', todo.task) || todo.task;
    }
}

/*ReactDOM.render(
    <TodoList store={ observableTodoStore } />,
    document.getElementById('reactjs-app')
);*/



class App extends Component {
  render() {
    return (
      <div className="App">
          <TodoList store={ observableTodoStore } />
      </div>
    );
  }
}

export default App;
