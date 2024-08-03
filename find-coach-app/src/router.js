import { createRouter, createWebHistory } from "vue-router";
import RegisterCoach from "./pages/coach/RegisterCoach.vue";
import coachDetails from "./pages/coach/CoachDetails.vue";
import CoachList from "./pages/coach/CoachList.vue";
import ContactCoach from "./pages/request/ContactCoach.vue";
import RequestsList from "./pages/request/RequestsList.vue";
import PageNotFound from "./pages/PageNotFound.vue";
const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: "/", redirect: "/coaches" },
		{ path: "/coaches", component: CoachList },
		{
			path: "/coaches/:id",
			props: true,
			component: coachDetails,
			children: [{ path: "contact", component: ContactCoach }],
		},
		{ path: "/register", component: RegisterCoach },
		{ path: "/requests", component: RequestsList },
		{ path: "/requests/:id", props: true, component: RequestsList },
		{ path: "/:notFound(.*)", component: PageNotFound },
	],
});

export default router;
