import { Avatar } from "@mui/material";
import profileImage from '../assets/profile.png';

const Header = () => {
    return (
        <div className="header-wrapper">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Avatar
                    alt="Reyco Profile"
                    src={profileImage}
                    sx={{ width: 170, height: 170 }}
                />
            </div>

            <div className="header-name">Reyco Seguma</div>
            <div className="header-profession">Fullstack Software Engineer</div>

            <div className="header-socials">
                <i className="devicon-github-original"></i>
                <i className="devicon-linkedin-plain"></i>
                <i className="devicon-facebook-plain"></i>
            </div>

            <div className="header-links">
                <a href="#about">About</a>
                <span>-</span>
                <a href="#myresume">Experience</a>
                <span>-</span>
                <a href="#myservices">Services</a>
                <span>-</span>
                <a href="#skills">Skills</a>
                <span>-</span>
                <a href="#certificates">Codes</a>
            </div>
        </div>
    );
}

export default Header;