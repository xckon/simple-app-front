import React, { useState } from "react";
import { useAuth0 } from "../react-auth0-spa";
// import { Link } from "react-router-dom";
import MyProfile from './layout/MyProfile';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

// const NavBar = () => {
//   const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
//   console.info({isAuthenticated});

//   return (
//     <div>
//       {!isAuthenticated && (
//         <button
//           onClick={() =>
//             loginWithRedirect({})
//           }
//         >
//           Log in
//         </button>
//       )}

//       {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
//       {isAuthenticated && (
//         <span>
//           <Link to="/">Home</Link>&nbsp;
//           <Link to="/profile">Profile</Link>
//         </span>
//       )}
//     </div>
//   );
// };

// export default NavBar;

const AppMenu = () => {
  const { isAuthenticated, loginWithRedirect, user } = useAuth0();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  console.info(user);
  const salutation = isAuthenticated && user !== undefined ? `Welcome ${user.nickname}!` : 'Simple App';

  const menuItems = [];

  if(!isAuthenticated) {
    menuItems.push((
      <NavItem key="Menu__Login">
        <NavLink onClick={() => {
          loginWithRedirect({});
        }}>Login</NavLink>
      </NavItem>
    ));
  }

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">{ salutation }</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            { menuItems }
            <MyProfile key="Menu__MyProfile" />
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default AppMenu;