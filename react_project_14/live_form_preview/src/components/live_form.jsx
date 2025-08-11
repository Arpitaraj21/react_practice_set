import React from "react";
import { useState } from "react";
import './live_form.css'
function LiveformPreview() {

    const [previewData, setPreviewData] = useState({
        name: '',
        education: '',
        age: ''
    })
    const handleFormData = (e) => {
        const { name, value } = e.target;
        setPreviewData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(previewData)
    }
    return (
        <div className="container">
            <h3>Live form Preview</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" placeholder="enter your name" name="name" onChange={handleFormData} />
                </label>

                <p>{previewData.name}</p>
                <br />
                <label >
                    <input type="text" placeholder="enter your education" name="education" onChange={handleFormData} />
                </label>
                <p>{previewData.education}</p>
                <br />
                <label>
                    <input type="number" placeholder="enter your age" name="age" onChange={handleFormData} />
                </label>
                <p>{previewData.age}</p>
                <br />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default LiveformPreview; 