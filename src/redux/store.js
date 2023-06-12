import {createStore} from 'redux';
import counter from './reducers/counterReducer';

let store = createStore(counter);
export default store;