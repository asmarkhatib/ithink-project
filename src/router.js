import { createRouter, createWebHistory } from "vue-router";

import UserData from "./components/UserData.vue";
import ViewUserData from "./components/ViewUserData.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/user" },
    { path: "/user", component: UserData },
    { path: "/viewdata", component: ViewUserData },
    { path: "/:notFound(.*)", redirect: "/user" },
  ],
});

export default router;
