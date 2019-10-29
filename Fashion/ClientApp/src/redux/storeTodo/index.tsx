import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import {State, reducer} from '../reducers'
import { Action } from '../actions';

const store = createStore<State, Action, any, any>(reducer, applyMiddleware(logger));

export default store;