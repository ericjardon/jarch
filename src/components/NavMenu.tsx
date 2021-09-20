import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaAngleRight } from 'react-icons/fa'
import { GoTriangleRight } from 'react-icons/go'

export default function NavMenu(props: any) {

    const { pathname } = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const pages = ['home', 'about', 'works', 'blog', 'stuff'];

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

    const title = pathname.slice(1) || "home"

    useEffect(() => {
        closeMenu();
    })

    return (
        <div id="nav-menu-container">
            <span id="nav-menu-span" onClick={toggleMenu}> <GoTriangleRight id="arrow" className="menu-arrow" />
                <p>{title}</p>
            </span>

            <div id="nav-menu" className="nav-menu">
                {pages.map((page, index) => <Link key={index} title={page} className="nav-link" onClick={() => handleClick(page)}
                    to={`/${page}`}>{page}</Link>)}
            </div>
        </div>
    )
}
