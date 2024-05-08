<template>
	<ul v-if="resources.length > 0">
		<li v-for="resource in resources" :key="resource.id">
			<div class="resourceHolder">
				<div class="title">
					<h2>{{ resource.name }}</h2>
					<button @click="deleteResource(resource.id)">Delete</button>
				</div>
				<div class="description">
					<p>{{ resource.description }}</p>
				</div>
				<div class="footer">
					<a :href="resource.url" target="_blank">Learn More</a>
				</div>
			</div>
		</li>
	</ul>
	<div v-else>
		<h3>No resources here!</h3>
	</div>
</template>

<script>
export default {
	inject: ["resources", "deleteResource"],
};
</script>

<style scoped>
ul {
	list-style-type: none;
}
.resourceHolder {
	border: 1px solid green;
	padding: 10px 15px;
	margin: 10px 0px;
	box-shadow: 0px 0px 8px 0px rgb(231, 231, 231);
}
.resourceHolder .title {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.resourceHolder .title button {
	background-color: transparent;
	border: 1px solid gray;
	padding: 5px 10px;
	border-radius: 5px;
	outline: none;
	cursor: pointer;
}
</style>
