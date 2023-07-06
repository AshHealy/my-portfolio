import React from "react";
import { Link } from "react-router-dom"
import styled from 'styled-components'

const StyledNav = styled.ul`
display:flex;
justify-content: space-evenly;
list-style-type: none;
background-color: #C3E0E5;
margin:0;
padding:1em;
font-family: 'Courier New', Courier, monospace;
font-size: large;
`

const StyledNavItem = styled.li`
  margin-right: 10px;
  cursor: pointer;
`



const NavBar = () => {

    return (
        <StyledNav>
            <StyledNavItem><Link to="/">Home</Link></StyledNavItem>
            
            <StyledNavItem><Link to="/about">About</Link></StyledNavItem>

            <StyledNavItem><Link to="/contact">Contact</Link></StyledNavItem>
        </StyledNav>
    )
}
export default NavBar;