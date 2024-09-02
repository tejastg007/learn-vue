<template>
	<h1>This is home</h1>
	<p>my name is {{ myName.name }}</p>
	<p>details = {{ details.firstName }}</p>
	<p>details = {{ details.sirName }}</p>
	<p>details = {{ details.age }}</p>
	<button @click="changeAge">change Age to 30</button>

	<p>{{ fullName }}</p>
	<input type="text" v-model="details.firstName" /> <br />

	<input type="text" ref="lastNameInput" />
	<button type="button" @click="setLastName">set last name</button>

	<hero-section
		:first-name="details.firstName"
		:last-name="details.sirName"
		@custom-submit="customSubmitHandler"
	></hero-section>
</template>

<script setup>
import {
	ref,
	reactive,
	computed,
	provide,
	onBeforeMount,
	onMounted,
	onBeforeUpdate,
	onUpdated,
	onBeforeUnmount,
	onUnmounted,
} from "vue";
import HeroSection from "./HeroSection.vue";

const myName = ref({ name: "tejas" });
const details = reactive({
	firstName: "tejas",
	sirName: "gaikwad",
	age: 18,
});
const lastNameInput = ref(null);
function setLastName() {
	details.sirName = lastNameInput.value.value;
}

function changeAge() {
	details.age = 30;
}

const fullName = computed(() => {
	return details.firstName + " " + details.sirName;
});

// watch(details, (newVal, oldVal) => {
// 	console.log("details changed", oldVal, newVal);
// });

function customSubmitHandler(e) {
	console.log("custom submit event", e);
}

provide("details", details);

onBeforeMount(() => {
	console.log("onbfore mount thehome");
});

onMounted(() => {
	console.log("on mounted the home");
});

onBeforeUpdate(() => {
	console.log("onbeforeupdate thehome");
});
onUpdated(() => {
	console.log("on eupdated thehome");
});
onBeforeUnmount(() => {
	console.log("on before unmount thehome");
});
onUnmounted(() => {
	console.log("onunmunted thehome");
});

// function changeFirstName(e) {
// 	details.firstName = e.target.value;
// }
</script>
