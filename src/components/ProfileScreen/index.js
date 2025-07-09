import Header from "../Header"
import { GoArrowLeft } from "react-icons/go";
import {Link} from "react-router-dom"
import "./index.css"

const ProfileScreen=()=>{
    console.log("pro")
    return <div className="profile"><Header/>
    <div className="profile-card">
        <div className="profile-top-card">
            <Link to="/"><GoArrowLeft className="icon-arrow"/> </Link>
            <h1 className="profile-name">Welcome! 
                <span>Ervin Howell</span>
                </h1>
                </div>
        <div className="profile-card-1">
            <div className="profile-top-card">
                <p className="profile-log">EV</p>
                <div className="profile-name-card">
                    <h1>Ervin Howell</h1>
                    <p>ervinhowell@email.com</p>
                </div>
            </div>
            <ul className="profile-ul">
                <li className="profile-li"><p>User ID</p><p className="profile-li-p">1234567</p></li> 
                <li className="profile-li"><p>Name</p><p className="profile-li-p">Ervin Howell</p></li>
                <li className="profile-li"><p>Email ID</p><p className="profile-li-p">ervinhowell@gmail.com</p></li>
                <li className="profile-li"><p>Address</p><p className="profile-li-p">dfhsksedj</p></li>
                <li className="profile-li"><p>Phone</p><p className="profile-li-p">99XXXXXX10</p></li>
            </ul>
        </div>
        </div></div>
}

export default ProfileScreen