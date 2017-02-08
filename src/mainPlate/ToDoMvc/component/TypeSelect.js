import React,{Component} from "react";

class AddInput extends Component{
  constructor(){
    super();
  }
  render(){
    let {type,onSelectTab,ACTIVE_TYPE} = this.props,
        {ALL,ACTIVE,DEFAULT} = ACTIVE_TYPE;
  	return (
      <div className="selectTab">
        <div className={type==ALL?"onSelect":""} onClick={()=> onSelectTab(ALL)}>All</div>
        <div className={type==ACTIVE?"onSelect":""} onClick={()=> onSelectTab(ACTIVE)}>Active</div>
        <div className={type==DEFAULT?"onSelect":""} onClick={()=> onSelectTab(DEFAULT)}>Default</div>
      </div>
    )
  }
}

export default AddInput;