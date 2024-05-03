<template>
	<div class="container">
		<input v-model="friendInfo.name" placeholder="Enter name" type="text" />
		<input v-model="friendInfo.email" placeholder="Enter email" type="email" />
		<input v-model="friendInfo.phone" placeholder="Enter phone" type="tel" />
		<input type="submit" value="Add new Friend" @click="addFriend" />
	</div>
</template>

<script>
export default {
	data() {
		return {
			friendInfo: {
				id: Math.random(),
				name: "",
				email: "",
				phone: "",
			},
		};
	},
	emits: ["add-friend"],
	methods: {
		addFriend() {
			this.$emit("add-friend", this.friendInfo);
		},
	},
};
</script>

<style scoped>
.container {
	width: 300px;
	background-color: rgb(220, 220, 220);
	padding: 10px 15px;
}
input {
	display: inline-block;
	width: 100%;
	padding: 10px 15px;
	margin: 5px 0px;
}
</style>
