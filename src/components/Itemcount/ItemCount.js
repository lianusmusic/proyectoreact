import React from 'react';
import { useState } from 'react';
import "./Itemcount.css";

function ItemCount () {
    const [count, setCount] = useState(1);
    const sumar = () => {

        if  (count <= 0){
            setCount=false
        }
        else {
            setCount=true
        }
    }

    return (
<div>
       <div className = "counter">
        <button className="countbut"onClick={()=> setCount(count + 1)}>
        + </button>
        <p>Your cart has {count} items</p>
        <button className="countbut" onClick={()=> setCount(count - 1)}>
        - </button>
        </div>
    </div>
    )
}
export default ItemCount
