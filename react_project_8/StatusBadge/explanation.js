//   1) state initialization (useState)
import { useState } from "react";
import { Users } from "./src/Users";

function Explanation() {

    // use State

    const [userState, setUserState] = useState(
        Users.map((item) => (
            {
                id: item.id,
                status: item.status,
            }
        ))
    )

    // we initialize a local state that tracks the status of each user independently so toggling doesn't addect others

    // thinking behind

    // 1) we don't want to change the original users array
    // 2) we create a state array userState with only id and status
    // 3) each time we toggle this array will be updated and re-rendered



    const handleToggle = (id) => {
        setUserState((prevState) =>
            prevState.map((user) =>
                user.id === id ?
                    {
                        ...user,
                        status: user.status === 'active' ? 'in-active' : 'active'
                    }
                    : user

            ))
    };

    // purpose:  change the status of a specific user when the toggle is switched
    // we identify the user using user.id === id
    //using ternary logic to flip between active and in-active
    // map() ensures we only update the clicked user, leaving others unchanged



    return (
        <>

            {Users.map((item) => {
                const currentStatus = userState.find((u) => (u.id === item.id)?.status);


                <><div
                    style={{
                        width: "12px",
                        height: "12px",
                        borderRadius: "50%",
                        backgroundColor: currentStatus === "active" ? "green" : "grey",
                    }}> </div><input
                        type="checkbox"
                        checked={currentStatus === "active"}
                        onChange={() => handleToggle(item.id)} /></>


            })}



        </>
    )
}

export default Explanation;