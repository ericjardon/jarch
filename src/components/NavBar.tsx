import NavLinks from './NavLinks'
import NavMenu from './NavMenu'
import { Link } from 'react-router-dom'
import { useMediaSize } from "use-media-size";

export default function NavBar() {

    const {isMd} = useMediaSize();

    console.log("is mobile?", isMd)

    return (
        <header id="navbar">
            <div id="navbarcontent">
                {!isMd && (
                    <NavLinks />
                )}

                {isMd && (
                    <NavMenu />
                )}

                <div id="profile-block">
                    <div className="profile-img">

                    </div>
                </div>
                <p className="title">eric chao</p>
                <hr id="header-line" />
            </div>
        </header>
    )
}
