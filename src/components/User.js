import { useState } from "react";

const User =(props)=>{
    const [count,setCount] = useState(0);
    const {name, location,contact} = props;
    return (
        <div className="user-card">
            <h1>Count={count}</h1>
            <button onClick={()=>{
                setCount(count+1);
            }}>IncreaseCount</button>
            <h1>Name: {name}</h1>
            <h2>Location: {location}</h2>
            <h3>Contact: {contact}</h3>
        </div>
    )
}

export default User;