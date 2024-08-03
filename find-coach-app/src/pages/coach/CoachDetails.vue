<template>
	<section>
		<base-card>
			<h2>{{ fullName }}</h2>
			<p>
				<strong>${{ hourlyRate }}/hour</strong>
			</p>
		</base-card>
		<base-card>
			<h2>Interested? Reach out now!</h2>
			<base-button link :to="to">Contact</base-button>
			<base-button link :to="viewRequestsLink">View Requests</base-button>
			<router-view></router-view>
		</base-card>
		<base-card>
			<base-badge
				v-for="area in areas"
				:key="area"
				:title="area"
				:type="area"
			></base-badge>
			<p>{{ description }}</p>
		</base-card>
	</section>
</template>

<script>
export default {
	props: ["id"],
	data() {
		return {
			getCoachDetail: null,
		};
	},
	computed: {
		fullName() {
			return (
				this.getCoachDetail.firstName +
				" " +
				this.getCoachDetail.lastName
			);
		},
		hourlyRate() {
			return this.getCoachDetail.hourlyRate;
		},
		areas() {
			return this.getCoachDetail.areas;
		},
		to() {
			return `/coaches/${this.id}/contact`;
		},
		description() {
			return this.getCoachDetail.description;
		},
		viewRequestsLink() {
			return `/requests/${this.id}`;
		},
	},
	created() {
		this.getCoachDetail = this.$store.getters["coach/getCoaches"].find(
			(coach) => coach.id === this.id
		);
	},
};
</script>
