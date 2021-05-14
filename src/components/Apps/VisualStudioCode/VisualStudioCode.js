import { Rnd } from "react-rnd";
import {useState} from "react";


const VisualStudioCode = () => {

    const [x, setX] = useState(100)
    const [y, setY] = useState(100)

    return (
        <>

            <Rnd
                position={{x: x, y: y}}
                style={{"backgroundColor" : "white"}}
                onDragStop={(e, d) => {
                    setX(d.x)
                    setY(d.y)
                }}
            >
                Test
            </Rnd>

        </>
    )
}

export default VisualStudioCode
