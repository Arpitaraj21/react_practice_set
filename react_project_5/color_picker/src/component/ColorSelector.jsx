import React, { useState } from "react";
import './ColorSelector.css'
function ColorSelector() {

    const [selectedColor, setSelectedColor] = useState({
        color: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(selectedColor);
        setSelectedColor((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const [submittedValue, setSubmittedValue] = useState();

    const handleSubmit = () => {
        setSubmittedValue(selectedColor);
        console.log(selectedColor);

    }

    return (
        <div className="color-container">
            <div className="container">
                <input type="color" name="color" value={selectedColor.color} onChange={handleChange} />
            </div>

            <div className="submit">
                <button onClick={handleSubmit}>Submit</button>
            </div>


            {submittedValue ? (
                <div className="colors" style={{ backgroundColor: submittedValue.color, width: '20vw', height: '20vw' }}>

                </div>
            ) : null}
        </div>
    )
}

export default ColorSelector;