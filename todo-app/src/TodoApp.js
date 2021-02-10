import React from 'react';
import {TodoList} from './TodoList';
import logo from './logo.svg';
import './App.css';



export class TodoApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '', priority: '', dueDate: new Date()};
      this.handleText = this.handleText.bind(this);
      this.handlePriority = this.handlePriority.bind(this);
      this.handleDate = this.handleDate.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    render() {
      return (
        <div>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h3>TODO</h3>
            <TodoList todoLis={this.state.items} />
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="new-todo">
                    Ingresa tus datos, recuerda que debe ser el texto y la prioridad: 
                </label>
                <input
                    id="text"
                    onChange={this.handleText}
                    value={this.state.text}
                />
                <input
                    id="priority"
                    onChange={this.handlePriority}
                    value={this.state.priority}
                />
                <input
                    id="dueDate"
                    type="date"
                    onChange={this.handleDate}
                    value={this.state.dueDate}
                />
                <button>
                    Add #{this.state.items.length + 1}
                </button>
            </form>
          </header>
        </div>
      );
    }
  
    handleText(e) {
      this.setState({ text: e.target.value });
    }

    handlePriority(e) {
        this.setState({ priority: e.target.value });
    }

    handleDate(e){
        this.setState({dueDate: e.target.value});
    }

    handleSubmit(e) {
      e.preventDefault();
      if (!this.state.text.length) {
        return;
      }
      const newItem = {
        text: this.state.text,
        priority: this.state.priority,
        dueDate: this.state.dueDate
      };
      this.setState(prevState => ({
        items: prevState.items.concat(newItem),
        text: '',
        priority: '',
        dueDate: ''
      }));
    }
  }