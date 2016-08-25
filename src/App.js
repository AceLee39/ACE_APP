import React, { Component } from 'react';
import {Link} from 'react-router';
import { Grid, Navbar, Jumbotron, Button, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

export default React.createClass({
  render() {
    return (
    	<div>
      <div>
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand> 
                <Link to="/">Home</Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
             <Nav>
              <NavItem eventKey={1}><Link to="/message">Message</Link></NavItem>
              <NavItem eventKey={1}><Link to="/article">Article</Link></NavItem>
              <NavDropdown eventKey={3} title="Support" id="basic-nav-dropdown">
                  <MenuItem eventKey={3.1}>Action</MenuItem>
                  <MenuItem eventKey={3.2}>Another action</MenuItem>
                  <MenuItem eventKey={3.3}>Something else here</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
          </Grid>
        </Navbar>
      </div>
       <div>
      {this.props.children}
      </div>
      </div>
    );
  }
})