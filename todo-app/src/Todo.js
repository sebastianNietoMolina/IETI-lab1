import React from 'react';

export class Todo extends React.Component {

    constructor(props) {
        super(props);
    }   

    render() {
        return (  
            <div>
                {/* Add your code here to represent a TODO */}
                <h2> {"Text: " + this.props.text} ... </h2>
                {/* Do not forget to add the other properties of your TODO! */}
                <h2> {"Priority: " + this.props.priority} ... </h2>
                <h2> {"dueDate: " + this.props.dueDate} ... </h2>
          </div>
        );
    }

}