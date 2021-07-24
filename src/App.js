import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//files
import Main from "./pages/Main.jsx";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  );
}

export default App;
