<template>
	<section>
		<h3>Add User</h3>
		<form @submit.prevent="submitAddUserForm">
			<input v-model="newUser.name" type="text" />
			<input v-model="newUser.age" type="number" />
			<input type="submit" value="Add User" />
		</form>
	</section>
</template>

<script>
export default {
	emits: ["add-user"],
	data() {
		return {
			newUser: {
				id: Math.random(),
				name: "",
				age: "",
			},
		};
	},
	methods: {
		submitAddUserForm() {
			console.log(this.newUser);
			this.$emit("add-user", this.newUser);
			this.newUser = {};
		},
	},
};
</script>

<style scoped>
section {
	width: 100%;
	background-color: orange;
	padding: 10px 15px;
}
h3 {
	text-align: center;
	margin: 10px;
}
input {
	display: inline-block;
	width: 100%;
	padding: 10px 15px;
	border-radius: 5px;
	outline: none;
	border: none;
	margin: 5px;
}
input[type="submit"] {
	background-color: rgb(2, 104, 125);
	color: white;
}
</style>
