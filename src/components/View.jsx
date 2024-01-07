import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getAllVideos } from '../services/allapi';

function View({uploadvdostatus}) {
  const [allVideo, setAllVideo] = useState([])
  const getAllUploadedVideos = async () => {
    const response = await getAllVideos();
    const { data } = response;
    setAllVideo(data)
  }
  const [deletevideostatus,setdeletevideostatus]=useState(false)
  useEffect(() => {
    getAllUploadedVideos();
  }, [deletevideostatus,uploadvdostatus])
  return (
    <>
      <Row>
        {
          allVideo.length > 0 ?
            allVideo.map((video) => (
              <Col sm={12} md={6} lg={4} xl={4} className='m-4'>
                <Videocard displayvideo={video} setdeletevideostatus={setdeletevideostatus}/>
              </Col>
            ))
            :
            <p>No item to display</p>
        }
      </Row>
    </>

  )
}

export default View