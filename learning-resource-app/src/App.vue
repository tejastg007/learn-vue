<template>
	<header>
		<h1>Learning Resource App</h1>
	</header>
	<div class="container">
		<div class="buttons-container">
			<button
				:class="{ active: activeTab === 'your-resources' }"
				@click="setActiveTab('your-resources')"
			>
				Your Resources
			</button>
			<button
				:class="{ active: activeTab === 'add-resource' }"
				@click="setActiveTab('add-resource')"
			>
				Add Resource
			</button>
		</div>
		<div class="targetResourceContainer">
			<keep-alive>
				<component :is="activeTab"></component>
			</keep-alive>
		</div>
	</div>
</template>

<script>
import YourResources from "@/components/resources/YourResources";
import AddResource from "@/components/resources/AddResource";
import { computed } from "vue";
export default {
	name: "App",
	components: {
		YourResources,
		AddResource,
	},

	provide() {
		return {
			resources: computed(() => this.resources),
			deleteResource: this.deleteResource,
			addResource: this.addResource,
		};
	},
	data() {
		return {
			resources: [
				{
					id: Math.random(),
					name: "Vue documentation",
					description:
						"Vue.js is an open-source model-view-viewmodel front end JavaScript library for building user interfaces and single-page applications",
					url: "https://vuejs.org/",
				},
				{
					id: Math.random(),
					name: "React documentation",
					description:
						"React is a free and open-source front-end JavaScript library for building user interfaces based on components",
					url: "https://react.dev/",
				},
			],
			activeTab: "your-resources",
		};
	},

	methods: {
		setActiveTab(tabName) {
			this.activeTab = tabName;
		},
		deleteResource(resourceId) {
			// console.log(resourceId);
			this.resources = this.resources.filter((resource) => {
				console.log("Comparing:", resource.id, resourceId);
				return resource.id != resourceId;
			});
			console.log(this.resources);
		},
		addResource(newResource) {
			console.log(newResource);
			this.resources.unshift(newResource);
			this.activeTab = "your-resources";
		},
	},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap");

* {
	padding: 0px;
	margin: 0px;
	box-sizing: border-box;
	font-family: "Nunito Sans", sans-serif;
}
</style>
<style scoped>
header {
	background-color: rgb(35, 14, 97);
	color: white;
	padding: 20px 15px;
}
header h1 {
	text-align: center;
}
.container {
	width: 50vw;
	margin: 50px auto 0px;
	border: 1px solid black;
	border-radius: 5px;
	overflow: hidden;
}
.buttons-container {
	padding: 0px;
	margin: 0px;
	overflow: hidden;
}
.buttons-container button {
	height: 100%;
	margin: 0px;
	padding: 0px;
	border: none;
	padding: 20px 35px;
	background-color: white;
	cursor: pointer;
}
.buttons-container button.active {
	background-color: black;
	color: white;
}
.targetResourceContainer {
	padding: 20px;
	max-height: 400px;
	overflow: auto;
}
</style>
