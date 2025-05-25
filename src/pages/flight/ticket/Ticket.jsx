import axios from 'axios';
import React from 'react'

import { useParams } from "react-router-dom"
import { JS_API_URL } from '../../../utils';
import moment from 'moment';
import html2pdf from 'html2pdf.js';

const Ticket = () => {
    const { order_id } = useParams();
    const [details, setDetails] = React.useState(false);
    const printPDF = () => {
        const element = document.getElementById('bill-content');

        const opt = {
            margin: [0.5, 0.5], // top, left (in inches)
            filename: 'invoice.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
            pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
        };

        html2pdf().set(opt).from(element).save();
    };
    const getdetails = async () => {
        try {
            const resp = await axios.get(JS_API_URL + "booking", {
                params: {
                    order_id: order_id
                }
            });
            setDetails(resp.data.data[0]);
        } catch (err) {
            console.log(err);
        }
    }
    function getLayoverTime(totalMinutes) {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${hours}h ${minutes}m`;
    }

    React.useEffect(() => {
        getdetails();
    }, []);
    return (
        <>
            {
                details && (
                    <>
                        <section className='ticketborder text-end mb-5 p-4'>
                            <button onClick={printPDF} className="bg-blue-600 text-white p-2 text-xs inline-block mb-5 mt-4">Download as PDF</button>
                        </section>

                        <section className="space ticket ticketborder">
                            <div className="w-full " id="bill-content">


                                <table className="table *:text-xs">

                                    <thead>
                                        <tr className="">
                                            <th className="first w-1/2 *:font-semibold">

                                            </th>
                                            <th className="text-start">
                                                <div className="w-full">

                                                    <p className=' font-bold'>Aahil Tours and Travels (AT&T) Private Limited</p>
                                                    <div className="w-full font-light">
                                                        <p>Email: admin@codskora.com</p>

                                                        <p>Phone: 8368801557</p>

                                                        <p>Address: SF1, Reliable Arcade, Jaipuria Enclave, Kaushambi, Ghaziabad - 201012, UP Muradnagar Uttar Pradesh India 201012</p>
                                                    </div>
                                                </div>
                                            </th>

                                        </tr>
                                        <tr>
                                            <td className='w-1/2'>
                                                <div className="w-full *:py-1  text-start">
                                                    <p>
                                                        <span >
                                                            Booking Time :
                                                        </span>
                                                        <span className='mx-3'>
                                                            {moment(details.booking_details.order.createdOn).format('DD-MM-YYYY hh:mm A')}
                                                        </span>
                                                    </p>
                                                    <p>
                                                        <span>
                                                            Booking ID :
                                                        </span>
                                                        <span className='mx-3'>
                                                            {details.booking_details.order.bookingId}
                                                        </span>
                                                    </p>
                                                    <p>
                                                        <span>
                                                            Booking Status :
                                                        </span>
                                                        <span className='mx-3 font-bold'>
                                                            {details.booking_details.order.status}
                                                        </span>
                                                    </p>
                                                </div>
                                            </td>
                                            <td className='w-1/2'>
                                                <div className="w-full">

                                                </div>
                                            </td>
                                        </tr>
                                    </thead>



                                </table>
                                <table className="table my-3">
                                    <tbody>
                                        {
                                            details.booking_details.itemInfos.AIR.tripInfos[0].sI.map(tinfo => (
                                                <>
                                                    <tr className='*:text-xs *:p-2 *:border *:border-blue-gray-300'>
                                                        <td>
                                                            <p> {tinfo.fD.aI.code}-{tinfo.fD.fN}</p>
                                                            <p> {tinfo.fD.aI.name}</p>
                                                            {
                                                                tinfo.oB && (
                                                                    <>
                                                                        <p>
                                                                            <span>Operator </span> {tinfo.oB?.name}
                                                                        </p>
                                                                    </>
                                                                )
                                                            }
                                                        </td>
                                                        <td>
                                                            <div className="">
                                                                <p className='font-semibold'>{moment(tinfo.dt).format("ddd, DD MMM'YY, hh:mm A")}</p>
                                                                <p>{tinfo.da.city} {tinfo.da.terminal}</p>
                                                                <p>{tinfo.da.name} </p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="">
                                                                <p className='font-semibold'>{moment(tinfo.at).format("ddd, DD MMM'YY, hh:mm A")}</p>
                                                                <p>{tinfo.aa.city} {tinfo.aa.terminal}</p>
                                                                <p>{tinfo.aa.name} </p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="w">
                                                                <p className="text-xs">
                                                                    {getLayoverTime(tinfo.duration)}
                                                                </p>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    {
                                                        tinfo.cT > 0 && (
                                                            <>
                                                                <tr className='*:text-xs *:border *:border-blue-gray-300'>
                                                                    <td colSpan={4} className='py-1 bg-gray-300'>
                                                                        <div className="w-full pb-3 text-center text-xs bg-gray-300">
                                                                            <p className="">
                                                                                <span className=''>
                                                                                    Layover Time -
                                                                                </span>
                                                                                <span className='mx-3'>
                                                                                    {getLayoverTime(tinfo.cT)}
                                                                                </span>
                                                                            </p>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </>
                                                        )
                                                    }

                                                </>
                                            ))
                                        }

                                    </tbody>
                                </table>
                                <div className="w-100 maindiv my-5">
                                    <p>Passenger Details</p>
                                </div>
                                <table>
                                    <thead>
                                        <tr className='*:text-start *:font-semibold *:text-xs *:p-2 *:border *:border-blue-gray-200'>
                                            
                                            <th>Passenger </th>
                                            <th>Ticket & PNR</th>
                                            
                                            <th>Baggage</th>
                                            <th>Cabin Class</th>
                                            <th>Is Refundable</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            details.booking_details.itemInfos.AIR.travellerInfos.map((trv) => (
                                                <>
                                                    <tr className='*:text-start *:font-light *:text-xs *:p-2 *:border *:border-blue-gray-200'>
                                                       
                                                        <td>
                                                            <p>Category : {trv.pt}</p>
                                                            <p>  {trv.ti + " " + trv.fN + " " + trv.lN} </p>
                                                            {
                                                                trv?.pNum && (
                                                                    <>
                                                                        <p>Passport : {trv.pNum}</p>
                                                                    </>
                                                                )
                                                            }
                                                        </td>

                                                        <td>
                                                            {
                                                                Object.entries(trv.pnrDetails).map(([column, value], index) => (
                                                                    <>
                                                                        <p key={column}>
                                                                            {Object.entries(trv.ticketNumberDetails)[index][1]}                                                                           
                                                                            <span className='mx-3'>{value}</span>
                                                                        </p>
                                                                    </>
                                                                ))
                                                            }
                                                        </td>
                                                        {/* <td>
                                                            {
                                                                Object.entries(trv.ticketNumberDetails).map(([column, value]) => (
                                                                    <>
                                                                        <p>
                                                                            <span>{column}</span>
                                                                            <span className='mx-3'>{value}</span>
                                                                        </p>
                                                                    </>
                                                                ))
                                                            }
                                                        </td> */}
                                                        <td>
                                                            {trv.fd.bI.cB}
                                                        </td>
                                                        <td>
                                                            {trv.fd.cc}
                                                        </td>
                                                        <td>
                                                            {trv.fd.rT == "1" ? "Refundable" : "Non Refundable"}
                                                        </td>

                                                    </tr>
                                                </>
                                            ))
                                        }
                                    </tbody>
                                </table>
                                <table className="table my-3 *:text-xs">
                                    <tr>
                                        <td>
                                            <h3 className='font-bold'>Important Information</h3>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>
                                                Check in online 24 hours before departure, select seats, add baggage if needed, and print or
                                                save
                                                your boarding pass
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>
                                                Arrive 2 hours early for domestic flights and 4 hours for international to ensure smooth
                                                check-in,
                                                security, and boarding.
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>
                                                Date & Time is calculated based on the local time of the city/destination

                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>
                                                You must carry a valid government ID for all the travellers at the time of check-in. For infant
                                                travellers, it is mandatory to carry the date of birth certificate.
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>
                                                Your ability to travel is at the sole discretion of the airport authorities and shall not be
                                                held responsible.
                                            </p>
                                        </td>
                                    </tr>
                                </table>



                                <table className="table my-3 *:text-xs">
                                    <tr>
                                        <td>If you have not cancelled your ticket and you fail to report in time for check-in, you will be
                                            treated as &apos;No Show&apos; by the airline.</td>
                                    </tr>
                                    <tr>
                                        <td>In case your flight is cancelled or rescheduled by the airline or you miss your flight, you will
                                            have to cancel with us to hget your refund
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Any refund claims arising due to cancellation or delay of flight by the airline or modification
                                            by
                                            you shall be subject to us receiving the amount refunded by the airline. In the event that
                                            airline
                                            does not refund the amount, we shall not be held liable for the same.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Please note that multiple flight sectors booked under one PNR can only be cancelled or modified
                                            together</td>
                                    </tr>
                                </table>

                                <div className="div">

                                    <table className="table my-3 *:text-xs">
                                        <thead>
                                            <tr>
                                                <th colSpan="2">
                                                    <h3 className='p-3 bg-gray-300 text-black'>
                                                        Payment Summary
                                                    </h3>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className='*:p-2 *:border *:border-blue-gray-300'>
                                                <td>
                                                    <p>Base fare</p>
                                                    <p>Taxes & fees</p>

                                                    <p>Order Total</p>
                                                </td>
                                                <td className="main">

                                                    <p>₹  {
                                                        details.booking_details.itemInfos.AIR.totalPriceInfo.totalFareDetail.fC.BF
                                                    }</p>
                                                    <p>₹  {
                                                        details.booking_details.itemInfos.AIR.totalPriceInfo.totalFareDetail.fC.TAF
                                                    }</p>
                                                    <p>₹  {
                                                        details.booking_details.itemInfos.AIR.totalPriceInfo.totalFareDetail.fC.NF
                                                    }</p>

                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </section>
                    </>
                )
            }
        </>
    )
}

export default Ticket