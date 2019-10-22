import { connect } from 'react-redux';
import { Action } from 'redux';
import * as React from 'react';
import { 
    SET_VISIBILITY_FILTER,
    ADD_TODO,
    TOGGLE_TODO,
    VisibilityFilters,
 } from './action';

export interface AddTodo {
    text: string;
    completed : boolean;
}
export interface Visibility {
    text: string;
    completed : boolean;
}

const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: [],
};
function todos(state = [], action: Action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo
            })
        default:
            return state
    }
}

function todoApp(state = initialState, action: Action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return Object.assign({}, state, {
                visibilityFilter: action.filter
            });
        case ADD_TODO:
            return Object.assign({}, state, {
                todos: todos(state.todos, action)
            });
        case TOGGLE_TODO:
            return Object.assign({}, state, {
                todos: todos(state.todos, action)
            });
        default:
            return state;
    }
}

class ReduxTry extends React.Component{
    public render() {
        return (
            <React.Fragment>
                <h1>Redux</h1>
            </React.Fragment>
        );
    }
};

export default connect()(ReduxTry);