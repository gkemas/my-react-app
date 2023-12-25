const authProtectedRoutes = [
    {path: "/",component: Dashboard},
    {path: "/About",component: About},
   
];
const publicRoutes = [
    {path: "/", component: Dashboard},
    {path: "/About", component: About},

];
export {authProtectedRoutes,publicRoutes};