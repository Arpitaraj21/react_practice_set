import React from "react";
import { useState } from "react";

function Modal() {

    const [openModal, setOpenModal] = useState(false);


    const handleModalToggle = () => {
        console.log('clicked');
        setOpenModal((prev) => !prev);
    }
    return (
        <div >

            <button onClick={handleModalToggle} style={{ backgroundColor: 'lightBlue', border: '0px', width: '8rem', height: '3rem', }}>Open Modal</button>


            {openModal && (
                <div
                    style={{
                        position: 'fixed',
                        width: '100vw',
                        height: '100vh',
                        display: 'flex',
                        // position: 'relative',
                        justifyContent: 'center',
                        alignItems: 'center',
                        background: 'gray',
                        zIndex: '1000'
                    }} >
                    <div style={{
                        width: '50vw',
                        height: '20vh',
                        display: 'flex',
                        position: 'relative',
                        justifyContent: 'center',
                        alignItems: 'center',
                        background: 'white',
                        borderRadius: '5px',
                        zIndex: '1'
                    }}>
                        <h5>This is a modal!</h5>
                    </div>
                </div>

            )}
        </div>
    )
}

export default Modal;