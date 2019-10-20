import React from "react";
import Layout from "./layout/Layout";
import Projects from "../containers/Projects";
import About from "../containers/About";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact component={Projects} />
            <Route path="/about" component={About} />
            <Route
              path="/project/:id"
              exact
              render={() => <h1>Project INFO</h1>}
            />
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
