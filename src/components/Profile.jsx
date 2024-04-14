import { Avatar } from "@mui/material";
import profileImage from '../assets/profile.png';

const Profile = () => {
    return <div className="profile-wrapper content-padding">
        <div>
            <div style={{ display: 'flex' }}>
                <Avatar
                    alt="Reyco Profile"
                    src={profileImage}
                    sx={{ width: 150, height: 150 }}
                />
            </div>

            <div className="profile-name">
                Reyco Seguma
            </div>

            <div className="profile-profession">
                Fullstack Software Engineer
            </div>
            <div className="profile-item">
                <i className="bi bi-envelope-at"></i>
                <span>segumareyco@gmail.com</span>
            </div>
            <div className="profile-item">
                <i className="bi bi-telephone"></i>
                <span>+63 (908) 944 4999</span>
            </div>
        </div>

        <div className="profile-menus">
            <div>ABOUT</div>
            <div>EXPERIENCE</div>
            <div>SERVICES</div>
            <div>SKILLS</div>
            <div>CODES</div>
        </div>

        <div className="profile-socials">
            <i className="devicon-github-original" style={{ fontSize: 30 }}></i>
            <i className="devicon-linkedin-plain" style={{ fontSize: 30 }}></i>
            <i className="devicon-facebook-plain" style={{ fontSize: 30 }}></i>
        </div>
    </div>
}

export default Profile;