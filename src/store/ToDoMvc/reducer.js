import {combineReducers} from 'redux';
import {
	ADD_List,
	REMOVE_List,
	ACTIVE_TYPE
} from '../../action/ToDoMvc/Action.js';

const initState = {
	type : ACTIVE_TYPE.ALL,
	infoList : [
		{
			id : 0,
			value : "hello My Cow",
			type : ACTIVE_TYPE.DEFAULT
		},
		{
			id : 1,
			value : "2bNian hehehehe",
			type : ACTIVE_TYPE.DEFAULT
		}
	]
}

const Crud = (state = initState,action) => {
	switch(action.type){
		case ADD_List :
			let {id,value} = action;
			var infoList = [...infoList,{
				id,
				value,
				type : ACTIVE_TYPE.DEFAULT
			}]
			return Object.assign({},state,infoList);
		case REMOVE_List :
			var infoList = [...state.infoList].filter(
				item => item.id != action.id
			)
			return Object.assign({},state,{infoList});
		default :
			return state;
	}
}

const SelectAction = (state=initState,action) => {
	switch(action.type){
		case ACTIVE_TYPE.ALL :
			return Object.assign({},state,{type:action.type})
		default :
			return state;
	}
}

const reducer = combineReducers({
    Crud,
    SelectAction
})

export default Crud ;