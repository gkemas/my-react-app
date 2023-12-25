import React from 'react';
import { Route, Switch } from 'react-router-dom';
const Index = () =>{
return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact}/>
      {/* Diğer rotaları burada tanımlayabilirsiniz */}

    </Switch>
);
};
export default Index;