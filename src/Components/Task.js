import React from 'react';
import './Task.css';


const task = (props) => {
    return (
        <div className="Task" onClick={props.click}>
            <p>{props.thingToDo}</p>
            <p id='date'>{props.dateCreated}</p>
        </div>
    )
};

export default task;