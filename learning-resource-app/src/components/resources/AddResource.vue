<template>
	<h3>Add new resource</h3>
	<form @submit.prevent="addNewResource" ref="newResourceForm">
		<input type="text" placeholder="Enter title..." ref="title" />
		<textarea
			type="text"
			placeholder="Enter description..."
			rows="2"
			ref="desc"
		></textarea>
		<input type="url" placeholder="Enter URL..." ref="url" />
		<input type="submit" value="Add Resource" />
	</form>

	<dialog-box v-if="invalidInput" @confirmError="dismisError">
		<h3>Please fill all items!</h3>
		<button
			@click="dismisError"
			style="float: right; padding: 5px 10px; margin-top: 10px"
		>
			Ok
		</button>
	</dialog-box>
</template>

<script>
export default {
	inject: ["addResource"],
	data() {
		return {
			invalidInput: false,
		};
	},
	methods: {
		addNewResource() {
			const title = this.$refs.title.value.trim();
			const desc = this.$refs.desc.value.trim();
			const url = this.$refs.url.value.trim();
			if (!title || !desc || !url) {
				this.invalidInput = true;
			} else {
				this.addResource({
					id: Math.random(),
					name: title,
					description: desc,
					url: url,
				});
				this.$refs.newResourceForm.reset();
			}
		},
		dismisError() {
			this.invalidInput = false;
		},
	},
};
</script>

<style scoped>
form input,
form textarea {
	display: inline-block;
	width: 100%;
	padding: 10px 15px;
	margin: 10px 0px;
}
form input[type="submit"] {
	background-color: black;
	color: white;
}
</style>
