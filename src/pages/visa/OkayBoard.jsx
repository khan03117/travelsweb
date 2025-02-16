// import React from 'react'
import { useParams } from 'react-router-dom'
import BreadCrumb from '../../components/BreadCrumb'

const OkayBoard = () => {
    const { slug } = useParams();
    let content;
    if (slug == "okay-board") {
        content = `<div class="col-span-12">
        <div class="w-full h-full forexBox oboardbox p-4">
            <h4 className="">
                Okay To Board Services
            </h4>
            <p>Okay To Board Services Asian subcontinent travelers who want to explore UAE countries and visa has been sponsored in UAE or issued, the Visa should be corroborate by specific airline before boarding airline. After Visa verification the airline approves your ticket and marks your flight as OK TO BOARD and then passenger can board the flight and can backpack to the UAE countries (Dubai, Sharjah and Abu Dhabi). On the off chance that a traveler have online or E-visa, otb message best be updated on airline PNR to get rid of any kind of last minute nuisance which may ruin the journey mood.</p><p>&nbsp;After the visa allotment, the duplicate visa should be sent to airline just to confirm that particular visa have OTB updated PNR.</p><p>In the absence of Ok to Board message on PNR, the airline won’t permit the traveler to get onto the flight regardless one has a legitimate UAE visa. “Ok to Board” is a visa authentication process started by airline to forbid general population with fake visa. All aircrafts associated with UAE like Emirates, Indigo, Spice Jet, Air India Express, Air Arabia and so on oblige Ok To Board to be updated.</p>
            
        </div>
    </div>`
    }

    return (
        <>
            <BreadCrumb path={['Home', 'Okay to Board']} title={'Okay to Board'} />
            <section className='py-10'>
                <div className="container">
                    <div className="grid grid-cols-1">
                        <div dangerouslySetInnerHTML={{ __html: content }} />

                    </div>
                </div>
            </section>

        </>
    )
}

export default OkayBoard