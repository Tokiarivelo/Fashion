import React from "react";
import { connect } from "react-redux";
import * as TodoStore from "../redux/actions";
import { RouteComponentProps } from 'react-router';


type TodoProps =
    TodoStore.Todo &
    typeof TodoStore.actionCreators &
    RouteComponentProps<{}>;
type State = {
    input: string,
}

class AddTodo extends React.Component<TodoProps, State> {

    readonly state: State = {
        input: '',
    };
    updateInput = (input : string) => {
        this.setState({ input });
    };

    handleAddTodo = () => {
        this.props.add(this.state.input);
        this.setState({ input: "" });
    };

    render() {
        return (
            <div>
                <input
                    onChange={e => this.updateInput(e.target.value)}
                    value={this.state.input}
                />
                <button className="add-todo" onClick={this.handleAddTodo}>
                    Add Todo
                </button>
            </div>
        );
    }
}

export default connect(
    null,
    TodoStore.actionCreators 
)(AddTodo);
// export default AddTodo;