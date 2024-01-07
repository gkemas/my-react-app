import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { authProtectedRoutes, publicRoutes } from "./AllRoutes";
const Index = () =>{
  const availablePublicRoutesPaths = publicRoutes.map((r) => r.path);
  const availableAuthRoutesPath =authProtectedRoutes.map((r)=>r.path);
return (
    <Switch>
      {/* <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact}/> */}
      {/* Diğer rotaları burada tanımlayabilirsiniz */}
      <Route path={availablePublicRoutesPaths}>
                    <NonAuthLayout>
                        <Switch>
                            {publicRoutes.map((route, idx) => (
                                <Route
                                    path={route.path}
                                    component={route.component}
                                    key={idx}
                                    exact={true}
                                />
                            ))}
                        </Switch>
                    </NonAuthLayout>
                </Route>

    </Switch>
);
};
export default Index;