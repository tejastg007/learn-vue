<template>
	<li>
		<h3>{{ name }} - {{ isFavorite }}</h3>
		<button @click="handleToggleDetails">
			{{ isDetailsVisible ? "Hide" : "Show" }}
		</button>
		<button @click="toggleFavorite">Change Favorite</button>
		<button @click="$emit('delete-friend', id)">delete</button>
		<ul v-if="isDetailsVisible">
			<li>{{ emailAddress }}</li>
			<li>{{ phoneNumber }}</li>
		</ul>
	</li>
</template>

<script>
export default {
	// props: ["name", "phoneNumber", "emailAddress"],
	emits: ["delete-friend", "handle-toggle-favorite"],
	props: {
		id: Number,
		name: {
			type: String,
			required: true,
		},
		phoneNumber: {
			type: String,
			required: true,
		},
		emailAddress: {
			type: String,
			required: false,
		},
		isFavorite: {
			type: Boolean,
			required: false,
			default: false,
		},
	},
	data() {
		return {
			friend: {
				id: 1,
				name: "tejas",
				email: "tejas@gmail.com",
				phone: "2222111133",
			},
			isDetailsVisible: false,
		};
	},
	methods: {
		handleToggleDetails() {
			this.isDetailsVisible = !this.isDetailsVisible;
		},
		toggleFavorite() {
			this.$emit("handle-toggle-favorite", {
				friendId: this.id,
			});
		},
	},
};
</script>
