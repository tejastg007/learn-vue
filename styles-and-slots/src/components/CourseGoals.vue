<template>
	<h2>Course goals</h2>
	<ul>
		<li v-for="goal in goals" :key="goal">
			<slot name="goalSlot" :goalItem="goal"></slot>
		</li>
	</ul>
</template>

<script>
export default {
	data() {
		return {
			goals: ["learn js", "learn vue", "learn node"],
		};
	},
};
</script>
