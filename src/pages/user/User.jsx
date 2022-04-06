import { AccountCircleOutlined, CalendarToday, ContactsOutlined, LocationOnOutlined } from '@material-ui/icons';
import './user.css';

const User = () => {
  return (
    <div className="user">

      <div className="userTitleContainer">
        <h2 className="userTitle">Edit User</h2>
        <button className="userTitleBtn">Create</button>
      </div>

      <div className="userContainer">
        <div className="showUser">

          <div className="showUserTop">
            <img src="https://randomuser.me/api/portraits/men/52.jpg" alt="" className="showUserImg" />
            <div className="showUserTopTitile">
              <span className="showUsername">Aurelio Martinez</span>
              <span className="showUserTitle">Software Engineer</span>
            </div>
          </div>

          <div className="showUserBottom">
            <span className="showUserBottomTitle">Account Details</span>

            <div className="showUserInfo">
              <AccountCircleOutlined className="showUserIcon" />
              <span className="showUserInfoTitile">Aurelio Martinez</span>
            </div>

            <div className="showUserInfo">
              <CalendarToday  className="showUserIcon" />
              <span className="showUserInfoTitile">10.12.2021</span>
            </div>

            <div className="showUserInfo">
              <ContactsOutlined  className="showUserIcon" />
              <span className="showUserInfoTitile">+1 123 456 789</span>
            </div>

            <div className="showUserInfo">
              <LocationOnOutlined  className="showUserIcon" />
              <span className="showUserInfoTitile">New York | USA</span>
            </div>

          </div>

        </div>
        <div className="updateUser"></div>
      </div>

    </div>
  )
}

export default User;
