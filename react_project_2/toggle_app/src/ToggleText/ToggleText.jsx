import React, { useState } from "react";
import './ToggleText.css'
function ToggleText() {

    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle((prev) => !prev);
    }
    return (
        <div className="main-container">
            <div className="text">
                {!toggle ?
                    (<p>Hello!</p>) : <p>Goodbye!</p>}
                <button onClick={handleToggle}>Toggle</button>
            </div>

        </div>
    )
}

export default ToggleText;  