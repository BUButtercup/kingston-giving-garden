import React from 'react'
import './style.css'
import PicFrame from '../../components/PicFrame'
import Compost from '../../assets/images/gallery/manure.jpeg'
import ORVol1 from '../../assets/images/gallery/teen-vol-OR.jpeg'
import ORVol2 from '../../assets/images/gallery/teen-vol-OR2.jpeg'
import ORVol3 from '../../assets/images/gallery/teen-vol-OR3.jpeg'
import BBQ22 from '../../assets/images/gallery/end-of-year-BBQ.jpeg'
import ORVol4 from '../../assets/images/gallery/teen-vol-OR4.jpeg'
import Artichokes from '../../assets/images/gallery/art-flow.jpeg'
import MedTunnel from '../../assets/images/gallery/med-tunnel1.jpg'

const Gallery = () => {

    const galleryPics = [
        {
            id: 1,
            path: Compost,
            description: 'Volunteers both donated the compost, transported it, and helped unload. Fresh compost for the high tunnel!'
        },
        {
            id: 2,
            path: ORVol1,
            description: 'Youth groups came to help with garden bed creation and maintenance.'
        },
        {
            id: 3,
            path: ORVol2,
            description: 'Layered newspaper, cardboard, and landscaping cloth help control weeds in the high tunnel. Here, a youth volunteer makes a hole through the fabric to plant a seedling.'
        },
        {
            id: 4,
            path: ORVol3,
            description: 'We love to celebrate volunteer groups with a barbecue when they come!'
        },
        {
            id: 5,
            path: ORVol4,
            description: 'Thank you to the Grace Point Fellowship (Medford, Oregon) and Trail Christian Fellowship (Eagle Point, Oregon) youth groups came to help in March, 2022!! '
        },
        {
            id: 6,
            path: BBQ22,
            description: 'At the end of the growing season, we celebrate all our volunteers with a bonfire party.'
        },
        {
            id: 7,
            path: Artichokes,
            description: 'Artichoke flowers are beautiful, and a favorite of pollinators.'
        },
        {
            id: 8,
            path: MedTunnel,
            description: 'New medium-sized hoop houses help protect fragile seedlings from unseasonably cold temperatures.'
        }
    ]

    return (
        <main className='container-fluid col-9 mt-4 d-flex flex-column'>
            <h1 className='title'>Photo Gallery</h1>
            <div className='col-12 d-flex flex-wrap'>
                {galleryPics.map(pic => {
                    return <PicFrame id={pic.id} image={pic.path} description={pic.description}/>
                })}
            </div>
        </main>
    )
}

export default Gallery