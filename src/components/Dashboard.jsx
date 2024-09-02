import { AddTask } from "./AddTask"
import { Stats } from "./Stats"
import { TaskList } from "./TaskList"
import axios from "axios"
import { useEffect, useState } from "react"

export const Dashboard = () => {

    const [tasks, setTasks] = useState([])

    const addTask = newTask => {
        setTasks([...tasks,newTask])
    }

    const deleteTask = id => {
        setTasks(tasks.filter(task => task.id != id))
    }

    const onUpdate = (id, status) => {
        axios
        .patch("http://localhost:3004/tasks/" + id, {status})
        .then(res => {
            setTasks(tasks.map(task => task.id == res.data.id ? res.data : task))
        })
    }

    useEffect(() => {
        axios
        .get("http://localhost:3004/tasks")
        .then(res => {
            setTasks(res.data)
        })
    },[])
    
    console.log(tasks);
    
    return <div className="dashboard">
        <div className="row">
            <TaskList
                tasks={tasks}
                onDelete={deleteTask}
                onUpdate={onUpdate}
            />
            <AddTask
                onAdd={addTask}
            />
        </div>
        <Stats
            tasks={tasks}
        />
    </div>
}