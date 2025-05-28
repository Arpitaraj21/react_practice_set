import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import './TogglePassword.css'

function TogglePassword() {

  const [visible, setVisible] = useState(false);

  const handleVisibility = () => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false)
    }, 2000)
  }
  return (
    <div className="main-container">
      <div className="password">
        <input type={visible ? 'text' : 'password'} placeholder="Enter your password" />
        <button onClick={handleVisibility}>
          {visible ? <FaEye /> : <FaEyeSlash />}
        </button>
      </div>
    </div>
  )
}

export default TogglePassword;