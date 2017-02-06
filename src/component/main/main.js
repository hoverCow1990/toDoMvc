import React from "react";
import { createStore } from 'redux';
// import store from "../../store/data.js"


const defaultState = {
	text : "2hello",
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD':
      return Object.assign({},state,action);
    default: 
      return state;
  }
};

const store = createStore(reducer);

const actions = [
  { type: 'ADD'},
  // { type: 'ADD', payload: 1 },
  // { type: 'ADD', payload: 2 }
];


// const total = actions.reduce(reducer,{text:"hehe"}); // 5
// console.log(total)

// console.log(store);
const Main = React.createClass({
	getInitialState(){
		return {
			text : "coco"
		}
	},
	render(){
		console.log(store.getState().text);
		return (
			<div>
				<Mo text={store.getState().text} />
				<input type="text" ref="val"/>
				<button onClick = {(e) => this.change(e)}>click</button>
			</div>
		)
	},
	componentDidMount(){
		const This = this;
		store.subscribe(this.render);
	},
	change(e){
		const total = actions.reduce(reducer,{text:this.refs.val.value}); // 5
		//const total = reducer(store.getState(),{type:"ADD",text:this.refs.val.value})
		store.dispatch(total);
		// actions.reduce(reducer,3);
	}
})

const Mo = React.createClass({
	render(){
		return (
			<h1>{this.props.text}</h1>
		)
	}
})


export default Main;