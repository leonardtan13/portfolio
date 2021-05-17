import Window from "../Window/Window";
import {DescriptionDiv, SideBar, HolderDiv, SideBarItem} from "./VisualStudioCode.styles";
import {useEffect, useState} from "react";
import ReactMarkdown from "react-markdown";
import aboutMe from "../../../data/aboutMe.md"

const sideBarItems = ["About me", "Projects"]

const Content = (props) => {

    const [state, setState] = useState({})

    useEffect( () => {
        fetch(aboutMe)
            .then(response => response.text())
            .then(text => {
                setState({
                    'aboutMe' : text
                })
            })
    })


    return (
        <DescriptionDiv>
            <ReactMarkdown
                children={state['aboutMe']}
            />
        </DescriptionDiv>
    )
}


const VisualStudioCode = () => {

    const [selectedId, setSelectedId] = useState(0)

    const handleClick = (id) => {
        setSelectedId(id)

    }

    return (
        <Window>
            <HolderDiv>
                <SideBar>
                    {sideBarItems.map((value, index) => {
                        return <SideBarItem
                            id={`sidebar-${index}`}
                            selected={selectedId === index}
                            onClick={() => handleClick(index)}
                        >
                            {value}
                        </SideBarItem>
                    })}
                </SideBar>
                <Content />
            </HolderDiv>

        </Window>
    )
}

export default VisualStudioCode
