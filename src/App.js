import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
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
        <Nav />
      <Route exact path="/" component={Home} />
      <Route exact path="/loginForm" component={LoginForm} />
      <Route exact path="/signup" component={SignUp} />
      {/* <Route exact path="/signup" component={Mechanic} />
      <Route exact path="/signup" component={Customer} /> */}
      </div>
    </Router>
  );
  
}

export default App;
