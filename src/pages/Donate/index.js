import React from 'react'
import './style.css'
import { Accordion } from 'react-bootstrap'

const Donate = () => {
  return (
    <main className='container-fluid col-9'>
      <div class="row row-col-2 mx-3 main-body pt-5">
        <div class="col-12 px-4 mb-4 d-flex flex-column">
          <h2 class="mt-1 title" id='top'>Donate to Our Project</h2>
          <Accordion flush className='col-12'>
            <Accordion.Item eventKey="0">
              <Accordion.Header className="sub-title acc">Donate Your Time Individually</Accordion.Header>
              <Accordion.Body>
                <p className="col-11 align-self-center">
                  We cannot give enough thanks to our regular weekly volunteer crew. None of this would be
                  possible without them!</p>
                <p className="col-11 align-self-center">Whether you are an occasional volunteer or are looking for a way to regularly give back to the community, come and be a part of
                  our weekly work crew! We have opportunities to help out every weekend during the growing
                  season on Saturdays.</p>
                <p className="col-11 align-self-center">We also have special projects come up, like putting up a hoop
                  house, building raised beds, or prepping a new growing area. These are times when we can
                  use all hands on deck!</p>
                <p className="col-11 align-self-center">For more information on volunteering, visit our <a
                  href="volunteer">Volunteer Information</a> page.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header className="sub-title acc">Donate Your Time as a Group</Accordion.Header>
              <Accordion.Body>
                <p className="col-11 align-self-center">We have enjoyed the help of many different professional groups and organizations throughout our 11 year history. Groups large and small have donated their time and done some truely amazing work!</p>
                <p className="col-11 align-self-center">If your group would like to come help us make a difference in the community, please contact <strong>Kathy Curry</strong> by phone or text at <strong><a className='contact-link' href="tel:3608093467">360.809.3467</a></strong>, or email at <strong><a className='contact-link' href="mailto:giving.garden.kingston@gmail.com">giving.garden.kingston@gmail.com</a></strong> for more information and to schedule a time.</p>
                <p className="col-11 align-self-center">See the amazing work of some of our past visiting groups in the <a href="gallery">photo gallery</a> or on our <a href="donors">Historical Donors</a> page!</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header className="sub-title acc">Donate Supplies</Accordion.Header>
              <Accordion.Body>
                <p className="col-11 align-self-center">Do you have a spare shovel, hoe, or set of pots lying around? Do your farm animals produce more manure than you can handle? Do you run a local restaurant that makes coffee? Do you have a farm or garden business, and are looking for a good cause to support?</p>

                <p className="col-11 align-self-center">If you find yourself in any of the above situations, we would love your help! Due to the nature of farming, our garden also has a recurring need of several supply items, and we're always looking for donations to help us meet our needs. Listed here is the short list of items that we need most on a regular basis:</p>
                <ul className="align-self-center">
                  <li>
                    Vegetable, herb, and beneficial / edible flower seeds
                  </li>
                  <li>
                    4" black plastic pots
                  </li>
                  <li>
                    Potting soil
                  </li>
                  <li>
                    Compostable farmyard manure & coffee grounds
                  </li>
                  <li>
                    Ask! If you've got an extra thingamajig, we might be able to give it a good home!
                  </li>
                </ul>

                <p className="col-11 align-self-center">If you or your business is able to donate supplies to our effort, please contact <strong>Kathy Curry</strong> by phone or text at <strong><a className='contact-link' href="tel:3608093467">360.809.3467</a></strong>, or email at <strong><a className='contact-link' href="mailto:giving.garden.kingston@gmail.com">giving.garden.kingston@gmail.com</a></strong> for more information.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header className="sub-title acc">Donate Financially</Accordion.Header>
              <Accordion.Body>
                <p className="col-11 align-self-center">If none of the above options seems doable, but you'd still like to help, please consider donating any amount that you can to the garden. It will be used to purchase supplies that will go towards our effort to provide fresh, organic produce to the <a href="https://www.sharenetfoodbank.org/" target="_blank">Sharenet Foodbank</a> here in Kingston.</p>
                <p className="col-11 align-self-center">Please contact <strong>Kathy Curry</strong> by phone or text at <strong><a className='contact-link' href="tel:3608093467">360.809.3467</a></strong>, or email at <strong><a className='contact-link' href="mailto:giving.garden.kingston@gmail.com">giving.garden.kingston@gmail.com</a></strong> for more information on how you can give financially.</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </main>
  )
}

export default Donate