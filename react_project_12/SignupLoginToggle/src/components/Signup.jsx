import React, { useState } from "react";
import './SignupLoginToggle.css'

function SignUpToggle() {

    const [isLogin, setIsLogin] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
    })

    const handleToggle = () => {
        setIsLogin((prev) => !prev);
    }

    const handleFormData = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }

        ))
    }


    const handleSubmit = () => {
        console.log(formData)
    }
    return (
        <>
            <div className="container">
                {isLogin ? (

                    <div className="form">
                        <p>SIGN UP</p>
                        <form onSubmit={handleSubmit}>
                            <label>
                                Name:
                                <br />
                                <input type="text" placeholder="Enter your name" name="name" onChange={handleFormData} />
                            </label>

                            <br />

                            <label>
                                Username:
                                <br />
                                <input type="text" placeholder="Enter your username" name="username" onChange={handleFormData} />
                            </label>

                            <br />

                            <label>
                                Email:
                                <br />
                                <input type="email" placeholder="Enter your email" name="email" onChange={handleFormData} />
                            </label>

                            <br />

                            <label>
                                Password
                                <br />
                                <input type="password" placeholder="Enter your password" name="password" onChange={handleFormData} />

                            </label>

                            <div className="btn">
                                <button onClick={handleSubmit}>
                                    SignUp
                                </button>
                            </div>



                            <p className="login-text" onClick={handleToggle}>   {isLogin ?
                                "SignUp instead" :
                                "Login instead"}</p>
                        </form></div>
                ) : (

                    <div className="form">
                        <p>LOGIN UP</p>
                        <form onSubmit={handleSubmit}>
                            <label>
                                Username:
                                <br />
                                <input type="text" placeholder="Enter your username" name="username" onChange={handleFormData} />
                            </label>

                            <br />

                            <label>
                                Password
                                <br />
                                <input type="password" placeholder="Enter your password" name="password" onChange={handleFormData} />

                            </label>

                            <div className="btn">
                                <button onClick={handleSubmit}>
                                    Login
                                </button>
                            </div>



                            <p className="login-text" onClick={handleToggle}>
                                {isLogin ?
                                    "SignUp instead" :
                                    "Login instead"}

                            </p>
                        </form></div>

                )}
            </div>
        </>
    )
}


export default SignUpToggle;