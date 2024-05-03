<template>
	<section>
		<h1>This is app.vue component</h1>
		<new-friend @add-friend="handleAddFriend"></new-friend>
		<ul>
			<friend-contact
				v-for="friend in friends"
				:key="friend.id"
				:id="friend.id"
				:name="friend.name"
				:email-address="friend.email"
				:phone-number="friend.phoneNumber"
				:is-favorite="friend.isFavorite"
				@handle-toggle-favorite="handleToggleFavorite"
				@delete-friend="handleDeleteFriend"
			></friend-contact>
		</ul>
	</section>
</template>

<script>
export default {
	data() {
		return {
			friends: [
				{
					id: 1,
					name: "tejas",
					email: "tejas@gmail.com",
					phoneNumber: "1222233333",
					isFavorite: true,
				},
				{
					id: 2,
					name: "yogesh",
					email: "yogesh@gmail.com",
					phoneNumber: "44228593827",
					isFavorite: false,
				},
			],
		};
	},
	methods: {
		handleToggleFavorite(data) {
			const friendId = data.friendId;
			const friend = this.friends.find((friend) => friend.id == friendId);
			friend.isFavorite = !friend.isFavorite;
		},
		handleAddFriend(newFriend) {
			this.friends.unshift({
				id: newFriend.id,
				name: newFriend.name,
				email: newFriend.email,
				phoneNumber: newFriend.phone,
			});
		},
		handleDeleteFriend(friendId) {
			this.friends = this.friends.filter((friend) => friend.id != friendId);
		},
	},
};
</script>

<style>
* {
	box-sizing: border-box;
}

html {
	font-family: "Jost", sans-serif;
}

body {
	margin: 0;
}

#app ul {
	margin: 0;
	padding: 0;
	list-style: none;
}

#app li {
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	margin: 1rem auto;
	border-radius: 10px;
	padding: 1rem;
	text-align: center;
	width: 90%;
	max-width: 40rem;
}

#app h1 {
	font-size: 2rem;
	border-bottom: 4px solid #ccc;
	color: #58004d;
	margin: 0 0 1rem 0;
}

#app button {
	font: inherit;
	cursor: pointer;
	border: 1px solid #ff0077;
	background-color: #ff0077;
	color: white;
	padding: 0.05rem 1rem;
	box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
	background-color: #ec3169;
	border-color: #ec3169;
	box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
