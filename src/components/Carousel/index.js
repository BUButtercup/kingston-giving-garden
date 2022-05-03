import React from 'react'
import { Row, Col, Carousel, Card } from 'react-bootstrap'
import './style.css'
import Harvest1 from '../../assets/images/harvest-load.jpeg'
import Lettuce from '../../assets/images/gutter-lettuce.jpeg'
import Tomatoes1 from '../../assets/images/tomato-harvest.jpeg'
import Potatoes from '../../assets/images/potato-harvesting.jpeg'
import Coffee from '../../assets/images/coffee-grounds-buckets.jpeg'
import HerbBeds from '../../assets/images/herb_beds.jpeg'
import Harvest2 from '../../assets/images/harvest-prep.jpeg'
import RaisedBeds from '../../assets/images/raised-beds.jpeg'
import HoopHouse from '../../assets/images/hoop-house.jpeg'
import Compost from '../../assets/images/compost.jpeg'
import Sustainable from '../../assets/images/sustainable.jpeg'
import Bee from '../../assets/images/bee.jpeg'


const PhotoCarousel = () => {
  const photoGroup = [{
    id:1,
    url: Harvest1,
    subtitle: 'Volunteers load a harvest for delivery to Sharenet',
    position: 'center'
  }, {
    id:2,
    url: Lettuce,
    subtitle: 'Lettuce thrives in the gutter planters',
    position: 'center'
  }, {
    id:3,
    url: Tomatoes1,
    subtitle: 'Tomatoes are very popular and high-yielding',
    position: 'center'
  }, {
    id:4,
    url: Potatoes,
    subtitle: 'We need a lot of hands to help harvest potatoes',
    position: 'center'
  }];

  const photoGroup2 = [{
    id:5,
    url: Coffee,
    subtitle: 'Local restaurants provide coffee grounds for compost',
    position: 'center'
  }, {
    id:6,
    url: HerbBeds,
    subtitle: 'Organizations volunteer their time for big projects',
    position: 'center'
  }, {
    id:7,
    url: Harvest2,
    subtitle: 'Harvests are taken to Sharenet weekly',
    position: 'bottom'
  }, {
    id:8,
    url: RaisedBeds,
    subtitle: 'We try lots of different methods to up production',
    position: 'center'
  }];

  const photoGroup3=[{
    id:9,
    url: HoopHouse,
    subtitle: 'Our large hoop house was grant-funded and volunteer-built',
    position: 'center'
  }, {
    id:10,
    url: Compost,
    subtitle: 'Composted manure: a gift we\'re always happy to get!',
    position: 'center'
  }, {
    id:11,
    url: Sustainable,
    subtitle: 'Sustainable techniques help us maintain soil health',
    position: 'center'
  }, {
    id:12,
    url: Bee,
    subtitle: 'We love it when pollinators hang around!',
    position: 'center'
  }]

  return (

    // <Row md={12}>
    <Carousel fade className='shadow mb-3 p-0'>
     <Carousel.Item  interval={5000} className='d-flex flex-row'>
     {photoGroup.map((obj, index)=> {return <div key={obj.id}  className='col-3 car-img' style={{height:'200px', backgroundImage: `url(${obj.url})`, backgroundPosition: `${obj.position}`, backgroundRepeat: 'no-repeat', backgroundSize: `cover`}}>
        <p className="img-title">{obj.subtitle}</p>
        </div>})}
      </Carousel.Item>
      <Carousel.Item  interval={5000} className='d-flex flex-row'>
      {photoGroup2.map((obj, index)=> {return <div key={obj.id}  className='col-3 car-img' style={{height:'200px', backgroundImage: `url(${obj.url})`, backgroundPosition:`${obj.position}`, backgroundRepeat: 'no-repeat', backgroundSize: `cover`}}>
        <p className="img-title">{obj.subtitle}</p>
        </div>})}
      </Carousel.Item>
      <Carousel.Item  interval={5000} className='d-flex flex-row'>
      {photoGroup3.map((obj, index)=> {return <div key={obj.id}  className='col-3 car-img' style={{height:'200px', backgroundImage: `url(${obj.url})`, backgroundPosition: `${obj.position}`, backgroundRepeat: 'no-repeat', backgroundSize: `cover`}}>
        <p className="img-title">{obj.subtitle}</p>
        </div>})}
      </Carousel.Item>
    </Carousel>
      
  )
}

export default PhotoCarousel