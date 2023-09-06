import { Link } from "react-router-dom";

function Navbar() {
    return ( 
        <>
            <Link style={{margin: '20px'}} to="/">Home</Link>
            <Link style={{margin: '20px'}} to="about">About</Link>
            <Link style={{margin: '20px'}} to="/login">Login</Link>
        </>
     );
}

export default Navbar;