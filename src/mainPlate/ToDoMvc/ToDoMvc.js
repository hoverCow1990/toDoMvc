import React,{Component} from "react";
import {connect} from 'react-redux';
import TypeSelect from './component/TypeSelect.js';
import AddInput from './component/AddInput.js';
import TextList from './component/TextList.js';
import {
    addList,
    removeList,
    changeType,
    selectTab,
    ACTIVE_TYPE
} from '../../action/ToDoMvc/Action';
import "./ToDoMvc.less";


class ToDoMvc extends Component{
	constructor(){
		super();
	}
	render(){
		let {dispatch,type,infoList} = this.props;
    return(
      <div className="ListBox">
        <TypeSelect type={type} ACTIVE_TYPE={ACTIVE_TYPE}
          onSelectTab={selectType => 
            dispatch(selectTab(selectType))
        }/>
        <AddInput infoList={infoList}
          onAddList={(value,id) => 
            dispatch(addList(value,id))
          } 
          onSelectTab={() => 
            dispatch(selectTab(ACTIVE_TYPE.ALL))
        }/>
        <TextList infoList={infoList} type={type} ACTIVE_TYPE={ACTIVE_TYPE}
          onRemoveList={id => 
            dispatch(removeList(id))
          } 
          onChangeType={(id,activeType) => 
            dispatch(changeType(id,activeType))
          }/>
      </div>
    )
	}
}

function stateMap(state){
  return Object.assign({},state);
}

export default connect(stateMap)(ToDoMvc);