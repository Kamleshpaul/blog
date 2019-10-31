import Dashboard from '../pages/Admin/Dashboard';
import User from '../pages/Admin/User';

export const routes = [
    { 
        path: '/',
        component: Dashboard,
        name:'dashboard'
    },
    { 
        path: '/users',
        component: User,
        name:'user'
    },
]