import Home from "../components/main/Home.vue";
import Login from "../components/main/Login.vue";
import Events from "../components/main/Events.vue";
import Brands from "../components/main/Brands.vue";
import Profile from "../components/main/Profile.vue";

var router = {
    routes: {
        /**
         * Main Routes
         */
        "/home": {
            path: "/home",
            component: Home
        },
        "/login": {
            path: "/login",
            component: Login
        },
        "/events": {
            path: "/events",
            component: Events
        },
        "/brands": {
            path: "/brands",
            component: Brands
        },
        "/profile": {
            path: "/profile",
            component: Profile
        }
    }
};

export default router;  