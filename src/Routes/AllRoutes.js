// import LoginPage from "../Components/LoginPage"
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";

const authProtectedRoutes = [
    {path: "/",component: Dashboard},
    {path: "/About",component: About},
    // {path:"/Login",component: LoginPage}
   
];
const publicRoutes = [
    {path: "/", component: Dashboard},
    {path: "/About", component: About},

];
export {authProtectedRoutes,publicRoutes};