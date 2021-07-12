import { createRouter,createWebHistory} from "vue-router";
import Home from './src/components/Home.vue'
import Random from './src/components/Random.vue'
import Countdown from './src/components/Countdown'
import Swiper from './src/components/Swiper.vue'
import Animation from './src/components/Animation.vue'
// 路由信息
const routes = [
    {
        path: "/pages/demo/index.html#/home",
        name: "home",
        component: Home,
    },
    {
        path: "/pages/demo/index.html#/random",
        name: "random",
        component: Random,
    },
    {
        path: "/pages/demo/index.html#/countdown",
        name: "countdown",
        component: Countdown,
    },
    {
        path: "/pages/demo/index.html#/swiper",
        name: "swiper",
        component: Swiper,
    },
    {
        path: "/pages/demo/index.html#/animation",
        name: "animation",
        component: Animation,
    },
    {
        path: "/pages/demo/index.html",
        name: "home",
        component: Home,
    },
];

// 导出路由
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;