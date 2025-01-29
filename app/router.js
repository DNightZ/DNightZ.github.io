import {login} from './pages/login.js';


export const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    router:[
        { path: '/', name:'Sign in', component: login },

    ]

});







