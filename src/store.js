import { createStore } from 'redux';
import { colorReducer } from './reducers/Buttons.js';

export const store = createStore(colorReducer);