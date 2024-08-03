export default {
	async addCoach(context, data) {
		// const coachId = context.rootGetters.userId;
		const coachData = {
			id: context.rootGetters.userId,
			firstName: data.firstName,
			lastName: data.lastName,
			areas: data.areas,
			description: data.description,
			hourlyRate: data.hourlyRate,
		};

		context.commit("addCoach", coachData);
	},
};
