import { createStore } from "vuex";
import coachModule from "./modules/coaches/index.js";
import requestsModule from "./modules/requests/index.js";
const store = createStore({
	modules: {
		coach: coachModule,
		request: requestsModule,
	},
	state() {
		return {
			coachId: Date.now().toString(36),
		};
	},
	getters: {
		userId(state) {
			return state.coachId;
		},
	},
});

export default store;
