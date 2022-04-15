import React, { useState } from 'react'
import './style.css'
import { Harvest2011, Harvest2012, Harvest2013, Harvest2014, Harvest2015, Harvest2016, Harvest2017, Harvest2018, Harvest2019, Harvest2020, Harvest2021, Harvest2022 } from '../../assets/utils/harvestGraphs'

const Data = () => {
  const [image, setImage] = useState(6)

  const harvestYears = [
    {
      id: 1,
      year: '2011'
    },
    {
      id: 2,
      year: '2012'
    },
    {
      id: 3,
      year: '2013'
    },
    {
      id: 4,
      year: '2014'
    },
    {
      id: 5,
      year: '2020'
    },
    {
      id: 6,
      year: '2021'
    }]

  return (
    <main className='container-fluid col-9 d-flex flex-column align-items-center'>
      <h1 className="mt-4 align-self-start title">Yearly Harvest Data</h1>
      <h2 className="mt-4 title">This Year's Harvest To Date</h2>
      <h2 className="mt-4 title">Historical Harvest Data</h2>
      {/* <p className="col-11 align-self-center">Click on the thumbnail images to see an interactive graph of each year's harvest data.</p> */}
      {image === 1 ? <Harvest2011 /> : null}
      {image === 2 ? <Harvest2012 /> : null}
      {image === 3 ? <Harvest2013 /> : null}
      {image === 4 ? <Harvest2014 /> : null}
      {image === 5 ? <Harvest2020 /> : null}
      {image === 6 ? <Harvest2021 /> : null}
      <div className='col-9 d-flex justify-content-center'>
        {harvestYears.map(year => {
          return (

            <h4 onClick={() => setImage(year.id)} key={year.id} className='mx-2 years'>{year.year}</h4>

          )
        })}
      </div>





    </main>
  )
}

export default Data