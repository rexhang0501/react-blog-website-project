import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Doggy Blog</h1>
            <div className="links">
                <Link to="react-blog-website-project/">Home</Link>
                <Link to="react-blog-website-project/create" style={{
                        color: "white",
                        backgroundColor: "#f1356d",
                        borderRadius: "8px", 
                    }}>New Blog
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;