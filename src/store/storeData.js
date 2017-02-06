import { createStore } from 'redux';

const Store = createStore(function(){
	return {
		a : 1,
		b : 2
	}
});
console.log(Store);
export default Store;