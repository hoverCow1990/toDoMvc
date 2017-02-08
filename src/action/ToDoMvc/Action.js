export const ADD_List = "ADD_List";
export const REMOVE_List = "REMOVE_List";
export const CHANGE_TYPE = "CHANGE_TYPE";
export const SELECT_TYPE = "SELECT_TYPE";
export const ACTIVE_TYPE = {
	ALL : "ALL",
	ACTIVE : "ACTIVE",
	DEFAULT : "DEFAULT"
}

export const addList = (value,id) => ({
	type : ADD_List,
	value,
	id
});

export const removeList = id => ({
	type : REMOVE_List,
	id
})

export const changeType = (id,activeType) => {
	var activeType = activeType == ACTIVE_TYPE.ACTIVE?ACTIVE_TYPE.DEFAULT:ACTIVE_TYPE.ACTIVE;
	return {
		type : CHANGE_TYPE,
		activeType,
		id,
	}
}

export const selectTab = (selectType) => ({
	type : SELECT_TYPE,
	selectType
})

export const selectType = type => type;
