import React from 'react'
import "./Footer.css"
import data from "../../../src/Footer"
const Footer = () => {
  return (
    <div className='footer'>
      <div className='d-flex flex-wrap gap-3'>
     <a href={data[0].link} target='_blank'><i class="fa-brands fa-linkedin size"></i></a> 
     <a href={data[2].link} target='_blank'><i class="fa-brands fa-github size"></i></a> 
     <a href={data[1].link} target='_blank'><i class="fa-brands fa-square-twitter size"></i></a> 
      </div>
      <div>
        <b>All Right Reserved &copy; by CV</b>
      </div>
    </div>
  )
}

export default Footer