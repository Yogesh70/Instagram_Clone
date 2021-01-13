// imr
import React from 'react';
// sfc
const TaskList = (props) => {
    let {TasksfList, handleTask} = props;
    
    return (
    <React.Fragment>
        {/*Task List*/}
        <div className="container"> 
            {TasksfList.map((task) => {
                return(
                    <div key = {task.id}>
                        <p className="d-inline mr-4">{task.name}</p>
                        <button className="btn btn-danger"
                        onClick={() => {handleTask(task.id)}}
                        >x</button>
                    </div>
                )
            })}
        </div>
    </React.Fragment> 
    );
}
 
export default TaskList;