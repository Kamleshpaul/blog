/***
 * User imports
 */
import Master from "../web/User/Master";
import Error404 from "../web/User/Error404";
import Home from "../web/User/pages/Home";
import BlogSingle from "../web/User/pages/BlogSingle";
import Category from "../web/User/pages/Category";
import Contact from "../web/User/pages/Contact";
import About from "../web/User/pages/About";

/***
 * Admin imports
 */
import Main from "../web/Admin/Main";
import AdminUsers from "../web/Admin/pages/Users";
import AdminLogin from "../web/Admin/auth/Login";
import Dashboard from "../web/Admin/pages/Dashboard";
import Categories from "../web/Admin/pages/Categories";
import Articles from "../web/Admin/pages/Articles";
import WebSettings from "../web/Admin/pages/WebSettings";

/***
 * middleware imports
 */
import auth from "../middleware/auth";
import guest from "../middleware/guest";

export const routes = [
    {
        path: "/",
        component: Master,
        name: "Master",
        children: [
            {
                path: "/",
                component: Home,
                name: "home"
            },
            {
                path: "/blog/:slug",
                component: BlogSingle,
                name: "blogSingle"
            },
            {
                path: "/category",
                component: Category,
                name: "category"
            },
            {
                path: "/contact",
                component: Contact,
                name: "contact"
            },
            {
                path: "/about",
                component: About,
                name: "about"
            }
        ]
    },
    {
        path: "/admin/login",
        name: "admin_login",
        component: AdminLogin,
        beforeEnter: guest
    },
    {
        path: "/admin",
        component: Main,
        name: "Main",
        beforeEnter: auth,
        children: [
            {
                path: "users",
                name: "admin_users",
                component: AdminUsers
            },
            {
                path: "dashboard",
                name: "dashboard",
                component: Dashboard
            },
            {
                path: "categories",
                name: "categories",
                component: Categories
            },
            {
                path: "articles",
                name: "articles",
                component: Articles
            },
            {
                path: "web_settings",
                name: "web_settings",
                component: WebSettings
            }
        ]
    },
    {
        path: "*",
        component: Error404,
        name: "error404"
    }
];
