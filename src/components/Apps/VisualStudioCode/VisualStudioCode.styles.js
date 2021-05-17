import styled from "styled-components";

export const HolderDiv = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    border-radius: inherit; 
`

export const SideBar = styled.div`
    display: flex;
    border-radius: 0 0 0 7.5px;
    height: 100%;
    width: 175px;
    background-color: rgba(  236, 236, 236, 0.5);
    flex-direction: column;
`

export const DescriptionDiv = styled.div`
    display: flex;
    background-color: white;
    height: 100%;
    border-radius: 0 0 7.5px 0;
`

export const SideBarItem = styled.button`
    background-color: ${props => props.selected ? "rgba(255, 214, 10, 0.5)" : "inherit"};
    display: flex;
    align-items: center;
    font-size: 100%;
    font-family: inherit;
    padding: 20px;
    border: none;
    border-bottom: 1px solid lightgray;
`
