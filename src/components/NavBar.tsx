import NavLinks from './NavLinks'
import NavMenu from './NavMenu'
import { Link } from 'react-router-dom'
import { useMediaSize } from "use-media-size";
import {NavBarProps} from '../interfaces'

export default function NavBar(props: NavBarProps) {

    const {pages} = props;
    const {isMd} = useMediaSize();

    return (
        <header id="navbar">
            <div id="navbarcontent">
                {!isMd && (
                    <NavLinks pages={pages}/>
                )}

                {isMd && (
                    <NavMenu pages={pages}/>
                )}

            </div>
        </header>
    )
}
