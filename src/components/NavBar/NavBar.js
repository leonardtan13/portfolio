import {Nav, NavBarItem, Link} from "./NavBar.styles";
import {AiFillApple} from "react-icons/all";
import {LINKEDINURL, GITHUBURL, EMAIL, RESUME} from "../../Constants";
import {format} from "date-fns";
import {useEffect, useState} from "react";

const NavBar = () => {
    const [date, setDate] = useState(Date.now())

    useEffect(() => {
        setInterval(() => {
            setDate(Date.now(), 60000);
            return () => clearInterval();
        }, []);
    })
    return (
        <>
            <Nav>
                <NavBarItem>
                    <AiFillApple />
                </NavBarItem>

                <NavBarItem >
                    <Link href= {LINKEDINURL}
                        target={"_blank"}
                    >
                        Linkedin
                    </Link>
                </NavBarItem>

                <NavBarItem>
                    <Link
                        href= {GITHUBURL}
                        target={"_blank"}
                    >
                    Github
                    </Link>
                </NavBarItem>

                <NavBarItem>
                    <Link
                        href= {EMAIL}
                        target={"_blank"}
                    >
                        Email
                    </Link>
                </NavBarItem>

                <NavBarItem>
                    <Link
                        href= {RESUME}
                        target={"_blank"}
                    >
                        Resume
                    </Link>
                </NavBarItem>


                <NavBarItem style={{marginLeft: "auto", flexShrink: 0}}>
                    {format(date, 'eee d MMM h:mm aa')}
                </NavBarItem>
            </Nav>
        </>
    )
}

export default NavBar

