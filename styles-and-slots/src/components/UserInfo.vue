<template>
	<base-card>
		<!-- <template v-slot:header> this is long mention of slots, below is shorthand-->
		<template #header>
			<h3>{{ fullName }}</h3>
			<base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
		</template>

		<!-- if template is not mentioned, all the content goes to the default slot -->
		<!-- default content of the slot will be shown instead if below line is commented -->
		<p>{{ infoText }}</p>
	</base-card>
</template>

<script>
export default {
	props: ["fullName", "infoText", "role"],
};
</script>
