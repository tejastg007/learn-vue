import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
const counterModule = {
	state() {
		return {
			counter: 0,
		};
	},
	mutations: {
		increment(state) {
			state.counter++;
		},
		increase(state, payload) {
			state.counter = state.counter + payload.by;
		},
	},
	actions: {
		increment(context) {
			setTimeout(function () {
				context.commit("increment");
			}, 2000);
		},
		increase(context, payload) {
			context.commit("increase", payload);
		},
	},
	getters: {
		counterLimit(state, getters) {
			return state.counter;
		},
		normalizedCounterLimit(state, getters) {
			const finalCounter = getters.counterLimit;
			if (finalCounter > 100) {
				return 100;
			}
			return finalCounter;
		},
	},
};
const store = createStore({
	modules: {
		counterModule: counterModule,
	},
	state() {
		return {
			isAuthenticated: false,
		};
	},
	mutations: {
		auth(state, payload) {
			state.isAuthenticated = payload.auth;
		},
	},
	actions: {
		login(context) {
			context.commit("auth", { auth: true });
		},
		logout(context) {
			context.commit("auth", { auth: false });
		},
	},
	getters: {
		userIsAuthenticated(state) {
			return state.isAuthenticated;
		},
	},
});
const app = createApp(App);
app.use(store);
app.mount("#app");
