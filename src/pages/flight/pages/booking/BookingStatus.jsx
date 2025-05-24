import React from 'react'

import { useParams } from "react-router-dom"
import { JS_BASE_URL, CONFIRM_BOOK, postData } from "../../Utils";
import axios from 'axios';
import BookingBox from './BookingBox';

const BookingStatus = () => {
    const { booking_id } = useParams();
    const [mbook, setMbook] = React.useState(false);
    const [isVerified, setVerified] = React.useState(false);
    const [order, setOrder] = React.useState(false);
    const getorder = async () => {
        setOrder('ok');
       
    }
    const handlePaymentVerification = async () => {
        await postData('payment/handleJuspayResponse', { order_id: booking_id });
        setVerified(true);
    }
    const getbooking = async () => {
        if (isVerified) {
            const resp = await axios.get(JS_BASE_URL + 'api/v1/booking?bookingId=' + booking_id);
            setMbook(resp.data.data[0]);
        }

    }
    React.useEffect(() => {
        handlePaymentVerification();
        getorder();
    }, []);
    React.useEffect(() => {
        getbooking();
    }, [isVerified]);
    const confirmBooking = async () => {
        if (mbook.payment_status == "CHARGED") {
            const bookdata = {
                bookingId: booking_id,
                paymentInfos: [{
                    amount: mbook?.paymentInfos[0].amount
                }],
                "travellerInfo": [Object.fromEntries(
                    Object.entries(mbook.travellerInfo[0]).filter(([key]) => key !== "_id")
                )],
                gstInfo: Object.fromEntries(
                    Object.entries(mbook.gstInfo).filter(([key]) => key !== "_id")
                ),
                deliveryInfo: Object.fromEntries(
                    Object.entries(mbook?.deliveryInfo).filter(([key]) => key !== "_id")
                )
            }
            const resp = await axios.post(CONFIRM_BOOK, bookdata, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            console.log(resp);
        }
    }
    React.useEffect(() => {
        confirmBooking()
    }, [mbook])

    return (
        <>
            <section className='py-10'>
                <div className="container">
                    <div className="grid grid-cols-12 gap-5">
                        <div className="col-span-1"></div>
                        <div className="col-span-10">
                            <div className="w-full p-5 rounded-lg">
                                {
                                    order && (
                                        <>
                                            <BookingBox booking={order} />
                                        </>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BookingStatus