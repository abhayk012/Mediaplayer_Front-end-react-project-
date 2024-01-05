import React from 'react'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Landing() {
  return (
    <div>
       <Container className='mt-5 mb-5 d-flex align-items-center justify-content-evenly'>
      <Row>
        <Col className='mt-5'>
        <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
        <p style={{ textAlign: "justify" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis tenetur voluptatum debitis! Mollitia reiciendis aut obcaecati rem, explicabo maiores tempora magni, ullam inventore itaque facere, placeat quia sed quaerat ab. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio illum mollitia dolorum ut fuga saepe nesciunt? Architecto iure exercitationem voluptas, officiis molestiae dolore! Modi quos alias qui quae. Eum, consequatur!</p>
        <Link to='/home'>
        <button className='btn btn-warning mt-3'>Get Started<i class="fa-solid fa-arrow-right ms-2 "></i></button>
        </Link>
        </Col>
        <Col >
        <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" height={"400px"} className='ms-3' style={{borderRadius:"50%"}} alt='' />
        </Col>
      </Row>
    </Container>
    <div className='container'>
      <h3>Features</h3>

      <div className='cards d-flex align-items-center justify-content-evenly mt-5'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height="289px" src="https://cdn.dribbble.com/users/767646/screenshots/1940258/cam.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </div>

    </div>
    <div className='container mb-5 mt-5 border border-2 border-secondary rounded'>
        <Row>
          <Col>
            <h3 className='text-warning mt-5 mb-5'>Simple and Powerful</h3>
            <p><span className='fs-5 fw-bolder'>Play Everything: </span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic expedita facilis veritatis sunt odio neque dolores saepe corporis nulla reiciendis vel, numquam nihil repellat? Quidem maiores quas doloribus eum esse!</p>
            <p><span className='fs-5 fw-bolder'>Play Everything: </span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic expedita facilis veritatis sunt odio neque dolores saepe corporis nulla reiciendis vel, numquam nihil repellat? Quidem maiores quas doloribus eum esse!</p>
            <p><span className='fs-5 fw-bolder'>Play Everything: </span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic expedita facilis veritatis sunt odio neque dolores saepe corporis nulla reiciendis vel, numquam nihil repellat? Quidem maiores quas doloribus eum esse!</p>

          </Col>
          <Col>
          <div className='mt-5'>
          <iframe width="100%" height="400" src="https://www.youtube.com/embed/Rw4jMK1Lm-c" title="&quot;WHEN HELL FREEZES OVER&quot;(No more chances for you)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>          
          </div>
          </Col>
        </Row>
      </div>
    </div>
    
  )
}

export default Landing