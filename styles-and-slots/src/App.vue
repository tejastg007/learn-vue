<template>
	<div>
		<the-header></the-header>
		<div>
			<button @click="setSelectedComponent('active-goals')">
				Active Goals
			</button>
			<button @click="setSelectedComponent('manage-goals')">
				Manage Goals
			</button>
			<keep-alive>
				<component :is="selectedComponent"></component>
			</keep-alive>
		</div>
		<badge-list></badge-list>
		<user-info
			:full-name="activeUser.name"
			:info-text="activeUser.description"
			:role="activeUser.role"
		></user-info>
	</div>
	<!-- the goalSlotProps is an object which accumulates all the props sent from the child (slot) -->
	<course-goals>
		<template v-slot:goalSlot="goalSlotProps">
			<h1>{{ goalSlotProps.goalItem }}</h1>
		</template>
	</course-goals>
	<course-goals>
		<template v-slot:goalSlot="goalSlotProps">
			<h4>{{ goalSlotProps.goalItem }}</h4>
		</template>
	</course-goals>
	<course-goals>
		<template v-slot:goalSlot="goalSlotProps">
			<p>{{ goalSlotProps.goalItem }}</p>
		</template>
	</course-goals>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import BadgeList from "./components/BadgeList.vue";
import UserInfo from "./components/UserInfo.vue";
import CourseGoals from "./components/CourseGoals.vue";
import ActiveGoals from "./components/ActiveGoals.vue";
import ManageGoals from "./components/ManageGoals.vue";

export default {
	components: {
		// TheHeader becomes available to use as the-header automatically under the hood
		TheHeader,
		BadgeList,
		UserInfo,
		CourseGoals,
		ActiveGoals,
		ManageGoals,
	},
	data() {
		return {
			selectedComponent: "active-goals",
			activeUser: {
				name: "Maximilian Schwarzmüller",
				description: "Site owner and admin",
				role: "admin",
			},
		};
	},
	methods: {
		setSelectedComponent(compName) {
			this.selectedComponent = compName;
		},
	},
};
</script>

<style>
html {
	font-family: sans-serif;
}

body {
	margin: 0;
}
</style>

<style scoped>
button {
	padding: 10px 15px;
	font-size: 1.5rem;
}
</style>
