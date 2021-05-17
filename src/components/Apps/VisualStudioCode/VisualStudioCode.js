import Window from "../Window/Window";
import {DescriptionDiv, SideBar, HolderDiv, SideBarItem} from "./VisualStudioCode.styles";
import {useState} from "react";

const sideBarItems = ["About me", "Projects"]


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

                <DescriptionDiv>
                    <h1>Hello</h1>
                </DescriptionDiv>
            </HolderDiv>

        </Window>
    )
}

export default VisualStudioCode
