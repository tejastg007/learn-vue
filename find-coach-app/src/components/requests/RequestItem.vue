<template>
	<section>
		<h3>{{ coachId }}</h3>
		<a :href="emailLink">
			<strong>{{ email }}</strong>
		</a>
		<p>
			<small>{{ message }}</small>
		</p>
	</section>
</template>
<script>
export default {
	props: ["id", "coachId", "email", "message"],
	computed: {
		emailLink() {
			return `mailto:${this.email}`;
		},
	},
};
</script>
<style scoped></style>
