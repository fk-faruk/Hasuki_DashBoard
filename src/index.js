import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Login from "components/Login";
import AdminLayout from "layouts/Admin.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <AuthContext>
  <BrowserRouter>
    <Switch>
      <Route path="/Login">
        <Login />
      </Route>

      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      {/* <Redirect from="/" to="/admin/dashboard"/> */}
      <Redirect from="/" to="/Login" />
    </Switch>
  </BrowserRouter>
  // </AuthContext>
);
