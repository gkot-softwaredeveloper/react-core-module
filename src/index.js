import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Navigation from "./component/navigation/Navigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Employees from "./modules/employees/Employees";
import { Auth0ProviderWithNavigate } from "./auth/auth0-provider-with-history";
import AuthenticationGuard from "./component/navigation/Routing/authentication-guard";
import WelcomePage from "./component/welcome-page/welcome";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0ProviderWithNavigate>
        <div className="area">
          <Routes>
            <Route
              exact
              path="/"
              element={<AuthenticationGuard component={WelcomePage} />}
            />
            <Route
              exact
              path="/employees"
              element={<AuthenticationGuard component={Employees} />}
            />
          </Routes>
        </div>
        <Navigation />
      </Auth0ProviderWithNavigate>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
