<template>
	<section>
		<form @submit.prevent="submitRequest" ref="submitRequestForm">
			<div class="form-control">
				<label for="email">Email</label>
				<input type="email" id="email" v-model.trim="email" />
			</div>
			<div class="form-control">
				<label for="message">Message</label>
				<textarea
					type="text"
					id="message"
					rows="5"
					v-model.trim="message"
				/>
			</div>
			<div class="form-control" v-if="!isFormValid">
				<small class="errors"
					>Please fill all fields and enter correct data!</small
				>
			</div>
			<div class="form-control">
				<base-button>Submit</base-button>
			</div>
		</form>
	</section>
</template>
<script>
export default {
	data() {
		return {
			isFormValid: true,
			email: "",
			message: "",
		};
	},
	methods: {
		submitRequest() {
			this.isFormValid = true;
			if (this.email == "" || this.message == "") {
				this.isFormValid = false;
				return;
			}
			this.$store.dispatch("request/coachContact", {
				coachId: this.$route.params.id,
				email: this.email,
				message: this.message,
			});
			this.$refs.submitRequestForm.reset();
		},
	},
};
</script>
<style scoped>
form {
	margin: 1rem;
	border: 1px solid #ccc;
	border-radius: 12px;
	padding: 1rem;
}

.form-control {
	margin: 0.5rem 0;
}

label {
	font-weight: bold;
	margin-bottom: 0.5rem;
	display: block;
}

input,
textarea {
	display: block;
	width: 100%;
	font: inherit;
	border: 1px solid #ccc;
	padding: 0.15rem;
}

input:focus,
textarea:focus {
	border-color: #3d008d;
	background-color: #faf6ff;
	outline: none;
}

.errors {
	font-weight: bold;
	color: red;
}

.actions {
	text-align: center;
}
</style>
