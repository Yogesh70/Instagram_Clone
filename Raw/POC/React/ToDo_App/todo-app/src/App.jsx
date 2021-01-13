// imrc
import React, { Component } from 'react';
import InputBox from './component/InputBox';
import TaskList from './component/TaskList';
// cc
class App extends Component {
    state = { 
        tasks: [{id: 1, name: "Make Tea"},
                {id: 2, name: "Learn React"},
                {id: 3, name: "Learn JSX"
            }]  
    }

    removeTask = (id) => {
        let {tasks} = this.state;
        let remainingTasks = tasks.filter((task => task.id !== id));
        this.setState({
            tasks: remainingTasks
        })    
    }

    getDataFromInput = (newTask) => {
        this.setState({ tasks: [{ id: this.state.tasks.length + 1, name: newTask}, ...this.state.tasks] });
    }

    render() { 
        let {tasks} = this.state;
        return (
            <React.Fragment>
                    {/* class based Child */}
                <InputBox getDataFromInput= {this.getDataFromInput} />
                    {/* function based Child */}
                <TaskList TasksfList= {tasks} handleTask= {this.removeTask}/>
            </React.Fragment>
        );
    }
}
 
export default App;