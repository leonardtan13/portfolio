import Window from "../Window/Window";
import {DescriptionDiv, SideBar, HolderDiv, SideBarItem} from "./Notes.styles";
import {useEffect, useState} from "react";
import ReactMarkdown from "react-markdown";
import aboutMe from "../../../data/aboutMe.md"

const sideBarItems = ["About me", "Projects"]

const Content = (props) => {

    return (
        <DescriptionDiv>
            <ReactMarkdown
                children={props.data}
            />
        </DescriptionDiv>
    )
}


const Notes = () => {

    const [selectedId, setSelectedId] = useState(0)
    const [data, setData] = useState({})

    useEffect( () => {
        fetch(aboutMe)
            .then(response => response.text())
            .then(text => {
                setData({
                    'aboutMe' : text
                })
            })
    }, [])


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

                <Content data={data.aboutMe} />
            </HolderDiv>

        </Window>
    )
}

export default Notes
