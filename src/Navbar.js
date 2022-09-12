import Icon from "@mdi/react";
import {mdiHome, mdiAccount, mdiCog, mdiFolder, mdiPhone} from "@mdi/js"

function Navbar() {
    const liStyle = "gap-2 flex px-10 py-1 font-bold rounded underline decoration-2 underline-offset-8 decoration-transparent cursor-pointer transition duration-500 hover:decoration-city-lights";

    return (
        <nav className="
            bg-dracula-orchid
            top-bar 
            fixed 
            w-full 
            shadow-md">
            <ul className="
                w-2/5
                m-auto
                flex 
                justify-around
                py-5">
                <li className={liStyle}>
                    <Icon path={mdiHome} size={1}></Icon><span>Home</span>
                </li>
                <li className={liStyle}>
                    <Icon path={mdiAccount} size={1}></Icon><span>About</span>
                </li>
                <li className={liStyle}>
                    <Icon path={mdiCog} size={1}></Icon><span>Skills</span>
                </li>
                <li className={liStyle}>
                    <Icon path={mdiFolder} size={1}></Icon><span>Projects</span>
                </li>
                <li className={liStyle}>
                    <Icon path={mdiPhone} size={1}></Icon><span>Contact</span>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;