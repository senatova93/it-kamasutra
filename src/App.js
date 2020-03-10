import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader.js";
import TodoListTasks from "./TodoListTasks.js";
import TodoListFooter from "./TodoListFooter.js";
import TodoListTask from "./TodoListTask.js"


class App extends React.Component {
    tasks =[ {title: "JS", isDone: true, priority: "low"},
        {title: "HTML", isDone: true, priority: "low"},
        {title: "CSS", isDone: true, priority: "low"},
        {title: "React", isDone: false,priority: "low"},
        {title: "Sass", isDone: false, priority: "low"}
    ];
    filterValue="Active"
    render = () => {

        //
        return (
            <div className="App">
                <TodoListHeader/>
                <TodoListTasks tasks={this.tasks}/>
                <TodoListFooter filterValue={this.filterValue}/>

            </div>
        );
    }
}

export default App;

