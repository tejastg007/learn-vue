<template>
	<h1>Manage Goals</h1>
	<input type="text" ref="newGoal" />
	<button @click="setGoal">Set Goal</button>
	<Teleport to="body">
		<error-dialog v-if="isInputInvalid">
			<h3>Error!!</h3>
			<p>Please enter atleast some few words!</p>
			<button @click="removeError">Ok</button>
		</error-dialog>
	</Teleport>
</template>

<script>
// new way of importing components
import ErrorDialog from "./ErrorDialog";

export default {
	components: {
		ErrorDialog,
	},
	data() {
		return {
			isInputInvalid: false,
		};
	},
	methods: {
		setGoal() {
			let enteredGoal = this.$refs.newGoal.value;
			if (!enteredGoal) {
				this.isInputInvalid = true;
			}
		},
		removeError() {
			this.isInputInvalid = false;
		},
	},
};
</script>
