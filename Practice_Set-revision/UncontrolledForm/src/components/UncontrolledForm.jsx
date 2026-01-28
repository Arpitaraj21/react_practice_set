import React, {useRef} from "react";

export default function UncontrolledForm(){

    const nameRef = useRef();
    const ageRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const age = ageRef.current.value;

        console.log("Name", name, "Age: ", age);
    }
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name: </label>
                <input type="text" ref={nameRef} />
            </div>
            <div>
                <label>Age: </label>
                <input type="age" ref={ageRef}/>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}