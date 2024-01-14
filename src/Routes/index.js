import React from 'react';
// import {  BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import { Routes, Route  } from 'react-router-dom';
import { authProtectedRoutes, publicRoutes } from "./AllRoutes";
const Index = () =>{
  const availablePublicRoutesPaths = publicRoutes.map((r) => r.path);
  const availableAuthRoutesPath =authProtectedRoutes.map((r)=>r.path);
return (
    <>
      {/* <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact}/> */}

      <Routes path={availablePublicRoutesPaths}>
                    {/* <NonAuthLayout> */}
                        
                            {publicRoutes.map((route, idx) => (
                                <Route
                                    path={route.path}
                                    component={route.component}
                                    key={idx}
                                    exact={true}
                                />
                            ))}
                       
                    {/* </NonAuthLayout> */}
                </Routes>

    </>
);
};
export default Index;