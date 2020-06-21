import React, { Component } from 'react';
import './App.css';
import Task from "./Components/Task.js";

class App extends Component {
  state = {
    taskList: []
  };

  removeTaskHandler = (index) => {
    const updatedTaskList = [...this.state.taskList];
    updatedTaskList.splice(index, 1);
    this.setState({taskList: updatedTaskList});
  }

  handleKeyPress = (event) => { 
    if(event.key === 'Enter'){
      let verboseDate = new Date();
      let todaysDate = verboseDate.toDateString();
      
      let task = {  
                  thingToDo: event.target.value,
                  dateCreated: todaysDate
                 };
      let updatedTaskList = [...this.state.taskList, task];

      this.setState({
        taskList: updatedTaskList
      });

      event.target.value = '';
    }
  };
  
  render (){
    let tasks = (
      <div>
        {this.state.taskList.map((task, index) => {
          return <Task 
                    thingToDo={task.thingToDo}
                    dateCreated={task.dateCreated} 
                    key={task.thingToDo}
                    click={() => this.removeTaskHandler(index)}
                 />
        })}
      </div>);

    return (
      <div className="App">
        <h1>ToDo List App</h1>
        <p>Enter something to do in the text box then hit Enter</p>
        <p>Click an item to remove it from your ToDo List</p>
        <br/>
        <input 
          type="text"
          onKeyPress={this.handleKeyPress} 
        />
        <hr/>
        {tasks}
      </div>);
      }
}

export default App;
