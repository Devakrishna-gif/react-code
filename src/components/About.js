import User from "./User";
import UserClass from "./UserClass";
import React from "react";
// const About = ()=>{
//     return(
//         <div>
//             <h1>About US</h1>
//             <User name="Devakrishna" location="Hyderbad" contact="7330834696"/>
//             <hr/>
//             <UserClass name="Devakrishna RSV (class)" location="Bangalore" contact="9398466678"/>
//         </div>
//     )
// }

class About extends React.Component{
    constructor(props){
        super(props);
        // console.log("Parent Constructor");
    }
    componentDidMount(){
        // console.log("Parent ComponentDidMount")
    }
    render(){
        // console.log("Parent Render constructor");
        return(
            <div>
             <h1>About US</h1>
             {/* <User name="Devakrishna" location="Hyderbad" contact="7330834696"/>
             <hr/> */}
             <UserClass name="firstChild (class)" location="Bangalore" contact="9398466678"/>
             {/* <UserClass name="secondChild (class)" location="Chennai" contact="7032813989"/> */}
        </div>
        )
    }
}



export default About;