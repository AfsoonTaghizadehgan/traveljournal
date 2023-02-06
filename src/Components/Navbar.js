import logo from '../images/logo.png'
import '../App.css';

//a logo and title to the travel journal site
export default function Navbar(){
    return(
        <nav className="navbar">
            <img src={logo} alt="" className="nav--logo" />
            <p> my travel journal</p>
        </nav>
    )
}