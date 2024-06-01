<template>
	<base-container title="Vuex" v-if="isAuth === true">
		<h3>{{ counter }}</h3>
		<h3>{{ counter2 }}</h3>
		<button @click="add">Add 1</button>
		<button @click="addTen">Add 10</button>
		<button @click="increment">Add 10</button>
		<button @click="increase({ by: 10 })">Add 10</button>
	</base-container>
	<base-container title="Auth">
		<user-auth></user-auth>
	</base-container>
</template>

<script>
import BaseContainer from "./components/BaseContainer.vue";
import UserAuth from "./components/UserAuth.vue";
import { mapActions } from "vuex";
export default {
	components: {
		BaseContainer,
		UserAuth,
	},
	methods: {
		...mapActions(["increment", "increase"]),
		add() {
			// this.$store.commit("increment");
			this.$store.dispatch("increment");
		},
		addTen() {
			// this.$store.commit("increase", { by: 10 });
			// this.$store.commit({
			// 	type: "increase",
			// 	by: 10,
			// });
			this.$store.dispatch("increase", { by: 10 });
		},
	},
	computed: {
		counter() {
			return this.$store.state.counter;
		},
		counter2() {
			// return this.$store.getters.counterLimit;
			return this.$store.getters.normalizedCounterLimit;
		},
		isAuth() {
			return this.$store.getters.userIsAuthenticated;
		},
	},
};
</script>

<style>
* {
	box-sizing: border-box;
}

html {
	font-family: sans-serif;
}

body {
	margin: 0;
}
</style>
