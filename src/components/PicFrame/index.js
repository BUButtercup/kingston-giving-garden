import './style.css'

import React from 'react'

const PicFrame = ({id, description, image}) => {
  return (
    <div key={id} className='outer-frame card'>
            <div key={id} className='card card-img, pic-img' style={{backgroundImage: `url(${image})`}}></div>
            {/* <img key={id} className='card-img pic-img' src={image}/> */}
            <div key={id} className='card-footer pic-cap'>
                {description}
            </div>
    </div>
  )
}

export default PicFrame