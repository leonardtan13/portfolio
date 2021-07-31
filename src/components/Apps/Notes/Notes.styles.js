import styled from "styled-components";

export const HolderDiv = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
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
    background-color: #f0f0f0;
    height: 100%;
    border-radius: 0 0 7.5px 0;
    flex-direction: column;
    width: 100%;
    overflow: scroll;

    h2 {
        font-family: Proxima Nova;
    }
   
    h1, h2, h3, h4, p{
        padding: 5px 40px 5px 40px;
        max-width: 600px;
        line-height: 1.5;
    }
    
    a {
        text-decoration: none;
    }
    
    h1, h3 {
        padding-bottom: 15px;
    }
    
    p {
        padding-bottom: 15px;
    }
    
    p: last-child {
        padding-bottom: 100px;
    }
    
    h1, h2: first-child {
        padding-top: 2rem;
    }

    
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
