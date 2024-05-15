<template>
	<div class="menu-bar">
		<div>
			<img src="./assets/logo.png" width="40" alt="" />
		</div>
		<ul class="menu-list">
			<li>
				<router-link to="/teams"> Teams </router-link>
			</li>
			<li>
				<router-link to="/members"> Members </router-link>
			</li>
		</ul>
		<div></div>
	</div>
	<!-- here goes the default route component -->
	<router-view></router-view>
	<!-- down goes all named components -->
	<!-- <router-view name="mainComponent"></router-view> -->
	<router-view name="footer"></router-view>
</template>

<script>
export default {
	name: "App",
	components: {},
	provide() {
		return {
			members: this.members,
			teams: this.teams,
			getTeamById: this.getTeamById,
		};
	},
	data() {
		return {
			members: [
				{ id: 1, name: "tejas gaikwad", teamId: 1 },
				{ id: 2, name: "rushikesk patil", teamId: 2 },
				{ id: 3, name: "rohan hajare", teamId: 3 },
				{ id: 4, name: "prem mahadwar", teamId: 1 },
				{ id: 5, name: "shubham futa", teamId: 2 },
				{ id: 6, name: "jack sparrow", teamId: 2 },
				{ id: 7, name: "tony stark", teamId: 2 },
				{ id: 8, name: "Captain america", teamId: 1 },
				{ id: 9, name: "hulk", teamId: 3 },
				{ id: 10, name: "black widow", teamId: 3 },
				{ id: 11, name: "hawk eye", teamId: 1 },
				{ id: 12, name: "falcon", teamId: 1 },
				{ id: 13, name: "thor", teamId: 2 },
				{ id: 14, name: "spiderman", teamId: 3 },
				{ id: 15, name: "batman", teamId: 3 },
			],
			teams: [
				{ id: 1, name: "backend dev", size: 20 },
				{ id: 2, name: "frontend dev", size: 30 },
				{ id: 3, name: "devops", size: 5 },
			],
		};
	},
	methods: {
		getTeamById(teamId) {
			return this.teams.find((team) => {
				return team.id == teamId;
			});
		},
	},
};
</script>

<style>
* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}

.menu-bar {
	background-color: #333;
	color: #fff;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 20px;
}
.menu-list {
	list-style-type: none;
	margin: 0;
	padding: 0;
	display: flex;
}
.menu-list li {
	margin-right: 20px;
}
.menu-list li:last-child {
	margin-right: 0;
}
.menu-list li a {
	color: #fff;
	text-decoration: none;
	font-size: 16px;
	transition: color 0.3s ease;
}
.menu-list li a:hover {
	color: #ffcc00; /* Change to desired hover color */
}
.menu-list li a.active {
	color: orange;
}

.card-container {
	max-width: 600px;
	margin: 20px auto;
	padding: 20px;
	border-radius: 8px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.card {
	padding: 20px;
	background-color: #fff;
	box-shadow: 0px 0px 15px 1px rgb(137, 137, 137);
	border-radius: 8px;
	margin-bottom: 20px;
}
.card h2 {
	margin-top: 0;
	color: #333;
}
.card p {
	color: #666;
}
</style>
