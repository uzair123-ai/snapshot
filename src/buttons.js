import React from 'react'

const Buttons = (props) => {
  return (
    <>
    <div style={myStyles}>
    <button>{props.name}Mountain</button>
    <button>{props.name}Beaches</button>
    <button>{props.name}Parks</button>
    <button>{props.name}Landscapes</button>
    </div>
    </>
  )
} 
const myStyles =
    {
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    textAlign: "center",
    // textAlign: "center",
}
export default Buttons