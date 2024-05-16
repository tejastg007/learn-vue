<template>
	<div class="container">
		<users-list></users-list>
	</div>

	<div class="container">
		<div class="block" :class="{ animate: isAnimate }"></div>
		<button @click="addAnimation">Animate</button>
	</div>
	<div class="container">
		<transition
			name="para2"
			@beforeEnter="beforeEnter"
			@enter="enter"
			@afterEnter="afterEnter"
			@beforeLeave="beforeLeave"
			@leave="leave"
			@afterLeave="afterLeave"
			@enterCancelled="enterCancelled"
			@leaveCancelled="leaveCancelled"
		>
			<p v-if="isParaVisible">sometimes visible paragraph 2</p>
		</transition>
		<button @click="toggleParagraph">toggle paragraph</button>
	</div>

	<!-- <div class="container">
		<transition name="para">
			<p class="sample" v-if="isParaVisible">sometimes visible</p>
		</transition>
		<button @click="toggleParagraph">toggle paragraph</button>
	</div> -->
	<div class="container">
		<transition name="usersButton" mode="out-in">
			<button @click="showUsers" v-if="!ifUsersShown">Show Users</button>
			<button @click="hideUsers" v-else>Hide Users</button>
		</transition>
	</div>

	<base-modal @close="hideDialog" :isModalOpen="dialogIsVisible">
		<p>This is a test dialog!</p>
		<button @click="hideDialog">Close it!</button>
	</base-modal>
	<div class="container">
		<button @click="showDialog">Show Dialog</button>
	</div>
</template>

<script>
import BaseModal from "./components/BaseModal.vue";
import UsersList from "./components/UsersList.vue";
export default {
	components: {
		BaseModal,
		UsersList,
	},
	data() {
		return {
			dialogIsVisible: false,
			isAnimate: false,
			isParaVisible: false,
			ifUsersShown: false,
			enterInterval: null,
			leaveInterval: null,
		};
	},
	methods: {
		enterCancelled() {
			clearInterval(this.enterInterval);
		},
		leaveCancelled() {
			clearInterval(this.leaveInterval);
		},
		beforeEnter(el) {
			el.style.opacity = 0;
			console.log("before enter");
		},
		enter(el, done) {
			console.log("enter");
			let round = 1;
			this.enterInterval = setInterval(() => {
				el.style.opacity = round * 0.01;
				round++;
				if (round == 100) {
					done();
					clearInterval(this.enterInterval);
				}
			}, 20);
		},
		afterEnter() {
			console.log("after enter");
		},
		beforeLeave() {
			console.log("before leave");
		},
		leave(el, done) {
			console.log("leave");
			let round = 1;
			this.leaveInterval = setInterval(() => {
				el.style.opacity = 1 - round * 0.01;
				round++;
				if (round == 100) {
					done();
					clearInterval(this.leaveInterval);
				}
			}, 20);
		},
		afterLeave() {
			console.log("after leave");
		},

		showUsers() {
			this.ifUsersShown = true;
		},
		hideUsers() {
			this.ifUsersShown = false;
		},
		addAnimation() {
			this.isAnimate = !this.isAnimate;
		},
		toggleParagraph() {
			this.isParaVisible = !this.isParaVisible;
		},
		showDialog() {
			this.dialogIsVisible = true;
		},
		hideDialog() {
			this.dialogIsVisible = false;
		},
	},
};
</script>

<style>
.usersButton-enter-from,
.usersButton-leave-to {
	opacity: 0;
}
.usersButton-enter-active,
.usersButton-leave-active {
	transition: all 0.3s ease-in;
}
.usersButton-enter-to,
.usersButton-leave-from {
	opacity: 1;
}

* {
	box-sizing: border-box;
}

html {
	font-family: sans-serif;
}

body {
	margin: 0;
}

button {
	font: inherit;
	padding: 0.5rem 2rem;
	border: 1px solid #810032;
	border-radius: 30px;
	background-color: #810032;
	color: white;
	cursor: pointer;
}

button:hover,
button:active {
	background-color: #a80b48;
	border-color: #a80b48;
}

.block {
	width: 8rem;
	height: 8rem;
	background-color: #290033;
	margin-bottom: 2rem;
}

.animate {
	animation: slide-animate 0.5s ease-in forwards;
}

@keyframes slide-animate {
	0% {
		transform: translateX(0px) scale(1);
	}
	50% {
		transform: translateX(-200px) scale(1);
	}
	100% {
		transform: translateX(0px) scale(1);
	}
}

.container {
	max-width: 40rem;
	margin: 2rem auto;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 2rem;
	border: 2px solid #ccc;
	border-radius: 12px;
}

/* .para-enter-from {
	opacity: 0;
	transform: translateY(-30px);
} */

.para-enter-active {
	/* transition: all 0.3s ease-out; */
	animation: slide-animate 0.3s ease-out;
}

/* .para-enter-to {
	opacity: 1;
	transform: translateY(0);
} */

/* .para-leave-from {
	opacity: 1;
	transform: translateY(0);
} */

.para-leave-active {
	/* transition: all 0.3s ease-out; */
	animation: slide-animate 0.3s ease-in;
}

/* .para-leave-to {
	opacity: 0;
	transform: translateY(-30px); 
}*/
</style>
