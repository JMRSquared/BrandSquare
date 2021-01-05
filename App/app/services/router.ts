import Home from "../components/main/Home.vue";
import Login from "../components/main/Login.vue";
import Events from "../components/main/Events.vue";
import Brands from "../components/main/Brands.vue";
import Profile from "../components/main/Profile.vue";
import StoryView from "../components/pages/StoryView.vue";
import BrandView from "../components/pages/BrandView.vue";
import ProfileView from "../components/pages/ProfileView.vue";

var router = {
    routes: {
        /**
         * Main Routes
         */
        "/home": {
            path: "/home",
            component: Home,
            meta: {
                mustShowBottomNav: true
            }
        },
        "/login": {
            path: "/login",
            component: Login,
            meta: {
                mustShowBottomNav: false
            }
        },
        "/events": {
            path: "/events",
            component: Events,
            meta: {
                mustShowBottomNav: true
            }
        },
        "/brands": {
            path: "/brands",
            component: Brands,
            meta: {
                mustShowBottomNav: true
            }
        },
        "/profile": {
            path: "/profile",
            component: Profile,
            meta: {
                mustShowBottomNav: true
            }
        },
        "/story/view": {
            path: "/story/view",
            component: StoryView,
            meta: {
                mustShowBottomNav: false
            }
        },
        "/brand/view": {
            path: "/brand/view",
            component: BrandView,
            meta: {
                mustShowBottomNav: false
            }
        },
        "/profile/view": {
            path: "/profile/view",
            component: ProfileView,
            meta: {
                mustShowBottomNav: false
            }
        }
    }
};

export default router;  