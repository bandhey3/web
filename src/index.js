/*!

=========================================================
* BLK Design System React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss";
import "assets/demo/demo.css";
import Works from "./views/examples/HowitWorks";
import Index from "views/examples/LandingPage";
import LandingPage from "views/examples/LandingPage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import ServicesPage from "views/examples/ServicesPage";
import IndexNavbar from "components/Navbars/IndexNavbar";
import SmartBorrowers from "views/examples/SmartBorrower";
import InfoPage from "views/examples/info";
import ContactPage from "views/examples/ContactPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <IndexNavbar />
    <Switch>
      <Route path="/components" render={(props) => <Index {...props} />} />
      {/* <Route path="/" render={(props) => <LandingPage {...props} />} /> */}
      <Route path="/services" render={(props) => <ServicesPage {...props} />} />
      <Route
        path="/smart-borrower"
        render={(props) => <SmartBorrowers {...props} />}
      />
      <Route path="/contact" render={(props) => <ContactPage {...props} />} />
      <Route path="/info" render={(props) => <InfoPage {...props} />} />
      <Route path="/register" render={(props) => <RegisterPage {...props} />} />
      <Route path="/howitworks" render={(props) => <Works {...props} />} />
      {/* <Route
        path="/profile-page"
        render={(props) => <ProfilePage {...props} />}
      /> */}
      <Redirect from="/" to="/components" />
    </Switch>
  </BrowserRouter>
);
