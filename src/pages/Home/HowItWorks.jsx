// import React from 'react'
import WorkFlow from './WorkFlow'
import icon1 from '../../assets/icon/p1.png'
import icon2 from '../../assets/icon/p2.png'
import icon3 from '../../assets/icon/p3.png'
import icon4 from '../../assets/icon/p4.png'


const HowItWorks = () => {
    return (
        <>
            <section className='py-20 relative'>
                <div className="container">
                    <div className="w-full mb-20 text-center">
                        <h2 className='section_title'>
                            How it works
                        </h2>
                    </div>

                </div>
                <WorkFlow
                    isOdd={true}
                    title={'Search Your Dream Getaway'}
                    icon={icon1}
                    desc='Enter your destination, travel dates, and preferences to find the perfect travel package.'
                />
                <WorkFlow
                    isOdd={false}
                    title={'Explore & Customize'}
                    icon={icon2}
                    desc='Browse our curated packages, compare options, and tailor them to your needs with flexible add-ons.'
                />
                <WorkFlow
                    isOdd={true}
                    title={'Book Your Package'}
                    icon={icon3}
                    desc='Secure your booking with our fast and secure payment options.'
                />
                <WorkFlow
                    isOdd={false}
                    title={'Get Ready to Travel'}
                    icon={icon4}
                    desc='Receive your itinerary, tickets, and travel details instantly. Pack your bags and enjoy your adventure!'
                />

            </section>
        </>
    )
}

export default HowItWorks