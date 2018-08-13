import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { MdHome } from "react-icons/md";
import { MdAddBox } from "react-icons/md";
import { MdPermDeviceInformation } from "react-icons/md";

const Header = props => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <span>
                  <MdHome />
                </span>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contacts/add" className="nav-link">
                <span>
                  <MdAddBox />
                </span>
                Add
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <span>
                  <MdPermDeviceInformation />
                </span>
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: "My App"
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};
export default Header;
