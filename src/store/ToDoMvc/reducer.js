import {combineReducers} from 'redux';
import {
	ADD_List,
	REMOVE_List,
	CHANGE_TYPE,
	SELECT_TYPE,
	ACTIVE_TYPE,
} from '../../action/ToDoMvc/Action.js';

const initState = {
	type : ACTIVE_TYPE.ALL,
	infoList : [
		{
			id : 0,
			value : "有时候你很努力,但现实却总离预期有差距",
			type : ACTIVE_TYPE.DEFAULT
		},
		{
			id : 1,
			value : "即使这样,我也定会为自己的理想奋斗一生",
			type : ACTIVE_TYPE.DEFAULT
		},
		{
			id : 2,
			value : `React+Redux非常精炼,良好运用将发挥出极强劲的生产力.
			但最大的挑战来自于函数式编程[FP]范式.在工程化过程中,架构[顶层]设计将是一个巨大的挑战.
			要不然做出来的东西可能是一团乱麻.说到底,传统框架与react+redux就是OO与FP编程范式的对决.`,
			type : ACTIVE_TYPE.DEFAULT
		}
	],
}

const type = (state = initState.type,action) => {
	switch(action.type){
		case SELECT_TYPE :
			return action.selectType;
		default :
			return state;	
	}
}

const infoList = (state = initState.infoList,action) => {
	switch(action.type){
		case ADD_List :
			let {id,value} = action;
			return [...state,{
				id,
				value,
				type : ACTIVE_TYPE.DEFAULT
			}];
		case REMOVE_List :
			return [...state].filter(
				item => item.id != action.id
			);
		case CHANGE_TYPE :
			var infoList = [...state];
			var index = infoList.findIndex(item => item.id == action.id);
			infoList[index].type = action.activeType;
			return infoList;
		default :
			return state;
	}
}

const reducer = combineReducers({
	type,
    infoList
})

export default reducer;