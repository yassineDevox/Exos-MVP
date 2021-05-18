import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "../auth/auth-context";
import SigninPage from "../auth/page-signin";
import Error404 from "../errors/404";
import HomePage from "../pages/home-page";

export default function AppRouter() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/signin" component={SigninPage} />
          <Route path="*" component={Error404} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}
