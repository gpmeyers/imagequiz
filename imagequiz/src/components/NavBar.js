import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div>
            <Link to="/home">Home</Link>
            <Link to="/login">Login</Link>
        </div>
    );
}

export default NavBar;