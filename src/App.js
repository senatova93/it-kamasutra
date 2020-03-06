import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader.js";
import TodoListTasks from "./TodoListTasks.js";
import TodoListFooter from "./TodoListFooter.js";

class App extends React.Component {
    render = () => {
        return (
            <div className="App">
                <TodoListHeader/>
                <TodoListTasks/>
                <TodoListFooter/>

                </div>
        );
    }
}

export default App;

