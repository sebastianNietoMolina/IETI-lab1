import React from 'react';
import {Todo} from './Todo'

export class TodoList extends React.Component {

    constructor(props) {
        super(props);
    }
    
    render(){

        const todoList = this.props.todoLis.map((data, i) => 
            <li key={"key_"+i}> 
                <Todo text={data.text} priority={data.priority} dueDate={data.dueDate} />
            </li>
        );

        return (
            <ul>{todoList}</ul>
        );
    }

};