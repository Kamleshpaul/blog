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

/***
* middleware imports
*/
import auth from '../middleware/auth'
import guest from '../middleware/guest'

export const routes = [
    {
        path: '/',
        component: Home,
        name: 'home',
        children: [
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
        beforeEnter: guest,
    },
    {
        path: '/admin',
        component: Dashboard,
        name: 'dashboard',
        beforeEnter: auth,
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