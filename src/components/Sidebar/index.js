import React from 'react'
import './style.css'
import Sharenet from '../../assets/images/sharenet-logo.png'
import CandM from '../../assets/images/cup-muff-logo.png'
import Valley from '../../assets/images/valley-logo.png'

const Sidebar = () => {
  return (
    <section className='col-3 d-flex flex-column align-items-center'>
      <div className="col-12 d-flex flex-column align-items-center mb-3 shadow side-card">
        <h3 className="title text-center my-3">Harvests Go to</h3>
        <a href="https://www.sharenetfoodbank.org/" target="_blank"
          className="d-flex flex-column align-items-center mb-4">
          <img src={Sharenet} alt="Sharenet Foodbank Logo" />
          <p className="address">Food Bank</p>
          <p className="address">25994 Barber Cut-Off Rd.</p>
          <p className="address">Kingston, WA, 98346</p>
        </a>
      </div>
      <div className="col-12 d-flex flex-column align-items-center my-3 shadow side-card">
        <h3 className="title text-center my-3">Thank You to Our Donors</h3>
        <a href="https://www.cupandmuffin.com/">
          <img src={CandM} alt="Cup & Muffin Logo" className="donor-logo"/>
        </a>
        <a href="https://valleynurseryinc.com/">
          <img src={Valley} alt="Valley Nursery Logo"
            className="mb-4 donor-logo"/>
        </a>
      </div>
      <div className="col-12 d-flex flex-column align-items-center my-3 shadow side-card">
        <h3 className="title text-center my-3">Thank You to Our Volunteers!!!</h3>
        <ul className="list-group" id="vol-list">
          <li className="list-group-item">Our regular weekly crew (you know who you are!)</li>
          <li className="list-group-item">Kingston High School Honor Society</li>
          <li className="list-group-item">Washington Youth Academy</li>
          <li className="list-group-item">University Congregational United Church of Christ Youth</li>
        </ul>
      </div>
    </section>
  )
}

export default Sidebar