import React from "react";
import { Nav, NavLink } from "./styles";
import { MdHome, MdFavoriteBorder, MdPersonOutline } from "react-icons/md";


const SIZE = "32px";
const NavBar = () => {
  return (
    <Nav>
      <NavLink  aria-current="page" to="/">
        <MdHome size={SIZE} />
      </NavLink>
      <NavLink  aria-current="page" to="/favs">
        <MdFavoriteBorder size={SIZE} />
      </NavLink>
      <NavLink  aria-current="page" to="/user">
        <MdPersonOutline size={SIZE} />
      </NavLink>
    </Nav>
  );
};

export default NavBar;
