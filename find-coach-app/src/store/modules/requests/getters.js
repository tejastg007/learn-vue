export default {
	getRequests(state) {
		return function (coachId) {
			if (!coachId) {
				return state.requests;
			}
			return state.requests.filter(
				(request) => request.coachId === coachId
			);
		};
	},
	hasRequests(state) {
		return function (coachId) {
			if (!coachId) {
				return state.requests && state.requests.length > 0;
			}
			return (
				state.requests &&
				state.requests.some((request) => request.coachId === coachId)
			);
		};
	},
};
