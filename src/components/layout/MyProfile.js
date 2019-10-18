import React from "react";
import { useAuth0 } from "../../react-auth0-spa";
import { Link } from "react-router-dom";

import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavLink } from 'reactstrap';

  const MyProfile = () => {
  const { isAuthenticated, logout, user } = useAuth0();

  if(!isAuthenticated || user === undefined) {
    return null;
  }
  
  return (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        <img src={user.picture} className="img-fluid img-thumbnail rounded MyProfile__UserImage m-2" alt={user.name}/>{ user.name }
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem>
          <NavLink>
            <Link to="/profile">Profile</Link>
          </NavLink>
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem>
          <NavLink onClick={() => {
            logout({});
          }}>Logout</NavLink>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
}

export default MyProfile;