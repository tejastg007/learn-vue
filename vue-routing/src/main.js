import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import TeamsList from "./components/TeamsList.vue";
import MembersList from "./components/MembersList.vue";
import TeamMembers from "./components/TeamMembers.vue";
import NotFound from "./components/NotFound.vue";
import TeamsFooter from "./components/TeamsFooter.vue";
import MembersFooter from "./components/MembersFooter.vue";

const app = createApp(App);
const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: "/", redirect: "/teams" },
		{
			name: "teams",
			path: "/teams",
			components: {
				default: TeamsList,
				footer: TeamsFooter,
			},
			alias: "/teamsList",
			beforeEnter(to, from, next) {
				console.log("before enter team list");
				console.log(to, from);
				next();
			},
			children: [
				{
					name: "team-members",
					path: ":teamId",
					component: TeamMembers,
					props: true,
				},
			],
		},
		{
			name: "all-members",
			path: "/members",
			components: {
				// mainComponent: MembersList,
				default: MembersList,
				footer: MembersFooter,
			},
		},
		{ path: "/:notfound(.*)", component: NotFound },
	],
	linkActiveClass: "active",
	linkExactActiveClass: "exact-active",
	scrollBehavior(to, from, savedPosition) {
		// console.log(to, from, savedPosition);
		if (savedPosition) {
			return savedPosition;
		}
		return { left: 0, top: 0 };
	},
});
router.beforeEach(function (to, from, next) {
	console.log("global before each");
	console.log(to, from);
	next();
});
app.use(router);
app.mount("#app");
