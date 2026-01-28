import React from "react";
import {Data} from './data'

export default function SimpleAccordion(){
    const [show, setShow] = useState(false);

    const handleToggle = () => {

    }
    return(
        <div>
            <h1>Simple Accordion</h1>
           {Object.values(Data).map((item, index) => {
            <div key={item.key}>
                <p>{item.question}</p>
                </div>
              })}
        </div>
    )
}