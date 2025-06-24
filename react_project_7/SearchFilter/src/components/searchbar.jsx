import React, { useState } from "react";
import { Users } from "../Users";
import './searchbar.css'

function SearchBar() {

    const [query, setQuery] = useState("");

    console.log(query);
    return (
        <div className="container">
            <div className="searchbar">
                <input type="text" placeholder="search here..." name="search" onChange={(e) => setQuery(e.target.value)} />
            </div>

            <div className="list" style={{maxHeight: '300px', overflowY: 'scroll'}}>
                <table style={{maxHeight:'300px', width: '100px'}}>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Users
                            .filter((user) => user.first_name.toLowerCase().includes(query))
                            .slice(0,100)
                            .map((item) => (
                                <tr key={item.id}>
                                    <td>{item.first_name}</td>
                                    <td>{item.last_name}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SearchBar;