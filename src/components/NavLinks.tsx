import React from 'react'
import {Link} from 'react-router-dom'

export default function NavLinks() {

    const pages = ['home', 'about', 'works', 'blog', 'stuff'];

    return (
        <div id="nav-bar-links">
            {pages.map((page) => <Link title={page} className="nav-link" to={`/${page}`}>{page}</Link>)}
        </div>
    )
}
