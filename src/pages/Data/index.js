import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import './style.css'
import { Harvest2022 } from '../../assets/utils/harvestGraphs'
import Thumb2011 from '../../assets/images/2011.png'
import Thumb2012 from '../../assets/images/2012 Garden Harvest.png'
import Thumb2013 from '../../assets/images/2013 Garden Harvest.png'
import Thumb2014 from '../../assets/images/2014 Garden Harvest.png'
import Thumb2020 from '../../assets/images/2020 Garden Harvest.png'
import Thumb2021 from '../../assets/images/2021 Garden Harvest.png'
import Bee from '../../assets/images/leaf.png'

const Data = () => {
  // const [image, setImage] = useState(6)

  const harvestYears = [
    {
      id: 1,
      year: '2011',
      source: '../../assets/images/2011 Garden Harvest.png'
      // Thumb2011
    },
    {
      id: 2,
      year: '2012',
      source:Thumb2012
    },
    {
      id: 3,
      year: '2013',
      source:Thumb2013
    },
    {
      id: 4,
      year: '2014',
      source:Thumb2014
    },
    {
      id: 5,
      year: '2020',
      source:Thumb2020
    },
    {
      id: 6,
      year: '2021',
      source:Thumb2021
    }]

  return (
    <main className='container-fluid col-9 d-flex flex-column align-items-center'>
      <h1 className="mt-4 align-self-start title">Yearly Harvest Data</h1>
      <h2 className="mt-4 title">This Year's Harvest To Date</h2>
      <Harvest2022 />
      <h2 className="mt-4 title">Historical Harvest Data</h2>
      <Outlet />
      {/* <p className="col-11 align-self-center">Click on the thumbnail images to see an interactive graph of each year's harvest data.</p> */}

      <div className='col-9 d-flex justify-content-center'>
        {harvestYears.map(year => {
          return (

            <Link key={year.id} to={year.year}  style={{ backgroundImage: `url(${Bee})`}} className="thbnail">

              <h4 key={year.id} className='mx-2 years'>{year.year}</h4>
    
            </Link>

          )
        })}
      </div>





    </main>
  )
}

export default Data