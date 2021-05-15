import { Rnd } from "react-rnd";
import {useState} from "react";
import {Button, WindowBar} from "./Window.styles";
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
    "borderRadius" : "7.5px"
}

const TrafficLight = () => {
    return (
        <>
            <Button style={{backgroundColor: "#ff6159"} }>
                <IoCloseOutline size={11}/>
            </Button>

            <Button style={{backgroundColor: "#ffbd2e"} }>
                <FiMinus size={11} />
            </Button>

            <Button style={{backgroundColor: "#28c941"} }>
                <ExitFullIcon size={6.5} />
            </Button>
        </>
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
