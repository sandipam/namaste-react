import image from "../images/logo.jpg";
import {Link} from "react-router-dom";

export const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo"
                        src={image} />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/About'}>About Us</Link></li>
                    <li><Link to={'/Contact'}>Contact Us</Link></li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;