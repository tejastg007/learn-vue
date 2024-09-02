<template>
	<h3>Hero Section</h3>
	<p>firstname : {{ firstName }}</p>
	<p>lastName : {{ lastName }}</p>
	<input type="number" v-model="age" />
	<p>{{ age }}</p>
	<p>provided age : {{ providedDetails.age }}</p>
	<button type="button" @click="sendCustomEvent">Emit Event</button>
</template>

<script setup>
import {
	defineProps,
	defineEmits,
	ref,
	inject,
	onBeforeMount,
	onMounted,
	onBeforeUpdate,
	onUpdated,
	onBeforeUnmount,
	onUnmounted,
} from "vue";
const providedDetails = inject("details");
defineProps(["firstName", "lastName"]);
const age = ref(null);
const emit = defineEmits({
	// anotherCustomEventToSend,
	customSubmit({ age }) {
		if (age > 18) {
			return true;
		}
		return false;
	},
});
function sendCustomEvent() {
	if (age.value > 18) {
		emit("customSubmit", { age: age.value });
	} else {
		console.error("enter age > 18");
	}
}

onBeforeMount(() => {
	console.log("onbfore mount hero section");
});

onMounted(() => {
	console.log("on mounted the hero section");
});

onBeforeUpdate(() => {
	console.log("onbeforeupdate hero section");
});
onUpdated(() => {
	console.log("on eupdated hero section");
});
onBeforeUnmount(() => {
	console.log("on before unmount hero section");
});
onUnmounted(() => {
	console.log("onunmunted hero section");
});
</script>
