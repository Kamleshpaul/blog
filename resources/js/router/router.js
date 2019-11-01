/***
 * User imports
 */
import Home from '../web/User/Home';
import User from '../web/User/User';
import Error404 from '../web/User/Error404';


 /***
 * Admin imports
 */
import Dashboard from '../web/Admin/Dashboard';
import AdminUsers from '../web/Admin/pages/Users';
import AdminLogin from '../web/Admin/auth/Login';

export const routes = [
    {
        path: '/',
        component: Home,
        name: 'home',
        children:[
            {
                path: 'users',
                component: User,
                name: 'user'
            },
        ]
    },
    {
        path: '/admin/login',
        name: 'admin_login',
        component: AdminLogin,
    },
    {
        path: '/admin',
        component: Dashboard,
        name: 'dashboard',
        children: [
            {
                path: 'users',
                name: 'admin_users',
                component: AdminUsers,
            },
        ]
    },
    {
        path: '*',
        component: Error404,
        name: 'error404'
    },

]