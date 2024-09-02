import axios from "axios"

export const Task = ({task,onDelete,onUpdate}) => {

    const deleteTask = () => {
        axios
        .delete("http://localhost:3004/tasks/" + task.id)
        .then(res => {
            onDelete(res.data.id)
        })
    }    
    
    return <div>
        <p>{task.text}</p>
        <small>status: {task.status}</small>
        {
            task.status === "in progress"
            ? <img src="https://cdn2.iconfinder.com/data/icons/time-date-management-1/64/time__data_management-12-512.png" />
            : task.status === "unstarted"
            ? <img src="https://cdn3.iconfinder.com/data/icons/fluent-regular-24px-vol-5/24/ic_fluent_navigation_unread_24_regular-1024.png" />
            : <img src="https://cdn2.iconfinder.com/data/icons/internet-download-manager-1/64/11_Completed_check_tick_verified_approved-1024.png" />
        }
        
        <select value={task.status} onChange={e => onUpdate(task.id, e.target.value)}>
            <option>in progress</option>
            <option>completed</option>
            <option>unstarted</option>
        </select>
        <button onClick={deleteTask}>x</button>
    </div>
}


/*

COMPLETED:
https://cdn2.iconfinder.com/data/icons/internet-download-manager-1/64/11_Completed_check_tick_verified_approved-1024.png

IN PROGERSS:
https://cdn2.iconfinder.com/data/icons/time-date-management-1/64/time__data_management-12-512.png

UNSTARTED
https://cdn3.iconfinder.com/data/icons/fluent-regular-24px-vol-5/24/ic_fluent_navigation_unread_24_regular-1024.png
*/