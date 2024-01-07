import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { addhistory, deleteVideo } from '../services/allapi';
import Modal from 'react-bootstrap/Modal';
import './videocard.css'

function Videocard({displayvideo,setdeletevideostatus}) {
  const removeVideo = async(id)=>{
    const response = await deleteVideo(id)
    setdeletevideostatus(true)
  }
  const dragStarted=(e,id)=>{
    e.dataTransfer.setData("videoID",id);
  }
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = async () =>{
    setShow(true);
    // timestamp,video,url
    const {caption,embededLink}=displayvideo;
    const today=new Date;
    let timestamp=new Intl.DateTimeFormat('en-US',{
      year:'numeric',
      month:'2-digit',
      hour:'2-digit',
      minute:'2-digit',
      second:'2-digit'
    }).format(today)
    let videodetails={
      caption:caption,
      embededLink:embededLink,
      timestamp:timestamp
    }
    await addhistory(videodetails)
  } 

  return (
    <>
    <Card style={{ width: '14rem' }}  draggable onDragStart={(e)=>dragStarted(e,displayvideo?.id)}>
      <Card.Img className='poster' variant="top" height="250px" width="100%" style={{objectFit:"cover",cursor:"pointer"}} src={displayvideo.url} onClick={handleShow} alt='No Image is Available'/>
      <Card.Body>
        <h6>{displayvideo.caption}</h6>
        <Button variant="danger" onClick={()=>removeVideo(displayvideo.id)}><i class="fa-solid fa-trash"></i> </Button>
      </Card.Body>
    </Card>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{displayvideo.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="480" src={`${displayvideo.embededLink}?autoplay=1`}  
        frameborder="1" title='mediaplayer'></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          </Modal.Footer>
      </Modal>
    </>
  )
}

export default Videocard