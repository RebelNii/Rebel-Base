import { createRouter, createWebHistory } from "vue-router";
import Home from '../view/HomeView.vue';
import Services from '../view/ServicesView.vue';
import Projects from '../view/ProjectsView.vue';
import store from "../store";

const routes = [
    {
        path: '/',
        name: "Home",
        component: Home,
        meta: {
            title: 'Home'
        }
    },
    {
        path: '/services',
        name: "Services",
        component: Services,
        meta: {
            title: 'Services'
        }
    },
    {
        path: '/projects',
        name: "Projects",
        component: Projects,
        meta: {
            title: 'Projects'
        }
    },
]




const router = createRouter({
    history: createWebHistory(),
    routes,
});
  
router.beforeEach((to,from,next) => {
document.title = `${to.meta.title} | Rebel Base`;
if(store.state.miniNav){
    store.commit('updateMiniNav', true)
}
next();
});
  
export default router;