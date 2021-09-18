import React from 'react'
import img from '../img/profile.jpg'
import NavLinks from './NavLinks'

export default function NavBar() {
    return (
        <header id="navbar">
            <div id="navbarcontent">
                <NavLinks />
                <div id="profile-block">
                    <div id="profile-circle" className="centeredFlex">
                        <img id="profile-img" src={img} alt="Profile" />
                    </div>
                </div>
                <p className="title">eric chao</p>
            </div>
        </header>
    )
}
