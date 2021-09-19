import NavLinks from './NavLinks'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <header id="navbar">
            <div id="navbarcontent">
                <NavLinks />
                <div id="profile-block">
                    <div className="profile-img">

                    </div>
                </div>
                <p className="title">eric chao</p>
                <hr id="header-line"/>
            </div>
        </header>
    )
}
