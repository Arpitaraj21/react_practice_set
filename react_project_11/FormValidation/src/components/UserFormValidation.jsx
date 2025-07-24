import React from "react";
import { useState } from "react";

function UserFormValidation() {
    // initial useState

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })


    const handleFormValue = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))

    }


    const handleSubmit = (e) => {
        e.preventDefault(),

            console.log(formData)

    }
    return (
        <>

            <div className="container">

                <form>

                    <label>
                        Name:
                        <input type="text" name="name" placeholder="Enter your name" onChange={handleFormValue} value={formData.name} />
                    </label>

                    <label>
                        Email:
                        <input type="email" name="email" placeholder="Enter your email" onChange={handleFormValue} value={formData.password} />
                    </label>

                    <label>
                        Password:
                        <input type="password" name="password" placeholder="Enter your password" onChange={handleFormValue} value={formData.password} />
                    </label>


                    <button onClick={handleSubmit}>Submit</button>
                </form>
            </div>

        </>
    )
}

export default UserFormValidation;