import {createStore,compose} from 'redux'
import reducer from './reducer.js';


const store = createStore(reducer);
//,compose(window.devToolsExtension())

export default store;