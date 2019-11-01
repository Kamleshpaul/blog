/***
 * User imports
 */
import Home from '../web/User/Home';
import User from '../web/User/User';


 /***
 * Admin imports
 */
import Dashboard from '../web/Admin/Dashboard';
import AdminUsers from '../web/Admin/pages/Users';

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

]