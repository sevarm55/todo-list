export const Stats = ({tasks}) => {
    let completed = tasks.filter(task => task.status === "completed").length
    let inProgress = tasks.filter(task => task.status === "in progress").length
    let unstarted = tasks.filter(task => task.status === "unstarted").length

    return <div style={{display: "flex", gap: 20}}>
        <p style={{background: "lightgreen", padding: 10}}>completed: <strong>{completed}</strong> / {tasks.length}</p>
        <p style={{background: "lightblue", padding: 10}}>in progress: <strong>{inProgress}</strong> / {tasks.length}</p>
        <p style={{background: "lightcoral", padding: 10}}>unstarted: <strong>{unstarted}</strong> / {tasks.length}</p>
    </div>
}