import React from "react";
import './Person.css'

const Person = (props) => {
return (
    <div className='Person'>
        <p onClick={props.click}>I'm  {props.names} and i am {props.age} years old</p>
        <p>{ props.children}</p>
        <input type='text'onChange={props.changed} value={ props.names}/>
    </div>
)

}
export default Person;