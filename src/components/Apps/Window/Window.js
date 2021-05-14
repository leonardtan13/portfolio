import { Rnd } from "react-rnd";
import {useState} from "react";
import {Button, WindowBar} from "./Window.styles";
import {IoCloseOutline} from "react-icons/all";
import {IconContext} from "react-icons";

const style = {
    "backgroundColor" : "white",
    "borderRadius" : "7.5px"
}

const TrafficLight = () => {
    return (
        <Button>
            <IconContext.Provider value={{ style: { display: 'flex'} }}>
                <IoCloseOutline />
            </IconContext.Provider>
        </Button>
    )
}


const Window = (props) => {

    const [x, setX] = useState(100)
    const [y, setY] = useState(100)

    return (
        <Rnd
            position={{x: x, y: y}}
            size = {{ width: 500, height: 500}}
            style={style}
            onDragStop={(e, d) => {
                setX(d.x)
                setY(d.y)
            }}
        >
            <WindowBar>
                <TrafficLight />
            </WindowBar>
            {props.children}
        </Rnd>

    )
}

export default Window
