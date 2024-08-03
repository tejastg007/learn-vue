import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";

export default {
	namespaced: true,
	state() {
		return {
			requests: [],
		};
	},
	actions: actions,
	mutations: mutations,
	getters: getters,
};
