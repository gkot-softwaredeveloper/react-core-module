import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./Navigation.css";

export default function Navigation() {
  const { loginWithRedirect, logout } = useAuth0();
  // const { name, picture, email } = user;
  const { isAuthenticated } = useAuth0();

  return (
    <nav className="main-menu">
      {isAuthenticated && (
        <ul>
          <li>
            <Link to="/">
              <i className="fa fa-building-o fa-2x"></i>
              <span className="nav-text"> Company Dashboard </span>
            </Link>
          </li>
          <li className="has-subnav">
            <Link to="/employees">
              <i className="fa fa-user fa-2x"></i>
              <span className="nav-text"> Employees </span>
            </Link>
          </li>
          <li className="has-subnav">
            <Link to="/">
              <i className="fa fa-list fa-2x"></i>
              <span className="nav-text"> Tasks Management </span>
            </Link>
          </li>
          <li className="has-subnav">
            <Link to="/">
              <i className="fa fa-mail-forward fa-2x"></i>
              <span className="nav-text"> Notifications </span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <i className="fa fa-book fa-2x"></i>
              <span className="nav-text"> Reports </span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <i className="fa fa-cogs fa-2x"></i>
              <span className="nav-text"> System </span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <i className="fa fa-info fa-2x"></i>
              <span className="nav-text"> Documentation </span>
            </Link>
          </li>
        </ul>
      )}

      {isAuthenticated ? (
        <ul className="logout">
          <li>
            <Link onClick={() => logout({ returnTo: window.location.origin })}>
              <i className="fa fa-power-off fa-2x"></i>
              <span className="nav-text"> Logout </span>
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="login">
          <li>
            <Link onClick={() => loginWithRedirect()}>
              <i className="fa fa-sign-in fa-2x"></i>
              <span className="nav-text"> Login </span>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
