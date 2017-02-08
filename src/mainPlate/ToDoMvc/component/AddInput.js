import React,{Component} from "react";

class AddInput extends Component{
  constructor(){
    super();
  }
  render(){
  	let {addList} = this.props;
    return(
      <div className="addInputBox">
      	<input ref="addValue" type="text" />
      	<input type="submit" value="提交" onClick={() => this.addList()}/>
      </div>
    )
  }
  addList(){
  	let {onAddList,onSelectTab} = this.props,
  		value = this.refs.addValue.value,
  		id = this.getMaxId();
    onAddList(value,id);
    onSelectTab();
    this.refs.addValue.value = "";
  }
  getMaxId(){
    let state = this.props.infoList;
    return state.slice(-1)[0].id+1;
  }
}

export default AddInput;