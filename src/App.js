import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader.js";
import TodoListTasks from "./TodoListTasks.js";
import TodoListFooter from "./TodoListFooter.js";
import TodoListTask from "./TodoListTask.js"


class App extends React.Component {
    constructor(props) {
        super(props);
        this.newTaskTitleRef = React.createRef();

    }

    state = {
        tasks: [
            {title: "JS", isDone: true, priority: "low"},
            {title: "HTML", isDone: true, priority: "low"},
            {title: "CSS", isDone: true, priority: "low"},
            {title: "React", isDone: false, priority: "low"},
            {title: "Sass", isDone: false, priority: "low"}
        ],
        filterValue: "Active"
    };


    onAddTaskClick = () => {
    let newText = this.newTaskTitleRef.current.value;
        let newTask = {
            title: newText,
            isDone: false,
            priority: "low"
        };
        let newTasks = [...this.state.tasks, newTask];
        this.setState({
                tasks: newTasks
            }
        );

    }
    render = () => {

        //
        return (
            <div className="App">
                {/*<TodoListHeader/>*/}
                <div className="todoList-header">
                    <h3 className="todoList-header__title">What to Learn</h3>
                    <div className="todoList-newTaskForm">
                        <input ref={this.newTaskTitleRef} type="text" placeholder="New task name"/>
                        <button onClick={this.onAddTaskClick}>Add</button>
                    </div>
                </div>

                <TodoListTasks tasks={this.state.tasks}/>
                <TodoListFooter filterValue={this.state.filterValue}/>

            </div>
        );
    }
}

export default App;


