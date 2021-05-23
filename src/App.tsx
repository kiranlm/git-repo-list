import React, { FC } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./Components/Search";
import RepoList from "./Components/RepoList";
import Layout from "./Layout";

const App: FC = () => {
  return (
    <div className="app">
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/repos/:username" component={RepoList} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
