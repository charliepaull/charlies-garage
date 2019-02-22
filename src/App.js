import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomepageLayout from "./components/pages/HomepageLayout";
// import LoginForm from "./components/LoginForm";
// added components/LoginForm
import 'semantic-ui-css/semantic.min.css';
// added semantic ui

import LoginForm from "./components/LoginForm";
// import { homedir } from "os";




function App() {
  return (
    <Router>
      <div>
      <Route exact path="/" component={HomepageLayout} />
      <Route exact path="/loginForm" component={LoginForm} />
      </div>
    </Router>
  );
  
}

export default App;
