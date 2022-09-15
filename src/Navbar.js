import { Link } from "react-scroll";

function Navbar() {
    const liStyle = "gap-2 flex px-10 py-1 font-bold rounded underline decoration-2 underline-offset-8 decoration-transparent cursor-pointer transition duration-500 hover:decoration-city-lights";

    return (
        <nav className="
            invisible
            md:visible
            bg-dracula-orchid
            top-bar 
            fixed 
            w-full 
            shadow-md">
            <ul className="
                w-2/5
                m-auto
                flex 
                flex-col
                md:flex-row
                justify-around
                items-center
                py-5">
                <li className={liStyle}><Link to="home" spy={true} smooth={true}>Home</Link></li>
                <li className={liStyle}><Link to="about" spy={true} smooth={true}>About</Link></li>
                <li className={liStyle}><Link to="skills" spy={true} smooth={true}>Skills</Link></li>
                <li className={liStyle}><Link to="projects" spy={true} smooth={true} offset={-90}>Projects</Link></li>
                <li className={liStyle}><Link to="contact" spy={true} smooth={true}>Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;