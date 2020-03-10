import React from 'react';
import TodoListFooter from "./TodoListFooter";
import TodoListTask from "./TodoListTask"

class TodoListTasks extends React.Component {
    render = () => {
        let taskElements = this.props.tasks.map(task => {
            return <TodoListTask
                title={task.title}
                isDone={task.isDone}
                priprity={task.priority}>

            </TodoListTask>
        })

        return (
            <div className="TodoListTasks">
                {taskElements}


            </div>
        );
    }
}

export default TodoListTasks;