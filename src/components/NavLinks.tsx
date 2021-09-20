import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import { NavBarProps } from '../interfaces';

export default function NavLinks(props: NavBarProps) {

    const {pages} = props;
    const {pathname} = useLocation();
    const currentPage = pathname.slice(1) || "home"

    return (
        <div id="nav-bar-links">
            {pages.map((page) => <Link title={page} className={`nav-link ${currentPage==page?'selected':''}`} to={`/jarch/${page}`}>{page}</Link>)}
        </div>
    )
}
