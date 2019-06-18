import { createStore } from 'redux';
import reducer from '../reducers';

export let { subscribe, dispatch, getState } = createStore(reducer);

