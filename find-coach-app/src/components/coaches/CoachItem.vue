<template>
	<section>
		<div class="coachCard">
			<h1>{{ fullName }}</h1>
			<p>
				<strong> $ {{ hourlyRate }}/hour </strong>
			</p>
			<div class="areas">
				<base-badge
					v-for="area in areas"
					:key="area"
					:title="area"
					:type="area"
				></base-badge>
			</div>
			<div class="actions">
				<base-button link mode="outline" :to="coachDetailLink"
					>View Details</base-button
				>
				<base-button link :to="coachContactLink">Contact</base-button>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	props: ["id", "firstName", "lastName", "hourlyRate", "areas"],
	computed: {
		fullName() {
			return this.firstName + " " + this.lastName;
		},
		coachContactLink() {
			return `/coaches/${this.id}/contact`;
		},
		coachDetailLink() {
			return `/coaches/${this.id}`;
		},
	},
};
</script>

<style scoped>
.coachCard {
	border: 1px solid black;
	border-radius: 5px;
	padding: 10px;
	margin: 1em 0;
}

.areas {
	margin: 1em 0;
}

.actions {
	display: flex;
	justify-content: end;
}
</style>
