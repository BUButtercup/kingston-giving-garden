import React from 'react'
import './style.css'
import YearChart from '../../assets/images/yearly-opt.png'

const Home = () => {
  return (
    <main className='col-9 main-box'>
      <div className="col-12 px-4 mb-4 d-flex flex-column">
        <h2 className="mt-4 title">Who We Are...</h2>
        <p className="col-11 align-self-center">The Giving Garden is an organic farm located in
          Kingston, WA. We are a volunteer-driven
          project helping to fight food insecurity in the Kingston area by providing over a ton of
          organically-grown, fresh-from-the-ground produce to our local food bank every year since
          2011.</p>
        <details>
          <summary>
            <h2 className="mt-2 title">What We Do...</h2>
            <h5 className="sub-title">We Garden Together</h5>
            <p className="col-11 align-self-center">Our community of volunteers comes together every
              week during the growing season to tend
              the fresh produce that will go out to local families. The support of PNW businesses
              and
              organizations through the donation of money, goods, or their time helps make this
              all
              happen.

            </p>


            <p className="col-11 align-self-center">Additionally, we have a <a href="tools">"tool
              library"</a> for our volunteers to borrow from,
              allowing us all to avoid spending money unnecessarily on items we may only need once
              in
              a while.</p>
            <span className="expandable" id="more">Read more...</span><span className="expandable" id="less">Read less...</span>
          </summary>
          <h5 className="sub-title">We Learn Together</h5>
          <p className="col-11 align-self-center">Besides coming together to fight local hunger, we
            try to give our garden volunteers as much added
            value as possible to their experience. This includes providing opportunities to
            research
            and try out new organic gardening styles and tecniques. Bring your innovative ideas
            and
            creativity to help us increase our yield!</p>
          <h5 className="sub-title">We Play Together</h5>
          <p className="col-11 align-self-center">Every year, our volunteer community gets together to
            celebrate the season with pot-lucks
            and barbecues!</p>
        </details>
      </div>
      <div className="col-12 d-flex num-box">
        <div className="card shadow col-md-6 col-12 me-4 fig-box">
          <img src={YearChart} class="card-img-top graph"
            alt="yearly output in pounds" title="Giving Garden yearly output in pounds" />
          <div className="card-body fig-body">
            <figcaption className="card-text text-center fig-test">Our harvest totals by year. For a
              closer look
              at our harvests year by year, visit the<a href="data"> Harvest Data </a> 
              page.</figcaption>
          </div>
        </div>

        <div className="num-text d-flex flex-column">
          <h2 className="title">The Numbers Say It All</h2>
          <p className="col-10 align-self-center">Each year, we track our harvest totals to see which
            crops and methods return the
            biggest yields.</p>
          <p className="col-10 align-self-center"> This data, along with feedback from the food bank
            on what items are popular or hard
            to get ahold of from other sources, guide our planting choices every year.</p>
          <p className="col-10 align-self-center">Visit the <a href="data">Harvest Data</a> page for more information.</p>
        </div>
      </div>
      <div className="col-12 d-flex flex-column">
        <h2 className="mt-4 title">How <span className="text-decoration-underline">YOU</span> Can Help!</h2>
        <h5 className="sub-title">Donate!</h5>
        <p className="col-11 align-self-center">
          Whether it's time, supplies, or financial suport that you have to spare, we're grateful for the help! Visit the <a href="donate">Donate</a> page to learn more about the opportunities available.
        </p>
        <h5 className="sub-title">Educate Yourself</h5>
        <p className="col-11 align-self-center">
          Food insecurity is an issue that severely impacts the lives of those affected by it. It can prevent children from performing well in school, and can often be an indicator that that the impacted family is having other financial difficulties. Take the time to learn more about how food insecurity is impacting individuals and families in both Kitsap County and Washington State as a whole. <a href="https://www.livestories.com/statistics/hunger-in-washington/washington/kitsap-county-food-insecurity">Hunger in Kitsap County</a> page to learn more about the opportunities available.
        </p>

      </div>
    </main >
  )
}

export default Home