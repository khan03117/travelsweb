import React from 'react'
import { ArrowRightOutlined, CloseOutlined } from '@ant-design/icons';
import { CiAlarmOn } from "react-icons/ci";
import PropTypes from 'prop-types';
import moment from 'moment';
import FareRuleReview from './FareRuleReview';
import FlightInfo from '../SearchFlightResult/FlightInfo';

const FlightDetailsReview = ({ flights, totalPriceList }) => {
    const [fareId, setFareId] = React.useState('')
    return (
        <>
            <div className="w-full">
                {flights.map((flight, index) => {
                    const { fD, da, aa, dt, at, duration } = flight;
                    return (
                        <div key={index} className="w-full border border-blue-gray-300 *:text-sm mb-4">
                            <div className="p-1 bg-gray-300 text-gray-800 mb-2">
                                <span className="lg:text-sm text-xs font-bold">
                                    {da.city} <ArrowRightOutlined /> {aa.city} on {moment(dt).format('DD-MMM-YYYY hh:mm')}
                                </span>
                            </div>
                            <div className="grid grid-cols-7 gap-2 px-3">
                                <div className="col-span-2 *:lg:text-sm *:text-xs">
                                    <FlightInfo name={fD.aI.name} code={fD.aI.code} fN={fD.fN} />
                                </div>
                                <div className="col-span-2">
                                    <div className="w-full">
                                        <p className='font-bold lg:text-lg text-sm'>{dt.split('T')[1]}</p>
                                        <p className='lg:text-sm text-xs text-black font-light'>{da.city}</p>
                                        <p className='lg:text-sm text-xs text-black font-light'>{new Date(dt).toLocaleDateString()}</p>
                                        <p className='lg:text-sm text-xs text-black font-light'> {da.terminal}</p>
                                    </div>
                                </div>
                                <div className="col-span-1">
                                    <div className="w-full text-center">
                                        <span className='lg:text-3xl text-lg'>
                                            <CiAlarmOn className='mx-auto' />
                                        </span>
                                        <span className="lg:text-sm text-xs text-black  font-light">{Math.floor(duration / 60)}h {duration % 60}m</span>
                                    </div>
                                </div>
                                <div className="col-span-2">
                                    <div className="w-full text-end">
                                        <p className='font-bold lg:text-lg text-sm'>{at.split('T')[1]}</p>
                                        <p className='lg:text-sm text-xs text-black font-light'>{aa.city}</p>
                                        <p className='lg:text-sm text-xs text-black font-light'>{new Date(at).toLocaleDateString()}</p>
                                        <p className='lg:text-sm text-xs text-black font-light'> {aa.terminal}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full px-2">
                                {
                                    totalPriceList.map(ob => (
                                        <>
                                            <div className="w-full">
                                              
                                                <div className="flex items-center w-full gap-4 mb-2">
                                                    <span className="bg-yellow-100 text-xs p-1 rounded-sm text-yellow-900">{ob.fareIdentifier}</span>
                                                   
                                                    <button className={`block p-1 rounded-sm ${ob.id == fareId ? 'bg-primary text-white' : 'bg-gray-200 text-black'}  text-xs`} onClick={() => setFareId((prev) => (prev != ob.id ? ob.id : 0))}>Fare Rule</button>
                                                </div>

                                                {
                                                    fareId == ob.id && (
                                                        <>
                                                            <div className="w-full relative">
                                                                <button onClick={() => setFareId('0')} className='absolute size-8 rounded-full bg-gray-300 top-1 end-2'>
                                                                    <CloseOutlined />
                                                                </button>
                                                                <FareRuleReview fareRules={ob.fareRuleInformation} />
                                                            </div>


                                                        </>
                                                    )
                                                }
                                            </div>
                                        </>
                                    ))
                                }

                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    )
}
FlightDetailsReview.propTypes = {

    flights: PropTypes.array,
    totalPriceList: PropTypes.array,
}


export default FlightDetailsReview