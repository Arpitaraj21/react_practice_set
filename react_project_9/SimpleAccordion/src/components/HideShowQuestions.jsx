import React, { useState } from "react";
import './HideShowQuestion.css'
import { ques } from '../../question'
import { BsFillInfoCircleFill } from "react-icons/bs";


function ToggleQuestions() {
    // need to create a state variable to keep a track of click
    const [toggleId, setToggleId] = useState(null);

    const handleToggle = (id) => {
        setToggleId((prevId) => (prevId === id ? null : id))
        console.log(id);
    }
    return (
        <div className="main-container">
            <div className="main">
                {ques.map((item) => (

                    <div className="container">
                        <div className="ques-ans-container">
                            <p style={{padding: '5px'}}>
                                {item.question}
                            </p>
                            {toggleId === item.id && (
                                <p>
                                    {item.answer}
                                </p>
                            )}
                        </div>
                        <div className="icon" onClick={() => handleToggle(item.id)} style={{padding: '5px'}} >
                            <BsFillInfoCircleFill />
                        </div>
                    </div>


                ))}
            </div>
        </div>
    )
}

export default ToggleQuestions;