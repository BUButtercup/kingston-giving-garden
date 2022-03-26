import React from 'react'
import {Row} from 'react-bootstrap'
import PhotoCarousel from '../Carousel'

const Header = () => {
  return (
    <div>
      Header
      <Row md={1}>
        <PhotoCarousel/>
      </Row>
        
       
    </div>
  )
}

export default Header