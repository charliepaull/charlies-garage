import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomepageLayout from "./components/pages/HomepageLayout";
import 'semantic-ui-css/semantic.min.css';
import LoginForm from "./components/LoginForm";
import SignUp from "./components/SignUp";
// import SignUp from "./components/Mechanic";
// import SignUp from "./components/Customer";
// import { homedir } from "os";




function App() {
  return (
    <Router>
      <div>
      <Route exact path="/" component={HomepageLayout} />
      <Route exact path="/loginForm" component={LoginForm} />
      <Route exact path="/signup" component={SignUp} />
      {/* <Route exact path="/signup" component={Mechanic} />
      <Route exact path="/signup" component={Customer} /> */}
      </div>
    </Router>
  );
  
}

export default App;
