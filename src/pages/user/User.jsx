import { Link } from 'react-router-dom';
import { AccountCircleOutlined, CalendarToday, ContactsOutlined, LocationOnOutlined, EmailOutlined, Publish } from '@material-ui/icons';
import './user.css';

const User = () => {
  return (
    <div className="user">

      <div className="userTitleContainer">
        <h2 className="userTitle">Edit User</h2>
        <Link to="/newUser"><button className="userTitleBtn">Create</button></Link>
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

            <span className="showUserBottomTitle">Contact Details</span>

            <div className="showUserInfo">
              <EmailOutlined  className="showUserIcon" />
              <span className="showUserInfoTitile">martinez@example.com</span>
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
        <div className="updateUser">
          <span className="updateUserTitle">Edit</span>

          <form className="updateUserForm">

            <div className="updateUserLeft">
              <div className="form-group">
                <label>Username</label>
                <input type="text" className="from-control" placeholder="Aurelio99" />
              </div>
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" className="from-control" placeholder="Aurelio  Martinez" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="text" className="from-control" placeholder="martinez@example.com" />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input type="text" className="from-control" placeholder="+1 123 456 789" />
              </div>
              <div className="form-group">
                <label>Address</label>
                <input type="text" className="from-control" placeholder="New York | USA" />
              </div>
            </div>

            <div className="updateUserRight">
              <div>
                <img src="https://randomuser.me/api/portraits/men/52.jpg" className="updateUserImg" alt="" />
                <label htmlFor="file"><Publish style={{cursor: 'pointer'}} /></label>
                <input type="file" id="file" style={{display: 'none'}} />
              </div>
              <div>
                <button className="updateUserbtn">Update</button>
              </div>
            </div>

          </form>

        </div>
      </div>

    </div>
  )
}

export default User;
