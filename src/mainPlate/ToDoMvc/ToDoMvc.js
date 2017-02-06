import React,{Component} from "react";
import {connect} from 'react-redux';
import AddInput from './component/AddInput.js';
import TextList from './component/TextList.js';

class ToDoMvc extends Component{
	constructor(){
		super();
	}
	render(){
		let {dispatch,type,infoList} = this.props;
    <div className="ListBox">
      <AddInput />
      <TextList infoList={infoList}/>
    </div>
	}
}

function stateMap(state){
  return {
     type : state.type,
     infoList : state.infoList
  }
}

export default connect(stateMap)(ToDoMvc);