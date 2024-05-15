<template>
	<div>
		<button @click="navigateToMembers">Go to members</button>
		<router-view></router-view>
		<div class="card-container">
			<button @click="saveChanges">Save changes</button>
			<div class="card" v-for="team in teams" :key="team.name">
				<!-- <router-link :to="'/teams/' + team.id"> -->
				<!-- <router-link :to="{ path: '/teams/' + team.id }"> -->
				<router-link
					:to="{ name: 'team-members', params: { teamId: team.id } }"
				>
					<h2>{{ team.name }}</h2>
				</router-link>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	inject: ["teams", "getTeamById"],
	data() {
		return {
			dataSaved: false,
		};
	},
	methods: {
		saveChanges() {
			this.dataSaved = true;
		},
		navigateToMembers() {
			this.$router.push("/members");
		},
	},
	beforeRouteLeave(to, from, next) {
		if (this.dataSaved) {
			next();
		} else {
			next(confirm("you have unsaved changes, want to continue?"));
		}
	},
};
</script>
