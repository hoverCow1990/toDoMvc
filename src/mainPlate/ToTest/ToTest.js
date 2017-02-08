import React,{Component} from "react";
import {connect} from 'react-redux';
import {
    addList,
    removeList,
    changeType,
    selectTab,
    ACTIVE_TYPE
} from '../../action/ToDoMvc/Action';
import "./ToTest.less";


class ToTest extends Component{
	constructor(){
		super();
	}
	render(){
		// let {dispatch,type,infoList} = this.props;
    return(
      <div>333</div>
    )
	}
}

function stateMap(state){
  return Object.assign({},state);
}

export default connect(stateMap)(ToTest);