import {Nav, NavBarItem, Link} from "./NavBar.styles";
import {AiFillApple} from "react-icons/all";


const NavBar = () => {
    return (
        <>
            <Nav>
                <NavBarItem>
                    <AiFillApple />
                </NavBarItem>

                <NavBarItem >
                    <Link
                        href="https://www.linkedin.com/in/leonardtan13/"
                        target={"_blank"}
                    >
                        Linkedin
                    </Link>
                </NavBarItem>

                <NavBarItem>
                    <Link
                        href="https://github.com/leonardtan13"
                        target={"_blank"}
                    >
                    Github
                    </Link>
                </NavBarItem>
            </Nav>
        </>
    )
}

export default NavBar

