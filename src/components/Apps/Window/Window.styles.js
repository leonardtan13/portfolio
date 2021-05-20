import styled from "styled-components";

export const WindowBar = styled.div`
    display: flex;
    position: sticky;
    top: 0;
    width: 100%;
    background-color: rgba(235, 245, 248, 0.5);
    height: 22px;
    border-radius: 7.5px 7.5px 0 0;
    align-items: center;
`

export const Button = styled.button`
    border-radius: 50%;
    margin: 0 2px 0 7.5px;
    width: 14px;
    height: 14px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const TrafficLightDiv = styled.div`
    display: flex;
    height: 1.5rem;
    position: relative;
    align-items: center;
`

export const WindowBarTitle = styled.div`
    display:flex;
    position: relative;
    margin: auto;
    left: -35px;
`
