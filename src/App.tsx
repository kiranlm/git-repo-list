import React, { FC, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Spinner from "./Components/Spinner";
import Layout from "./Layout";

const Search = React.lazy(() => import("./Components/Search"));
const RepoList = React.lazy(() => import("./Components/RepoList"));

const App: FC = () => {
  return (
    <div className="app">
      <Suspense fallback={<Spinner />}>
        <Router>
          <Layout>
            <Switch>
              <Route exact path="/" component={Search} />
              <Route exact path="/repos/:username" component={RepoList} />
            </Switch>
          </Layout>
        </Router>
      </Suspense>
    </div>
  );
};

export default App;
