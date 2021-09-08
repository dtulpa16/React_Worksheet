import React from "react";



const NameList = (props) =>{
    return(
        props.name.map(function(element){
            return <ul>{element}</ul>
        })
    )      
}
export default NameList;