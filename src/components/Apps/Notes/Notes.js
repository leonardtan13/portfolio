import Window from "../Window/Window";
import {DescriptionDiv, SideBar, HolderDiv, SideBarItem} from "./Notes.styles";
import {useEffect, useState} from "react";
import ReactMarkdown from "react-markdown";
import aboutMe from "../../../data/aboutMe.md"
import experience from "../../../data/experience.md"

const sideBarItems = {
    "aboutMe" : {
        'name' : 'About me',
        'md' : aboutMe
    },
    "experience" : {
        'name' : 'Experience',
        'md' : experience
    }
}

const Content = ({data}) => {
    return (
        <DescriptionDiv>
            <ReactMarkdown
                children={data}
            />
        </DescriptionDiv>
    )
}



const Notes = () => {

    const [selectedId, setSelectedId] = useState('aboutMe')
    const [data, setData] = useState({})


    useEffect( () => {
        fetch(aboutMe)
            .then(response => response.text())
            .then(text => {
                setData( prevState => {
                    let data = {...prevState}
                    data['aboutMe'] = text
                    return data
                })
            })
    }, [])

    useEffect( () => {
        fetch(experience)
            .then(response => response.text())
            .then(text => {
                setData( (prevState) => {
                    let data = {...prevState}
                    data['experience'] = text
                    return data
                })
            })
    }, [])

    const handleClick = (id) => {
        setSelectedId(id)
    }

    return (
        <Window
            width={800}
            title={`Notes`}
        >
            <HolderDiv>
                <SideBar>
                    {Object.entries(sideBarItems).map( (value) => {
                        return <SideBarItem
                            selected = {selectedId === value[0]}
                            onClick = { () => handleClick(value[0])}
                        >
                            {value[1]['name']}
                        </SideBarItem>
                    })}
                </SideBar>

                <Content data={data[selectedId]}/>
            </HolderDiv>
        </Window>
    )
}

export default Notes
