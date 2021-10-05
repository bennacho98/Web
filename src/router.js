import Vue from 'vue';
import Router from 'vue-router';
import Landing from '@/views/Landing';
import Home from '@/views/Home';
import Error from '@/views/Error404';
import UserDetail from '@/views/UserDetail';
import Login from '@/views/auth/Login'; 

Vue.use(Router); //hacer uso de Router

//exportando un objeto Router

// export default new Router({
const router = new Router({
    mode: 'history',
    routes:[
        {
            path: '/',
            name: 'Landing',
            component: Landing
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/user/:id',
            name: 'user-detail',
            component: UserDetail,
            meta:{
                requiresAuth: true,
            }
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta:{
                isAuth: true
            }
        },
        {
            path: '*',
            name: 'error404',
            component: Error
        }
    ]
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        console.log(from);
        if (!localStorage.getItem('token')) {
            next({
                name: 'login'
            });
        }else{
            next();
        }
    }
    else{
        next();
    }
    if (to.meta.isAuth) {
        if (localStorage.getItem('token')) {
            next({
                name: 'home'
            });
        }else{
            next();
        }
    }else{
        next();
    }
});

export default router;