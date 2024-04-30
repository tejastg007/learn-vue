const app = Vue.createApp({
	data() {
		return {
			isRedBorder: 'true',
			myName: "Tejas Gaikwad",
			myAge: 22,
			randomNumber: Math.random(),
			imageLink:
				"https://images.unsplash.com/photo-1710302070921-3ecbd6a84b41?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		};
	},
	methods: {
		getRandomNumber() {
			return Math.random();
		},
	},
});

app.mount("#assignment");
