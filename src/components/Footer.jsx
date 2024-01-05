import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

function Footer() {
  return (

    <>
      <div className='d-flex justify-content-center align-items-center mt-5'>
        <div className='footer d-flex justify-content-evenly align-items-center'>

          <div className='website' style={{ width: "400px" }}>
            <h4><i class="fa-solid fa-video text-warning me-2"></i>Media Player</h4>
            <p style={{ textAlign: "justify" }}>This innovative media player offers a seamless and immersive audio-visual experience, boasting a user-friendly interface and robust functionality for effortlessly organizing and enjoying a diverse range of multimedia content. With its sleek design and advanced features, it redefines the way users interact with their digital media, delivering unparalleled convenience and entertainment at their fingertips.</p>
          </div>
           <div className='links d-flex flex-column ms-5'>
            <h4>Links</h4>
            <Link to='/' style={{textDecoration:"none",color:"white"}}>Landing Page</Link>
            <Link to='/home' style={{textDecoration:"none",color:"white"}}>Home Page</Link>
            <Link to='/watch' style={{textDecoration:"none",color:"white"}}>Watch History</Link>

           </div>
           <div className='guides d-flex flex-column ms-5'>
            <h4>Guides</h4>
            <Link to='https://react.dev/' target='_blank' style={{textDecoration:"none",color:"white"}}>React</Link>
            <Link to='https://react-bootstrap.netlify.app/' target='_blank' style={{textDecoration:"none",color:"white"}}>React Bootstrap</Link>
            <Link to='https://bootswatch.com/' target='_blank' style={{textDecoration:"none",color:"white"}}>Boots Watch</Link>

           </div>
           <div className='contact d-flex flex-column ms-5'>
           <h4>Contact Us</h4>
           <div className='d-flex'>
            <input type="text" className='form-control' placeholder='enter youre email'/>
            <button className='btn btn-warning ms-2'>subscribe</button>
           </div>

           <div className='mt-3'>
            <Link><i class="fa-brands fa-facebook fa-2xl ms-2"></i></Link>
            <Link><i class="fa-brands fa-instagram fa-2xl ms-4"></i></Link>
            <Link><i class="fa-brands fa-x-twitter fa-2xl ms-4"></i></Link>
            <Link><i class="fa-brands fa-linkedin fa-2xl ms-4"></i></Link>
           </div>

           </div>
        </div>
      </div>
      <p className='mt-5 text-center copyright' >Copyright &copy; 2023 media player.Built by me with React</p>

    </>
  )
}

export default Footer