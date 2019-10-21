import React from "react";
import Layout from "./layout/Layout";
import Projects from "../containers/Projects";
import About from "../containers/About";

import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <HashRouter>
        <Layout>
          <Switch>
            <Route path="/" exact component={Projects} />
            <Route path="/about" component={About} />
            <Route
              path="/project/:id"
              exact
              render={() => <h1>Working on this...</h1>}
            />
          </Switch>
        </Layout>
      </HashRouter>
    </div>
  );
}

export default App;
