import React, { Component } from 'react';
import TaskList from './component/TaskList';
class App extends Component {
    state = { 
        tasks: [{id: 1, name: "Make Tea"},
                {id: 2, name: "Learn React"},
                {id: 3, name: "Learn JSX"
            }]  
    }

    removeTask = (id) => {
        let {tasks} = this.state;
        let remainingTasks = tasks.filter(task => task.id != id);
        this.setState({
            tasks: remainingTasks
        })    
    }

    render() { 
        let {tasks} = this.state;
        return (
            <React.Fragment>

            {/* Task List
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
        </div> */}
        
                <TaskList/>
            </React.Fragment>
        );
    }
}
 
export default App;