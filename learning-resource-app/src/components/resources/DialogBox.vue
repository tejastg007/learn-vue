<template>
	<teleport to="body">
		<div class="backdrop" @click="$emit('confirmError')"></div>
		<dialog open>
			<slot> </slot>
		</dialog>
	</teleport>
</template>

<script>
export default {};
</script>

<style scoped>
.backdrop {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background-color: rgba(2, 0, 0, 0.743);
	z-index: 10;
}
dialog {
	position: fixed;
	top: 30%;
	left: 50%;
	transform: translateX(-50%);
	padding: 15px 20px;
	z-index: 100;
}
</style>
