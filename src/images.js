import React from 'react'
import Img1 from "./profile pic.jpg"
import Img2 from "./profile pic2.jpg"
const Images = () => {
  return (
    <>
    <div className='image'>
    <img id="image1" src={Img1}/>
    <img id="image2" src={Img2}/>
    </div>
    </>

  )
}

export default Images