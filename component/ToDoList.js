import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const ToDo = (props) => {
    const [isUpdate, setIsUpdate] = useState(false);
    const [updatedTask, setUpdatedTask] = useState("");

    function clickEdit() {
        setIsUpdate(true);
    }

    function clickUpdate(task) {
        setIsUpdate(false);
        const newTask = {
            id: task.id,
            value: updatedTask
        }
        props.update(newTask);
    }

    function done(task) {
        let newTask = task;
        newTask.isCompleted = true;
        props.update(newTask);
    }
    return (
        <div id={props.task.id}>
            {!isUpdate && <><label className={props.task.isCompleted ? "strike" : ""}>{props.task.value}</label>
            <button onClick={(e) => clickEdit()}>Edit</button></>}

            {isUpdate && <><input type="text" defaultValue={props.task.value} onChange={(e) => {
                setUpdatedTask(e.target.value)
            }}></input>

            <button onClick={(e) => clickUpdate(props.task)}>Update</button></>}

            <button onClick={(e) => props.delete(props.task.id)}>Delete</button>

            <button onClick={() => done(props.task)}>Done</button>
        </div>
    );
}

const TaskList = (props) => {
    return (
        <ul>
            {props.tasks.map((todo) => {
                return (
                    <li key={todo.id}>
                        <ToDo task={todo} update={props.update} delete={props.delete}></ToDo>
                    </li>
                )
            })}
        </ul>
    );
}



const ToDoList = () => {
    let data = [{
        id:1,
        value: 'study',
        isCompleted: false
    },{
        id:2,
        value: 'study 1',
        isCompleted: false
    }];

    const [tasks, setTasks] = useState(data);
    const [newTask, setNewTasks] = useState("");
    
    function handleAddTask(e) {
        console.log('add', newTask);
        let eleId = tasks.length + 1;
        setTasks([
            ...tasks,
            {id: eleId, value: newTask, isCompleted: false}
        ]);
    }

    function handleUpdateTask(updatedTask) {
        console.log('edit');
        const updatedTaskData = tasks.map((task) => {
            if(task.id === updatedTask.id) {
                task = updatedTask;
            }
            return task;
        });

        setTasks(updatedTaskData);
    }

    function handleDelete(id) {
        console.log('delete');
        const deletedTask = tasks.filter((task) => task.id !== id);
        setTasks(deletedTask);
    }


    return (
        <div>
            <div>
                <input type="text" value={newTask} onChange={(e) => {
                    setNewTasks(e.target.value)
                }}></input>
                <button onClick={(e) => handleAddTask(e)}>Add</button>
            </div>
            
            <TaskList tasks={tasks} update={handleUpdateTask} delete={handleDelete} /> 
        </div>
    )
};

export default ToDoList;
