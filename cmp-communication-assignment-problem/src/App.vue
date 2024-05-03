<template>
	<section class="app">
		<h3>{{ heading }}</h3>
		<div class="container">
			<div class="active-users">
				<user-data @add-user="handleAddUser"></user-data>
			</div>
			<div class="add-users-form">
				<ul v-if="activeUsers.length > 0">
					<active-user
						v-for="activeUser in activeUsers"
						:key="activeUser.id"
						:id="activeUser.id"
						:name="activeUser.name"
						:age="activeUser.age"
					>
					</active-user>
				</ul>
				<p
					v-else
					style="
						height: 100%;
						display: flex;
						align-items: center;
						justify-content: center;
					"
				>
					No users currently
				</p>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			heading: "This is component communication assignment",
			activeUsers: [], //keys= id, name, age
		};
	},
	methods: {
		handleAddUser(newUserObj) {
			this.activeUsers.push(newUserObj);
		},
	},
};
</script>

<style>
* {
	padding: 0px;
	margin: 0px;
	box-sizing: border-box;
}
</style>

<style scoped>
h3 {
	color: white;
	padding: 30px;
	text-align: center;
	background-color: rgb(40, 40, 40);
}

section.app {
	width: 70vw;
	margin: 20px auto 0px;
}
.container {
	display: flex;
	padding: 15px 0px;
	justify-content: space-between;
	justify-items: center;
}
.active-users,
.add-users-form {
	max-height: 300px;
	width: 48%;
	padding: 10px 15px;
	border-radius: 5px;
	position: relative;
}
.add-users-form {
	overflow-y: auto;
}
.add-users-form ul {
	list-style-type: none;
}
</style>
