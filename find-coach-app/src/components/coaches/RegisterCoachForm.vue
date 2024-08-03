<template>
	<section>
		<form @submit.prevent="createNewCoach" ref="creachNewCoachForm">
			<div class="form-control" :class="{ invalid: !firstName.isValid }">
				<label for="firstname">First name</label>
				<input
					type="text"
					id="firstname"
					v-model.trim="firstName.value"
					@blur="removeInvalidity('firstName')"
				/>
				<small v-if="!firstName.isValid"
					>Firstname should not be empty</small
				>
			</div>
			<div class="form-control" :class="{ invalid: !lastName.isValid }">
				<label for="lastname">Last name</label>
				<input
					type="text"
					id="lastname"
					v-model.trim="lastName.value"
					@blur="removeInvalidity('lastName')"
				/>
				<small v-if="!lastName.isValid"
					>Lastname should not be empty</small
				>
			</div>
			<div
				class="form-control"
				:class="{ invalid: !description.isValid }"
			>
				<label for="description"> Description</label>
				<textarea
					type="text"
					id="description"
					rows="3"
					v-model.trim="description.value"
					@blur="removeInvalidity('description')"
				></textarea>
				<small v-if="!description.isValid"
					>Description should not be empty</small
				>
			</div>
			<div class="form-control" :class="{ invalid: !hourlyRate.isValid }">
				<label for="hourlyrate">Hourly Rate</label>
				<input
					type="number"
					id="hourlyrate"
					v-model.number="hourlyRate.value"
					@blur="removeInvalidity('hourlyRate')"
				/>
				<small v-if="!hourlyRate.isValid"
					>HourlyRate should not be empty</small
				>
			</div>
			<div class="form-control" :class="{ invalid: !areas.isValid }">
				<h3>Areas of expertise</h3>
				<div>
					<input
						type="checkbox"
						id="frontend"
						value="frontend"
						v-model="areas.value"
						@blur="removeInvalidity('areas')"
					/>
					<label for="frontend">Frontend</label>
				</div>
				<div>
					<input
						type="checkbox"
						id="backend"
						value="backend"
						v-model="areas.value"
						@blur="removeInvalidity('areas')"
					/>
					<label for="backend">Backend</label>
				</div>
				<div>
					<input
						type="checkbox"
						id="career"
						value="career"
						v-model="areas.value"
						@blur="removeInvalidity('areas')"
					/>
					<label for="career">Career</label>
					<small v-if="!areas.isValid"
						>Areas should not be empty</small
					>
				</div>
				<div class="form-control">
					<base-button> Register</base-button>
				</div>
			</div>
		</form>
	</section>
</template>

<script>
export default {
	data() {
		return {
			isFormValid: true,
			firstName: {
				value: "",
				isValid: true,
			},
			lastName: {
				value: "",
				isValid: true,
			},
			description: {
				value: "",
				isValid: true,
			},
			hourlyRate: {
				value: null,
				isValid: true,
			},
			areas: {
				value: [],
				isValid: true,
			},
		};
	},
	methods: {
		removeInvalidity(el) {
			this[el].isValid = true;
		},
		validateFields() {
			this.isFormValid = true;
			if (this.firstName.value === "") {
				this.isFormValid = false;
				this.firstName.isValid = false;
			}
			if (this.lastName.value === "") {
				this.isFormValid = false;
				this.lastName.isValid = false;
			}
			if (this.description.value === "") {
				this.isFormValid = false;
				this.description.isValid = false;
			}
			if (!this.hourlyRate.value && this.hourlyRate.value <= 0) {
				this.isFormValid = false;
				this.hourlyRate.isValid = false;
			}
			if (this.areas.value.length <= 0) {
				this.isFormValid = false;
				this.areas.isValid = false;
			}
		},
		createNewCoach() {
			this.validateFields();
			const coachData = {
				firstName: this.firstName.value,
				lastName: this.lastName.value,
				description: this.description.value,
				hourlyRate: this.hourlyRate.value,
				areas: this.areas.value,
			};
			if (this.isFormValid) {
				this.$emit("add-new-coach", coachData);
				this.$refs.creachNewCoachForm.reset();
			}
			console.log(coachData);
		},
	},
};
</script>

<style scoped>
.form-control {
	margin: 0.5rem 0;
}

label {
	font-weight: bold;
	display: block;
	margin-bottom: 0.5rem;
}

input[type="checkbox"] + label {
	font-weight: normal;
	display: inline;
	margin: 0 0 0 0.5rem;
}

input,
textarea {
	display: block;
	width: 100%;
	border: 1px solid #ccc;
	font: inherit;
}

input:focus,
textarea:focus {
	background-color: #f0e6fd;
	outline: none;
	border-color: #3d008d;
}

input[type="checkbox"] {
	display: inline;
	width: auto;
	border: none;
}

input[type="checkbox"]:focus {
	outline: #3d008d solid 1px;
}

h3 {
	margin: 0.5rem 0;
	font-size: 1rem;
}

.invalid label {
	color: red;
}

.invalid input,
.invalid textarea {
	border: 1px solid red;
}
</style>
