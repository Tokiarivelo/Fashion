import * as React from 'react';
import TodoList from './TodoList';

interface todo{
    id : number,
    content : string,
    completed : boolean
}
interface todos{
    input : string,
    todos: todo[]
}

export default class AddTodo extends React.Component {
    state: todos = {
        input : '',
        todos : []
    };
    
    _handleAddTodo(value : string){
        this.state.todos.push({ id:1, content : value, completed : false});
    }

    _updateinput(value : string){
        this.setState({ input: value});
    }
    updateinput = (event: React.ChangeEvent<HTMLInputElement>) =>{
        this._updateinput(event.target.value);
    }

    handleAddTodo = (event: React.MouseEvent<HTMLButtonElement>) =>{
        event.preventDefault();
        this._handleAddTodo(this.state.input);
    }
    render(){
        return(
            <React.Fragment>
                <input type="text" onChange={this.updateinput}/>
                <button onClick={this.handleAddTodo}>Add Todo</button>
                <TodoList todos={this.state.todos}/>
            </React.Fragment>
        )
    }
}