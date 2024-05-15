<template>
	<div class="card-container">
		<h2 style="text-align: center; margin: 10px 0px">{{ team.name }}</h2>
		<button @click="goback">back</button>
		<div class="card" v-for="member in teamMembers" :key="member.id">
			<h2>{{ member.name }}</h2>
		</div>
	</div>
</template>

<script>
export default {
	inject: ["teams", "members"],
	// instead of using the $route to get the parameters from the url, use the props
	// so that, this component is more reusable
	// before this, add the new property to the router configuration
	props: ["teamId"],
	data() {
		return {
			teamMembers: [],
			team: "",
		};
	},
	methods: {
		goback() {
			this.$router.back();
		},
		getTeamMembers() {
			const teamId = this.teamId;
			const team = this.teams.find((team) => team.id == teamId);
			const members = this.members.filter((member) => member.teamId == teamId);
			this.teamMembers = members;
			this.team = team;
		},
	},
	created() {
		this.getTeamMembers(this.teamId);
	},
	watch: {
		teamId(newTeamId) {
			this.getTeamMembers(newTeamId);
		},
	},
	beforeRouteUpdate(to, from, next) {
		console.log("before route update");
		console.log(to, from);
		next();
	},
	beforeRouteEnter(to, from, next) {
		console.log("before route enter team members");
		console.log(to, from);
		next();
	},
};
</script>
