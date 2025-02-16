// import React from 'react'
import ContactForm from '../Home/ContactForm'

const ApplyNow = () => {
    return (
        <>
            <section className='py-10'>
                <div className="container">
                    <div className="grid grid-cols-12">
                        <div className="col-span-2"></div>
                        <div className="lg:col-span-8 col-span-12">
                            <div className="w-full forexBox">
                                <ContactForm />
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ApplyNow