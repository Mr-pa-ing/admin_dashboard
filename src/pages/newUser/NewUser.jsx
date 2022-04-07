import "./newUser.css";

const NewUser = () => {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
          <div className="input-group">
            <label>Username</label>
            <input type="text" placeholder="john" />
          </div>
          <div className="input-group">
            <label>Full Name</label>
            <input type="text" placeholder="John Smith" />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input type="text" placeholder="john@gmail.com" />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="text" placeholder="password" />
          </div>
          <div className="input-group">
            <label>Phone</label>
            <input type="text" placeholder="+1 123 456 89" />
          </div>
          <div className="input-group">
            <label>Address</label>
            <input type="text" placeholder="New York | USA" />
          </div>
          <div className="input-group">
            <label>Gender</label>
            <div className="radio-group">
              <input type="radio" name="gender" id="male" value="male" />
              <label htmlFor="male">Male</label>
              <input type="radio" name="gender" id="female" value="female"/>
              <label htmlFor="female">Female</label>

            </div>
          </div>
          <div className="input-group">
            <label>Active</label>
            <select className="newUserSelect" name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div>
            <button type="submit" className="newUserSubmitBtn">Create</button>
          </div>
      </form>
    </div>
  )
}

export default NewUser;
