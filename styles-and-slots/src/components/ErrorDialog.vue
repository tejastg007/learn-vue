<template>
	<dialog open>
		<slot></slot>
	</dialog>
</template>

<style scoped>
dialog {
	margin: 0;
	position: fixed;
	top: 30%;
	left: 50%;
	transform: translate(-50%, -50%);
}
</style>
