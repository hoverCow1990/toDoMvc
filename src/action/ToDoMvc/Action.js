export const ADD_List = "ADD_List";
export const REMOVE_List = "REMOVE_List";
export const ACTIVE_TYPE = {
	ALL : "ALL",
	ACTIVE : "ACTIVE",
	DEFAULT : "DEFAULT"
}

export const addList = text => ({
	type : ADD_List,
	text
});

export const removeList = id => ({
	type : REMOVE_List,
	id
})

export const selectType = type => type;
