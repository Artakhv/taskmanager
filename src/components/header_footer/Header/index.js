import React from "react";
import { withRouter } from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar color="bg-danger" light className="bg-danger">
          <NavbarBrand
            className="mr-auto text-white"
            style={{ fontSize: "20px", cursor: "pointer" }}
            onClick={() => this.props.history.push("/")}
          >
            HOME
          </NavbarBrand>
          <NavbarToggler
            onClick={this.toggleNavbar}
            className="mr-2"
            style={{ color: "#f44242" }}
          />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink
                  className="text-white"
                  style={{ cursor: "pointer" }}
                  onClick={() => this.props.history.push("/about")}
                >
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="text-white"
                  style={{ cursor: "pointer" }}
                  onClick={() => this.props.history.push("/login")}
                >
                  Login
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(Header);
