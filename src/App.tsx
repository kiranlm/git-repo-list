import React, { FC } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./Components/Search";
import Layout from "./Layout";

const App: FC = () => {
  return (
    <div className="app">
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Search} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
