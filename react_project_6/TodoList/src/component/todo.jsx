import React, { useState } from "react";
import './todo.css'

function TodoList() {
    const [list, setList] = useState({
        title: ''
    });
    const [submitted, setSubmittted] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setList((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = () => {
        if (list.title.trim() !== '') {
            setSubmittted((prev) => [...prev, { title: list.title, checked: false }]);
            setList({ title: '' })
        }
    }

    const handleCheckboxToggle = (indexToToggle) => {
        setSubmittted(prev =>
            prev.map((item, index) =>
                index === indexToToggle
                    ? { ...item, checked: !item.checked }
                    : item
            )
        );
    };

    const handleDelete = (indexToDelete) => {
        setSubmittted((prev) => prev.filter((_, index) => index !== indexToDelete))
    }

    return (
        <div className="container">
            <div className="input-text">
                <input name="title" type="text" placeholder="Enter the todo" value={list.title} onChange={handleChange} style={{ width: '10vw' }} />

                <button type="submit" onClick={handleSubmit}>Submit</button>
            </div>


            <div className="todo-container">
                {submitted.length > 0 && (
                    <div className="todo-list">
                        {submitted.map((item, index) => (
                            <>
                                <input
                                    type="checkbox"
                                    checked={item.checked}
                                    onChange={() => handleCheckboxToggle(index)}
                                />
                                <p key={index}>{item.title}</p>

                                <button onClick={() => handleDelete(index)}>Delete</button>
                            </>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default TodoList;



/* 
first create a state variable that keeps a track of the input, 
and then the checkbox , ticked or not

*/