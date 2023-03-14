import React from 'react'

const SearchBar = () => {
  return (
    <>
    <div style={myStyles}>
    <input type={"search"}/><br></br>
    </div>
    </>
  )}

  const myStyles = {
    margin:"20px",
    display:"flex",
    alignItems:"center", 
    textAlign:"center",
    justifyContent:"center"
  }

export default SearchBar