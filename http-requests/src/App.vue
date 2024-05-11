<template>
	<div class="formContainer">
		<h1>Add your firebase realtime database endpoint</h1>
		<form @submit.prevent="submitUserData" ref="userDataForm">
			<input type="text" v-model="userName" placeholder="username..." />
			<input type="number" v-model="userAge" placeholder="age..." />
			<input type="submit" value="Submit" />
			<p style="color: red" v-if="postError">
				Something went wrong, pleases try again!!!
			</p>
		</form>
		<button @click="fetchAllUsers" type="button" class="fetchUsersBtn">
			Fetch all users
		</button>

		<p style="color: white" class="loadingText" v-if="fetchingUsers">
			Loading users....
		</p>
		<div v-else>
			<div class="allUsers" v-if="!fetchError && allUsers.length > 0">
				<div class="user">
					<h4 v-for="user in allUsers" :key="user.id">
						{{ user.name }} ,{{ user.age }}
					</h4>
				</div>
			</div>
			<div v-else-if="!fetchError && allUsers.length == 0">
				<h3 style="color: white">No users in database</h3>
			</div>
			<div v-else>
				<h3 style="color: white">Error fetching users!!!</h3>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "App",
	data() {
		return {
			allUsers: [],
			userName: "",
			userAge: "",
			fetchingUsers: false,
			endpoint: "",
			fetchError: null,
			postError: null,
		};
	},
	methods: {
		submitUserData() {
			fetch(this.endpoint, {
				method: "post",
				header: {
					"Content-type": "application/json",
				},
				body: JSON.stringify({
					userName: this.userName,
					userAge: this.userAge,
				}),
			})
				.then((data) => {
					if (!data.ok) {
						throw new Error(data.statusText);
					} else {
						console.log("submit then");
						console.log(data);
						this.postError = null;
						if (data) this.fetchAllUsers();
					}
				})
				.catch((error) => {
					this.postError = error;
					console.log("error in posting");
					console.log(error);
				});
			this.userName = null;
			this.userAge = null;
			this.$refs.userDataForm.reset();
		},

		fetchAllUsers() {
			this.fetchError = null;
			this.fetchingUsers = true;
			fetch(this.endpoint)
				.then((data) => {
					this.fetchError = null;
					return data.json();
				})
				.then((data) => {
					this.fetchingUsers = false;
					if (!data) {
						this.allUsers = [];
					} else
						this.allUsers = Object.keys(data).map((key) => {
							return {
								id: data[key],
								name: data[key].userName,
								age: data[key].userAge,
							};
						});
				})
				.catch((error) => {
					this.fetchingUsers = false;
					this.fetchError = error;
					console.log(error);
				});
		},
	},
	mounted() {
		this.fetchAllUsers();
	},
};
</script>

<style>
body {
	background-color: rgb(32, 32, 32);
}
* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}
.formContainer {
	width: 50vw;
	margin: 20px auto;
	padding: 15px;
	border-radius: 10px;
	background-color: #323232;
}

.formContainer form {
	padding: 10px;
}

.formContainer form input {
	padding: 10px;
	margin: 10px 0px;
	display: inline-block;
	width: 100%;
}

.fetchUsersBtn {
	padding: 10px;
	margin: 10px;
}

.allUsers {
	color: white;
}
.allUsers .user {
	padding: 10px;
}
</style>
