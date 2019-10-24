import { connect } from 'react-redux';
import * as React from 'react';
import { AddTodo } from './AddTodo'

class ReduxTry extends React.Component{
    public render() {
        return (
            <React.Fragment>
                <h1>React-redux</h1>
                <AddTodo/>
            </React.Fragment>
        );
    }
};

export default connect()(ReduxTry);