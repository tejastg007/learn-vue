// const inputEl = document.querySelector("input");
// const buttonEl = document.querySelector("button");
// const taskContainerEl = document.querySelector(".taskContainer ul");

// buttonEl.addEventListener("click", () => {
// 	let task = inputEl.value;
// 	let newListEl = document.createElement("li");
// 	newListEl.textContent = task;
// 	taskContainerEl.appendChild(newListEl);
// 	inputEl.value = "";
// });

Vue.createApp({
	data: function () {
		return {
			goals: [],
			enteredGoal: "",
		};
	},
	methods: {
		addGoal: function () {
			this.goals.push(this.enteredGoal);
			this.enteredGoal = "";
		},
	},
}).mount("#app");
