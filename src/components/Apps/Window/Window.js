import { Rnd } from "react-rnd";
import {useState} from "react";
import {Button, WindowBar, TrafficLightDiv, WindowBarTitle} from "./Window.styles";
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

    const maxW = window.innerWidth - 100
    const maxH = window.innerHeight - 100

    const [width, setWidth] = useState(Math.min(maxW, props.width ? props.width : 640))
    const [height, setHeight] = useState(Math.min(maxH, props.height ? props.height : 480))

    const [x, setX] = useState(Math.random() * (maxW - width))
    const [y, setY] = useState(Math.max(50, Math.random() * (maxH - height)))

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
                <WindowBarTitle ><strong>{props.title}</strong></WindowBarTitle>
            </WindowBar>
            {props.children}
        </Rnd>

    )
}

export default Window
