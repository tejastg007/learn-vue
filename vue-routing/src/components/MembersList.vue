<template>
	<button @click="navigateToTeams">Go to Teams</button>
	<div class="card-container">
		<div class="card" v-for="member in members" :key="member.name">
			<h2>{{ member.name }}</h2>
		</div>
	</div>
</template>
<script>
export default {
	inject: ["members"],
	// data() {
	// 	return {
	//
	// 	};
	// },
	methods: {
		navigateToTeams() {
			this.$router.push("/teams");
		},
	},
};
</script>
<style scoped></style>
