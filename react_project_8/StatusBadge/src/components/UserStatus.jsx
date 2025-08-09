import React, { useState } from "react";
import { Users } from "../Users";
import './UserStatus.css'

function UserStatus() {

  // state variable
  const [userStatus, setUserStatus] = useState(
    Users.map((item) => ({
      id: item.id,
      status: item.status
    }))
  );

  // toggle function

  const handleToggle = (id) => {
    setUserStatus((prevStatus) =>
      prevStatus.map((user) =>
        user.id === id
          ? { ...user, status: user.status === 'active' ? 'inactive' : 'active' }
          : user
      )
    );
  };


  return (
    <div className="container" >
      <div className="table">
        {Users.map((item) => {
          const userObj = userStatus.find((u) => u.id === item.id);
          const currentStatus = userObj?.status === 'active';

          return (
            <div className="user-detail" key={item.id}>


              {/* profile picture */}
              <div className="profile" style={{ display: 'inline-flex' }}>
                <div className="profile-pic">
                  <img src={item.profile_picture} alt="profile picture" />
                </div>
                <div className="user-status"
                  style={{
                    width: '12px',
                    height: '12px',
                    backgroundColor: currentStatus ? 'green' : 'gray',
                    borderRadius: '50%',
                    marginTop: '47px',
                    marginLeft: '-11px'
                  }}>

                </div>
              </div>

              {/* user name */}
              <div className="user-personal-details">
                <div>
                  <div className="user-name">
                    <p> {item.first_name}</p>

                    <p>{item.last_name}</p>


                  </div>
                  <div className="email" style={{ marginLeft: '20px' }}>
                    {item.email}
                  </div>

                </div>


                {/* toggle  button */}
                <div className="toggle-button" style={{marginRight: '40px'}}>
                  <label className="toggle-switch" >
                    <input
                      type="checkbox"
                      checked={currentStatus}
                      onChange={() => handleToggle(item.id)} />
                    <span className="slider"></span>
                  </label>
                </div>

              </div>




            </div>
          )





        })}
      </div>
    </div>
  )
}

export default UserStatus