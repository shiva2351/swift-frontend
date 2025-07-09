import { Link } from "react-router-dom/cjs/react-router-dom.min"
import "./index.css"

const Header=()=>{
    console.log("header")
    return <nav className="header">
        <ul className="head-ul"><li className="logo-card"><div className="logo-s">S</div>WIFT</li>
        <li className="head-user"><Link to="/profile"><div className="head-logo">EH</div></Link><p>Ervin Howell</p></li></ul>
    </nav>
}

export default Header