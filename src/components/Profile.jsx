import PropTypes from 'prop-types';


const Profile = (props) => {
    const { isFixed } = props;

    Profile.propTypes = {
        isFixed: PropTypes.bool.isRequired,
    };

    return <div className="profile-wrapper" style={{
        position: isFixed ? 'fixed' : 'relative',
        paddingTop: isFixed ? '20px' : '70px'
    }}>
        <div>

            <div className="profile-name">
                Reyco Seguma
            </div>

            <div className="profile-profession">
                Fullstack Software Engineer
            </div>
            <div className="profile-item">
                <i className="bi bi-buildings"></i>
                <span>Notre Dame of Marbel University</span>
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
            <i className="devicon-github-original"></i>
            <i className="devicon-linkedin-plain"></i>
            <i className="devicon-facebook-plain"></i>
        </div>
    </div>
}

export default Profile;