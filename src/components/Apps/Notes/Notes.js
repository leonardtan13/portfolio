import Window from "../Window/Window";
import {DescriptionDiv, SideBar, HolderDiv, SideBarItem} from "./Notes.styles";
import {useEffect, useState} from "react";
import ReactMarkdown from "react-markdown";
import aboutMe from "../../../data/aboutMe.md"
import experience from "../../../data/experience.md"

const sideBarItems = [
    {
        'name' : 'About me',
        'md' : aboutMe
    },
    {
        'name' : 'Experience',
        'md' : experience
    }
]

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

    const [selectedId, setSelectedId] = useState('About me')
    const [data, setData] = useState({})

    
    useEffect( () => {

        async function fetchData(sideBarItem){
            let response = await fetch(sideBarItem.md)
            response = await response.text()
            
            setData(prevState => {
                let data = {...prevState}
                data[sideBarItem.name] = response
                return data
            })
        }

        sideBarItems.forEach(item => fetchData(item))
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
                    {sideBarItems.map(item => {
                        return <SideBarItem
                            selected = {selectedId === item.name}
                            onClick = { () => handleClick(item.name)}
                            >
                                {item.name}
                            </SideBarItem>
                    })}
                </SideBar>
                <Content data={data[selectedId]}/>
            </HolderDiv>
        </Window>
    )
}

export default Notes
