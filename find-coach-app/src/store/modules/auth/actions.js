let timer;
export default {
	async login(context, payload) {
		const response = await fetch(
			"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[your_API_key]",
			{
				method: "POST",
				body: JSON.stringify({
					email: payload.email,
					password: payload.password,
					returnSecureToken: true,
				}),
			}
		);
		const responseData = await response.json();
		if (!response.ok) {
			throw new Error(responseData.message || "failed to Login");
		} else {
			// console.log(responseData);

			// const expiresIn = +responseData.expiresIn * 1000;
			const expiresIn = 10 * 1000;
			let expirationDate = new Date().getTime() + expiresIn;
			localStorage.setItem("userId", responseData.localId);
			localStorage.setItem("token", responseData.idToken);
			localStorage.setItem("expiresIn", expirationDate);
			timer = setTimeout(() => {
				context.dispatch("autoLogout");
			}, expiresIn);
			context.commit("authUser", {
				userId: responseData.localId,
				token: responseData.idToken,
			});
			return true;
		}
	},

	async signup(context, payload) {
		const response = await fetch(
			"https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[your_API_key]",
			{
				method: "POST",
				body: JSON.stringify({
					email: payload.email,
					password: payload.password,
					returnSecureToken: true,
				}),
			}
		);
		const responseData = await response.json();
		if (!response.ok) {
			throw new Error(responseData.message || "failed to Signup");
		} else {
			context.commit("authUser", {
				userId: responseData.localId,
				token: responseData.idToken,
				expiresIn: responseData.expiresIn,
			});
		}
	},

	logout(context) {
		localStorage.removeItem("token");
		localStorage.removeItem("userId");
		localStorage.removeItem("expiresIn");
		clearTimeout(timer);
		context.commit("authUser", {
			userId: null,
			token: null,
		});
	},

	autoLogout(context) {
		context.dispatch("logout");
		context.commit("autoLogout");
	},

	autoLogin(context) {
		const token = localStorage.getItem("token");
		const userId = localStorage.getItem("userId");
		const expirationDate = localStorage.getItem("expiresIn");
		const expiresIn = +expirationDate - new Date().getTime();
		timer = setTimeout(() => {
			context.dispatch("autoLogout");
		}, expiresIn);
		if (token && userId) {
			context.commit("authUser", {
				userId: token,
				token: userId,
			});
		}
	},
};
