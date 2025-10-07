import React, { useState } from "react";

export default function TogglePassword() {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword((prev) => !prev);
    }
    return (
        <>
            <input type={showPassword ? "text" : "password"} placeholder="Enter your password" />
            <button onClick={handleTogglePassword} >Show Password</button>
        </>
    )
}