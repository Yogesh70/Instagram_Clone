// sfc
const TaskList = () => {
    
    return (

    <React.Fragment>
        {/*Task List*/}
        <div className="container"> 
            {tasks.map((task) => {
                return(
                    <div key = {task.id}>
                        <p className="d-inline mr-4">{task.name}</p>
                        <button className="btn btn-danger"
                        onClick={() => {this.removeTask(task.id)}}
                        >x</button>
                    </div>
                )
            })}
        </div>
    </React.Fragment> 
    );
}
 
export default TaskList;