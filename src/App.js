import React,{ Component } from "react";
import {Provider} from 'react-redux';
import {ToDoMvc} from './mainPlate/ToDoMvc/ToDoMvc.js';
import ToDoMvcStore from './store/ToDoMvc/store.js';
console.log(ToDoMvcStore.getState());
class App extends Component{
	constructor(){
   	 	super();
  	}
  	render(){
		return (
			<Provider store={ToDoMvcStore}>
				<ToDoMvc/>
			</Provider>
		)
	}
}

export default App;