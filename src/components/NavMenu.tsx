import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaAngleRight } from 'react-icons/fa'
import { GoTriangleRight } from 'react-icons/go'
import { NavBarProps } from '../interfaces';

export default function NavMenu(props: NavBarProps) {

    const { pathname } = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const {pages} = props;

    const toggleMenu = () => {
        document.getElementById("nav-menu")?.classList.toggle('closed');
        document.getElementById("arrow")?.classList.toggle('rotate');
    }

    const closeMenu = () => {
        document.getElementById("nav-menu")?.classList.add('closed');
        document.getElementById("arrow")?.classList.remove('rotate');
    }

    const handleClick = (page: string) => {
        closeMenu();
    }

    const title = pathname.split('/')[2] || "home"

    useEffect(() => {
        closeMenu();
    })

    return (
        <div id="nav-menu-container">
            <span id="nav-menu-span" onClick={toggleMenu}> <GoTriangleRight id="arrow" className="menu-arrow" />
                <p>{title}</p>
            </span>

            <div id="nav-menu" className="nav-menu">
                {pages.map((page, index) => <Link key={index} title={page} className="navmenu-link" onClick={() => handleClick(page)}
                    to={`/jarch/${page}`}>{page}</Link>)}
            </div>
        </div>
    )
}
