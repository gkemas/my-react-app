import LoginPage from "../Components/LoginPage"


const authProtectedRoutes = [
    {path: "/",component: Dashboard},
    {path: "/About",component: About},
    {path:"/Login",component: LoginPage}
   
];
const publicRoutes = [
    {path: "/", component: Dashboard},
    {path: "/About", component: About},

];
export {authProtectedRoutes,publicRoutes};