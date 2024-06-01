<template>
	<button @click="login" v-if="isAuth !== true">Login</button>
	<button @click="logout" v-if="isAuth === true">Logout</button>
</template>

<script>
export default {
	methods: {
		login() {
			this.$store.dispatch("login");
		},
		logout() {
			this.$store.dispatch("logout");
		},
	},
	computed: {
		isAuth() {
			return this.$store.getters.userIsAuthenticated;
		},
	},
};
</script>
