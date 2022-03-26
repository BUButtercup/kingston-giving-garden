import React from 'react'
import './style.css'

const Volunteer = () => {
  return (
    <main className='col-9'>
       <div className="row row-col-2 mx-3 main-body">
                        <div className="col-12 px-4 mb-4 d-flex flex-column">
                            <div className="alert alert-danger" role="alert">
                                <h4>COVID-19 UPDATE:</h4> Update info about COVID-19 response here. For more information
                                on COVID-19 restrictions and the response in Washington State, visit the <a
                                    href="https://doh.wa.gov/emergencies/covid-19" className="alert-link">Washington
                                    Department of Health COVID-19 page</a>.
                            </div>
                            <h2 className="mt-1 title">Volunteer Information</h2>
                            <h5 className="sub-title">Come to a Work Party</h5>
                            <p className="col-11 align-self-center">
                                Whether you're only available once in a while, or can come every week, there are many
                                ways to help out as a volunteer! One of the best is to come to a weekend
                                work party. These are held Saturday mornings during the growing season from 10am-12pm
                                (or earlier if it's hot
                                out). Don't worry if you don't have tools or gloves: we have enough for everyone!</p>

                            <p className="col-11 align-self-center">You may also want to be notified when we have a big
                                event coming up. These tend to be large projects that can use as many hands as they can
                                get. Think constructing new garden beds, potato harvesting, etc. If you'd be interested
                                in being notified when we have a big event coming up, see Kathy's contact information
                                below.</p>
                            <p className="col-11 align-self-center">Contact <strong>Kathy Curry</strong> by phone or text @
                                <a href="tel:3608093467" className='contact-link'><strong>360.809.3467</strong></a> or by email @ <a className='contact-link'
                                    href="mailto:giving.garden.kingston@gmail.com"><strong>giving.garden.kingston@gmail.com</strong></a>
                                for more information, check the calendar below for this week's garden work party start time, as
                                well as any special events coming up soon, and see the bottom of the page for <strong><a
                                    href="#driving">driving
                                    instructions</a></strong>. We'd love to see you there!!
                            </p>
                            <iframe
                                src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FLos_Angeles&src=Z2l2aW5nLmdhcmRlbi5raW5nc3RvbkBnbWFpbC5jb20&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%2333B679&color=%230B8043"
                                className="col-12 embeded" width="800" height="600" frameborder="0" scrolling="no"
                                id="cal"></iframe>
                            <a id="hidden-cal"
                                href="https://calendar.google.com/calendar/u/0?cid=Z2l2aW5nLmdhcmRlbi5raW5nc3RvbkBnbWFpbC5jb20"
                                target="_blank">View Our Google Calendar</a>
                        </div>
                        <div className="col-12 px-4 my-4 d-flex flex-column">
                            <div className="d-flex" id="directions">
                                <div className=" col-12 col-md-4">
                                    <h2 className="mt-1 title" id="driving">Driving Instructions</h2>
                                    <p>You'll find us up the road from Wolfle Elementary School off of Highway 104.</p>
                                    <p>Click on the map to the right to be navigated to Google Maps for directions!</p>
                                </div>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2680.3339086425494!2d-122.55674584843176!3d47.79436268287888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549018c6f4a64dbb%3A0x4b4ab020993ae47f!2s7029%20NE%20Crawford%20Dr%2C%20Kingston%2C%20WA%2098346!5e0!3m2!1sen!2sus!4v1647890705825!5m2!1sen!2sus"
                                    className="col-md-8 col-12 embeded" allowfullscreen="" loading="lazy"></iframe>
                            </div>
                        </div>
                    </div>
    </main>
  )
}

export default Volunteer