import React,{Component} from "react";

class TextList extends Component{
	constructor(){
		super();
	}
	render(){
		let{onRemoveList,onChangeType} = this.props;
		const listArr = this.getListArr();   
	  	const list = listArr.map(item => 
	  		<li key={item.id} type={item.type}>
	  			<p>{item.value}</p>
				<span className={"selecter "+item.type.toLowerCase()} onClick={(id,type) => onChangeType(item.id,item.type)}></span>
				<span className="delete" onClick={id => onRemoveList(item.id)}></span>
			</li>
	  	)
		return(
	      	<div className="dialogText">
	      		<ul>
	    			{list}
	    		</ul>
	    		<div></div>
	    	</div>
	    )
	}
	getListArr(){
		let {type,ACTIVE_TYPE,infoList} = this.props;
		if(type == ACTIVE_TYPE.ALL) return infoList;
		return infoList.filter(item => item.type == type);
	}
}

export default TextList;