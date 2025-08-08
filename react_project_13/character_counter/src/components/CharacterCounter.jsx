import React from "react";
import './CharacterCounter.css'
import { useState } from "react";

const CharacterCounter = () => {

    const [inputVal, setInputVal] = useState({
        para: '',
    });

    const limit = 50;

    const handleData = (e) => {
        const { name, value } = e.target;

        if (value.length <= limit) {
            setInputVal((prev) => ({

                ...prev,
                [name]: value
            }))
        }
    }

    const characterCount = inputVal.para.length;
    console.log(characterCount);


    const totalCharacterleft = limit - characterCount;

    return (

        <>

            <div className="message-container">
                <div className="container">
                    <textarea type="text" placeholder="Enter your message" name="para" onChange={handleData} readOnly={totalCharacterleft <= 0} rows={5} />
                    <p>{totalCharacterleft}/{limit}</p>
                </div>

            </div>


        </>
    )
}

export default CharacterCounter