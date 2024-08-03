<template>
	<base-card>
		<h1>Register as a coach!</h1>
		<register-coach-form @add-new-coach="addCoach"></register-coach-form>
	</base-card>
</template>

<script>
import RegisterCoachForm from "@/components/coaches/RegisterCoachForm.vue";
export default {
	components: { RegisterCoachForm },
	methods: {
		addCoach(data) {
			this.$store.dispatch("coach/addCoach", data);
			this.$router.replace("/coaches");
		},
	},
};
</script>
