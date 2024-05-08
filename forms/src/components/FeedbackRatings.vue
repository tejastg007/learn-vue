<template>
	<div>
		<button
			type="button"
			:class="{ active: modelValue == 'poor' }"
			@click="setRating('poor')"
		>
			Poor
		</button>
		<button
			type="button"
			:class="{ active: modelValue == 'average' }"
			@click="setRating('average')"
		>
			Average
		</button>
		<button
			type="button"
			:class="{ active: modelValue == 'great' }"
			@click="setRating('great')"
		>
			Great
		</button>
	</div>
</template>

<script>
export default {
	props: ["modelValue"],
	emits: ["update:modelValue"],
	data() {
		return {
			selectedReting: this.modelValue,
		};
	},
	methods: {
		setRating(rating) {
			this.$emit("update:modelValue", rating);
		},
	},
};
</script>

<style scoped>
button {
	background-color: white;
	color: black;
	padding: 10px 15px;
	outline: none;
	border: 1px solid gray;
	margin: 5px;
}

button.active {
	background-color: black;
	color: white;
}
</style>
