function Navbar() {
    return (
        <nav className="
            bg-dracula-orchid
            top-bar 
            fixed 
            w-full 
            shadow-2xl">
            <ul className="
                w-2/5
                m-auto
                flex 
                justify-around
                py-5">
            {[
                'Home',
                'About',
                'Skills',
                'Projects',
                'Contact',
            ].map(title => (
                <li className="
                    px-10 
                    py-1
                    font-bold
                    rounded 
                    underline
                    decoration-2
                    underline-offset-8
                    decoration-transparent
                    cursor-pointer
                    transition
                    duration-500
                    hover:decoration-city-lights">
                    {title}
                </li>
            ))}
            </ul>
        </nav>
    );
}

export default Navbar;