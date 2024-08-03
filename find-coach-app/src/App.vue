<template>
	<the-header></the-header>
	<div class="main-content">
		<router-view v-slot="{ Component }">
			<transition name="component-view" mode="out-in">
				<component :is="Component"></component>
			</transition>
		</router-view>
	</div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
export default {
	name: "App",
	components: { TheHeader },
};
</script>

<style>
* {
	color: #2c3e50;
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
html {
	font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
		sans-serif;
}
.main-content {
	padding: 10px;
}

.component-view-enter-from,
.component-view-leave-to {
	opacity: 0;
}

.component-view-enter-active,
.component-view-leave-active {
	transition: opacity 0.2s ease;
}
</style>
