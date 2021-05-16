import Window from "../Window/Window";
import {DescriptionDiv, SideBar, HolderDiv} from "./VisualStudioCode.styles";

const VisualStudioCode = () => {

    return (
        <Window>
            <HolderDiv>
                <SideBar>
                    <h1>Test</h1>
                </SideBar>

                <DescriptionDiv>
                    <h1>Hello</h1>
                </DescriptionDiv>
            </HolderDiv>

        </Window>
    )
}

export default VisualStudioCode
