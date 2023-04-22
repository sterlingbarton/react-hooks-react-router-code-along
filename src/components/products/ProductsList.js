import React, {useState} from "react";
import Product from "./Product";

export default function ProductsList(){
    const [isClicked, setIsClicked] = useState(false)

    function handleClick(){
        setIsClicked(isClicked => !isClicked)
    }

    return (
        <div>
            <button>Search</button>
            <button onClick={handleClick}>List</button>
            <button>Add</button>
            {isClicked ? <Product/> : null}           
        </div>
    )
}