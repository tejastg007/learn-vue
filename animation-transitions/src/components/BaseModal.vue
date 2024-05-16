<template>
	<div v-if="isModalOpen" class="backdrop" @click="$emit('close')"></div>
	<transition name="modal">
		<dialog open v-if="isModalOpen">
			<p>tejas</p>
			<slot></slot>
		</dialog>
	</transition>
</template>

<script>
export default {
	props: ["isModalOpen"],
	emits: ["close"],
};
</script>

<style scoped>
.backdrop {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	z-index: 10;
	background-color: rgba(0, 0, 0, 0.75);
}

dialog {
	position: fixed;
	top: 30vh;
	width: 30rem;
	left: calc(50% - 15rem);
	margin: 0;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	border-radius: 12px;
	padding: 1rem;
	background-color: white;
	z-index: 100;
	border: none;
}

@keyframes modal-animate {
	from {
		transform: translateY(-50px);
	}
	to {
		transform: translateY(0px);
	}
}

.modal-enter-active {
	animation: modal-animate 0.3s ease-in;
}
.modal-leave-active {
	animation: modal-animate 0.3s ease-in reverse;
}
</style>
