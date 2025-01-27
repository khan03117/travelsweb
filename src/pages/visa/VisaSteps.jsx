// import React from 'react'
import StepLayoutOne from './StepLayout/StepLayoutOne'
import step1 from '../../assets/steps/process-1.jpg'
import step2 from '../../assets/steps/process-2.png'
import step3 from '../../assets/steps/process-3.png'
import step4 from '../../assets/steps/process-1.jpg'
const VisaSteps = () => {
    return (
        <>
            <section className="py-[4rem]">
                <div className="container">
                    <div className="grid  *:px-4 grid-cols-12 gap-5">
                        <div className="col-span-12 mb-20">
                            <div className="w-full text-center text-primary">
                                <h2 >
                                    <span className="lg:text-3xl text-xl section_title relative font-bold text-gradient">Visa Steps</span>
                                </h2>
                            </div>
                        </div>
                        <div className="col-span-3">
                            <StepLayoutOne
                                image={step1}
                                index={'01'}
                                title={'Fill Form'}
                                desc={'Collaborate with team & partners. Get your work over the finish line.'}
                            />
                        </div>
                        <div className="col-span-3">
                            <StepLayoutOne
                                image={step2}
                                index={'02'}
                                title={'Documents Verification'}
                                desc={'Any nonimmigrant visa applicant can pay their visa application.'}
                            />
                        </div>
                        <div className="col-span-3">
                            <StepLayoutOne
                                image={step3}
                                index={'03'}
                                title={'Direct Interview'}
                                desc={'Questions are specific questions that directly relate to the positions.'}
                            />
                        </div>
                        <div className="col-span-3">
                            <StepLayoutOne
                                image={step4}
                                index={'04'}
                                title={'Receive Visa'}
                                desc={'Compare visas to visit, work, study or join a family member already'}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default VisaSteps