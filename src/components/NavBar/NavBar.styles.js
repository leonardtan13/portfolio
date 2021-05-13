import styled from "styled-components";

export const Nav = styled.nav`
    position: sticky;
    top: 0;
    z-index: 999;
    height: 23px;
    background-color: rgba(255,255,255,0.5);
    display: flex;
    align-items: center;
`

export const NavBarItem = styled.div`
    display: flex;
    margin: 0 10px 0 10px;
    font-size: 15px;
`

export const Link = styled.a`
    display: flex;
    color: black;
    text-decoration: none;
`


