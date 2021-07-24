import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//files
import Main from "./pages/Main.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Main} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
