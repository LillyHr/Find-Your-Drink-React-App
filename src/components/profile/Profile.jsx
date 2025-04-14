import './Profile.css';
import { Link } from "react-router-dom";

export default function Profile() {
    return (
        <>
            <div className="whole-container">
                <div className="container">
                    <div className="profile-header">
                        <img className="profile-picture"
                            src="https://static.vecteezy.com/system/resources/thumbnails/009/209/212/small/neon-glowing-profile-icon-3d-illustration-vector.jpg"
                            alt="Profile Picture" />
                        <div className="profile-name">username</div>
                        <div className="profile-info">email</div>
                        <div className="profile-info">tel</div>
                        <Link to={"/profile-edit"}>Edit Profile</Link>
                    </div>
                </div>
            </div>
        </>
    )
}