Vue.createApp({
	methods: {
		addGoal() {
			this.goals.push(this.enteredGoal);
			this.enteredGoal = "";
		},
		deleteGoal(index) {
			this.goals.splice(index, 1);
		},
	},
	data() {
		return {
			goals: [],
			enteredGoal: "",
		};
	},
}).mount("#todoApp");
