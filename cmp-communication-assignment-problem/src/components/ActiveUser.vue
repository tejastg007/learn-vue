<template>
	<li>
		<div class="user">
			<p>{{ name }} - {{ age }}</p>
		</div>
	</li>
</template>

<script>
export default {
	props: {
		id: {
			type: Number,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		age: {
			type: Number,
			required: true,
		},
	},
};
</script>

<style scoped>
section {
	width: 100%;
}
.user p {
	background-color: white;
	padding: 5px 10px;
	margin: 5px;
}
</style>
