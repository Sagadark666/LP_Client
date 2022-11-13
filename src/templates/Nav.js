function NavBar(){
    return(
        <nav className="nav">
            <a href="/">LP</a>
            <ul>
                <li>
                    <a href="/about">About Me</a>
                </li>
                <li>
                    <a href="/project">Projects</a>
                </li>
                <li>
                    <a href="/contactus">Contact Me</a>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;