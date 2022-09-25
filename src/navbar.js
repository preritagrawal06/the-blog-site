import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <h1>The Blog Site</h1>
                <label htmlFor="toggle"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="menuIcon bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg></label>
                <input type="checkbox" id="toggle" />
                <div className="menu">
                    <Link to='/'>Home</Link>
                    <Link to='/create'>New Blog</Link>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;