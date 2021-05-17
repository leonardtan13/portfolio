import { Rnd } from "react-rnd";
import {useState} from "react";
import {Button, WindowBar, TrafficLightDiv} from "./Window.styles";
import {IoCloseOutline, FiMinus} from "react-icons/all";

const ExitFullIcon = ({ size }) => {
    return (
        <svg
            viewBox="0 0 19 19"
            width={size}
            height={size}
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit={2}
        >
            <path fill="none" d="M0 0h18.972v18.973H0z" />
            <path d="M18.373 9.23L9.75.606V9.23h8.624zM.6 9.742l8.623 8.624V9.742H.599z" />
        </svg>
    );
};

const style = {
    "backgroundColor" : "white",
    "borderRadius" : "7.5px",
    "display" : "flex",
    "flexDirection": "column",
    "overflow" : "hidden",
    "position" : "absolute",
    "boxShadow": "rgba(149, 157, 165, 0.2) 0px 8px 24px"
}

const TrafficLight = () => {
    return (
        <TrafficLightDiv>
            <Button style={{backgroundColor: "#ff6159"} }>
                <IoCloseOutline size={11}/>
            </Button>

            <Button style={{backgroundColor: "#ffbd2e"} }>
                <FiMinus size={11} />
            </Button>

            <Button style={{backgroundColor: "#28c941"} }>
                <ExitFullIcon size={6.5} />
            </Button>
        </TrafficLightDiv>
    )
}


const Window = (props) => {

    const [x, setX] = useState(100)
    const [y, setY] = useState(100)


    const [width, setWidth] = useState(640)
    const [height, setHeight] = useState(400)

    return (
        <Rnd
            position={{x: x, y: y}}
            size = {{ width: width, height: height}}
            style={style}
            onDragStop={(e, d) => {
                setX(d.x)
                setY(d.y)
            }}
            onResizeStop={(e, direction, ref) => {
                setWidth(parseInt(ref.style.width))
                setHeight(parseInt(ref.style.height))
            }}
            dragHandleClassName={"WindowBar"}
            minWidth={400}
            minHeight={200}
            bounds={"window"}
        >
            <WindowBar className={"WindowBar"}>
                <TrafficLight />
            </WindowBar>
            {props.children}
        </Rnd>

    )
}

export default Window
