<template>
	<h2>Users</h2>

	<transition-group tag="ul" name="users-list">
		<li @click="deleteUser(user)" v-for="user in users" :key="user">
			{{ user }}
		</li>
	</transition-group>

	<input type="text" ref="newUser" />
	<button @click="addUser">Add User</button>
</template>
<script>
export default {
	data() {
		return {
			users: ["tony", "captain", "clerk", "natasha", "hulk", "falcon"],
		};
	},
	methods: {
		addUser() {
			const newUser = this.$refs.newUser.value;
			this.users.unshift(newUser);
		},
		deleteUser(userToDelete) {
			this.users = this.users.filter((user) => user != userToDelete);
		},
	},
};
</script>
<style scoped>
ul {
	list-style-type: none;
}
li {
	border: 1px solid black;
	padding: 7px;
}

.users-list-enter-from,
.users-list-leave-to {
	opacity: 0;
	transform: translateX(-30px);
}
.users-list-enter-active,
.users-list-leave-active {
	transition: all 1s ease-in;
}
.users-list-leave-active {
	position: absolute;
}
.users-list-enter-to,
.users-list-leave-from {
	opacity: 1;
	transform: translateX(0px);
}
.users-list-move {
	transition: transform 0.3s ease;
}
</style>
