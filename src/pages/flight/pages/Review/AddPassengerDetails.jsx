import React from 'react'

import { ArrowRightOutlined } from "@ant-design/icons"
import { useLocation } from "react-router-dom"
import ServiceSelection from "../passengerDetails/ServiceSelection";
import AddDetails from "../passengerDetails/AddDetails";
import DeliveryInfo from '../passengerDetails/DeliveryInfo';
import GstDetails from '../passengerDetails/GstDetails';
// import { JS_API_URL, BOOK, postData, SEAT } from '../../Utils';
import axios from 'axios';
import ReviewLoading from './ReviewLoading';
import SeatMap from './SeatMap';
import moment from 'moment';
import { Checkbox, Dialog, DialogBody } from '@material-tailwind/react';
import { JS_API_URL, BOOK, SEAT } from '../../../../utils';
// import { useUser } from '../../../Account/UserContext';

const AddPassengerDetails = () => {
    const { state } = useLocation();
    const { reviews, markup } = state;




    // const { user } = useUser();




    const { tripInfos, totalPriceInfo, searchQuery, bookingId } = reviews;
    const { totalFareDetail } = totalPriceInfo;
    const [pinfo, setPinfo] = React.useState([]);
    const [smeals, setSmeals] = React.useState([]);
    const [deliveryInfo, setDeliveryInfo] = React.useState({ emails: [], contacts: [] });
    const [gstDetails, setGstDetails] = React.useState({});
    const [errors, setErrors] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const search_id = localStorage.getItem('search_id');
    const [seats, setSeats] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const [ssrSeatInfos, setssrSeatInfos] = React.useState([]);
    const [pcode, setPcode] = React.useState('');
    const [papply, setPapply] = React.useState(false);
    const applypromocdode = async () => {
        try {
            const data = {
                search_id: search_id,
                code: pcode
            }
            const resp = await axios.post(JS_API_URL + "apply-promocode", data);
            if (resp.data.success == 1) {
                const promocode = resp.data.data.promo_code;
                let discountAmount = 0;
                let sumAmount = totalFareDetail.fC.TF + getSeatAmount() + getMealAmount() + getBaggageAmount() + markupcom;
                if (promocode) {
                    const discountType = promocode.discount_type;
                    const discountValue = Number(promocode.discount);
                    if (discountType === "Percent") {
                        discountAmount = (sumAmount * discountValue) / 100;
                    } else if (discountType === "Flat") {
                        discountAmount = discountValue;
                    }
                }
                setPapply(discountAmount)
            }


        } catch (err) {
            console.log(err);
        }
    }
    const getSeatAmount = () => {
        const totalAmount = ssrSeatInfos.reduce((sum, seatInfo) => {
            return sum + seatInfo.amount;
        }, 0);
        return totalAmount;
    };
    const getMealAmount = () => {
        const meals = smeals.filter(item => item.service === "MEAL");
        const totalMealAmount = meals.reduce((sum, meal) => sum + (meal.amount || 0), 0);
        return totalMealAmount;
    };

    const getBaggageAmount = () => {
        const baggage = smeals.filter(item => item.service === "BAGGAGE");
        const totalBaggageAmount = baggage.reduce((sum, bag) => sum + (bag.amount || 0), 0);
        return totalBaggageAmount;
    };

    const selectSeat = async () => {
        setOpen(true);
    }

    const getseats = async () => {
        const resp = await axios.post(JS_API_URL + SEAT, { bookingId: bookingId });
        setSeats(resp.data.data);
    }
    const handlePinfo = (obj) => {
        setPinfo([...pinfo, obj]);
    }
    const [gstOpen, setGstOpen] = React.useState(false);
    const handleGstOpen = () => {
        setGstOpen((prev) => {
            if (prev) {
                setGstDetails({});
            }
            return !prev;
        });

    }
    const validation_gst = () => {
        const err = [];
        if (!gstDetails?.registeredName) {
            err.push({ msg: "registeredName is required", path: "registeredName" });
        }
        if (!gstDetails?.gstNumber) {
            err.push({ msg: "gstNumber is required", path: "gstNumber" });
        }
        if (!gstDetails?.email) {
            err.push({ msg: "email is required", path: "email" });
        }
        if (!gstDetails?.mobile) {
            err.push({ msg: "mobile is required", path: "mobile" });
        }
        if (!gstDetails?.address) {
            err.push({ msg: "address is required", path: "address" });
        }
        if (err.length > 0) {
            setErrors(err);
            return false;
        } else {
            return true;
        }
    }
    const totalPax = searchQuery.paxInfo;
    const totalcount = Object.values(totalPax).reduce((total, count) => total + count, 0);
    const markupcom = parseInt(markup) * totalcount;
    const conditions = reviews.conditions;
    const totalarray = Object.entries(totalPax).flatMap(([type, count]) =>
        Array(count).fill(type)
    );
    const validation = () => {
        const err = [];
        if (totalarray.length != pinfo.length) {
            err.push({ 'msg': 'Passenger info is not correct', 'path': "pinfo" });
        }
        if (!deliveryInfo?.emails.length) {
            err.push({ 'msg': 'Email is not correct', 'path': "deliveryInfo" });
        }
        if (!deliveryInfo?.contacts.length) {
            err.push({ 'msg': 'contacts is not correct', 'path': "deliveryInfo" });
        }
        if (err.length > 0) {
            setErrors(err);
            return false;
        } else {
            return true;
        }
    }

    const validateDeliveryInfo = (info) => {
        const errorList = [];
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]{10}$/;

        if (!Array.isArray(info.emails) || info.emails.length === 0) {
            errorList.push({ path: "deliver_email", "msg": "At least one contact number is required." });
        } else {
            info.emails.forEach((email) => {
                if (!emailRegex.test(email)) {
                    errorList.push({ path: "deliver_email", "msg": `Invalid email: ${email}` });
                }
            });
        }

        if (!Array.isArray(info.contacts) || info.contacts.length === 0) {
            errorList.push({ path: "deliver_email", "msg": "At least one contact number is required." });
        } else {
            info.contacts.forEach((contact) => {
                if (!phoneRegex.test(contact)) {
                    errorList.push({ path: "deliver_mobile", "msg": `Invalid contact number: ${contact}` });
                }
            });
        }
        if (errorList.length > 0) {
            setErrors(errorList);
            return false;
        } else {
            return true;
        }

    };
    const checkoutBooking = async () => {
        if (gstOpen && !validation_gst()) {
            return false;
        }
        if (!validation()) {
            return false;
        }
        if (!validateDeliveryInfo(deliveryInfo)) {
            return false;
        }
        setLoading(true);
        const meals = smeals.filter(item => item.service === "MEAL");
        const baggage = smeals.filter(item => item.service === "BAGGAGE");
        // await axios.put(JS_API_URL + "search-query/update/" + search_id, { seat: ssrSeatInfos, meal: meals, baggage: baggage });

        const p_info = pinfo.map((pinf, index) => {
            const matchedSeats = ssrSeatInfos
                .filter(obj => obj.pactive === index)
                .map(obj => ({ key: obj.key, code: obj.code }));
            const passengerMeals = meals
                .filter(item => item.index === String(index) && item.type === pinf.pt)
                .map(({ key, code }) => ({ key, code }));
            const passengerBaggage = baggage
                .filter(item => item.index === String(index) && item.type === pinf.pt)
                .map(({ key, code }) => ({ key, code }));
            return {
                ...pinf,
                ...(smeals[index] && { ssrMealInfos: [smeals[index]] }),
                ...(matchedSeats.length > 0 && { ssrSeatInfos: matchedSeats }),
                ...(passengerMeals.length > 0 && { ssrMealInfos: passengerMeals }),
                ...(passengerBaggage.length > 0 && { ssrBaggageInfos: passengerBaggage }),
            };
        });
        const totalamounttopay = totalFareDetail.fC.TF + getSeatAmount() + getMealAmount() + getBaggageAmount();
        const bookdata1 = {
            bookingId: bookingId,
            paymentInfos: [{
                amount: totalamounttopay
            }],
            "travellerInfo": [...p_info],
            gstInfo: gstDetails,
            deliveryInfo: deliveryInfo
        }
        const alldata = {
            bookdata: bookdata1,
            gstInfo: gstDetails,
            deliveryInfo: deliveryInfo,
            travellerInfo: [...p_info],
            seat: ssrSeatInfos ?? [],
            meal: meals ?? [],
            baggage: baggage ?? [],
            search_id: search_id,
            amount: totalamounttopay,
        }
        const resp = await axios.post(JS_API_URL + BOOK, alldata);
        setLoading(false);
        const link = resp.data.data.payment_gateway_request.payment_links.web;

        if (resp.data.success == "1") {
            window.location.href = link;
        } else {
            const erro = {
                "path": "msg",
                "msg": resp.data.message
            }
            setErrors(erro);
        }

    }
    const handleSsrSeat = (key, code, amount, pactive) => {
        const arr = [...ssrSeatInfos];
        const index = arr.findIndex(item => item.key === key && item.pactive === pactive);
        let updatedArr;
        if (index !== -1) {
            updatedArr = arr.map(item =>
                item.key === key && item.pactive === pactive
                    ? { ...item, code, amount }
                    : item
            );
        } else {
            updatedArr = [...arr, { key, code, amount, pactive }];
        }
        setssrSeatInfos(updatedArr);
    };




    React.useEffect(() => {
        getseats();
    }, []);

    return (
        <>
            {
                loading ? (
                    <>
                        <ReviewLoading />
                    </>
                ) : (
                    <>
                        <Dialog size='xs' open={open} handler={() => setOpen(false)}>
                            <DialogBody>
                                <div className="w-full overflow-y-auto max-h-[500px]">
                                    {
                                        (seats.tripSeatMap && pinfo) && (
                                            <>
                                                <SeatMap pinfo={pinfo} onClick={handleSsrSeat} selected={ssrSeatInfos} seatData={seats.tripSeatMap} />
                                            </>
                                        )
                                    }
                                </div>
                            </DialogBody>
                        </Dialog>


                        <section className="py-5 bg-gray-50">
                            <div className="container mx-auto">
                                <div className="grid grid-cols-12 gap-4">
                                    <div className="lg:col-span-9 col-span-12">
                                        <div className="w-full border-r-2 border-gray-400 p-2">
                                            <h1 className="lg:text-xl text-sm font-bold">Passenger Details</h1>
                                            <div className="w-full bg-white border border-gray p-2  rounded-md">
                                                {
                                                    [...totalarray].map((a, index) => (
                                                        <>
                                                            {
                                                                pinfo.length >= index && (
                                                                    <>
                                                                        {
                                                                            pinfo.length > index ? (<>
                                                                                <p className="text-black text-md border-b border-gray-400">{a} {index + 1} : </p>
                                                                                {
                                                                                    Object.entries(pinfo[index]).map(([k, v]) => (
                                                                                        <>
                                                                                            <span key={k} className='me-2 text-sm'>
                                                                                                {v}
                                                                                            </span>
                                                                                        </>
                                                                                    ))
                                                                                }
                                                                            </>) : (<>
                                                                                <div className="w-full bg-gray-100 py-2 px-2 border-2 border-gray-200 mb-4">
                                                                                    <p className="text-black text-md border-b border-gray-400">{a} {index + 1} : </p>
                                                                                    <div className="w-full bg-white py-3  px-2">
                                                                                        <AddDetails errors={errors} conditions={conditions} id={index} show={index == pinfo.length ? true : false} onsubmit={handlePinfo} type={a} />
                                                                                    </div>
                                                                                </div>
                                                                            </>)
                                                                        }
                                                                    </>
                                                                )
                                                            }

                                                        </>
                                                    ))
                                                }
                                                <div className="w-full bg-gray-100 py-2 px-2 border-2 border-gray-200 mb-4">
                                                    <p className="text-black lg:text-md text-xs border-b border-gray-400">Contact Details</p>
                                                    <DeliveryInfo errors={errors} setDeliveryInfo={setDeliveryInfo} />
                                                </div>
                                                <div className="w-full bg-gray-100 py-2 px-2 border-2 border-gray-200 mb-4">
                                                    <div className="text-black lg:text-md text-xs border-b border-gray-400 ">
                                                        <Checkbox color='blue' onClick={handleGstOpen} className='text-sm font-bold' label={<span className='font-bold'>GST Number for Bussiness Travel</span>} />
                                                    </div>
                                                    {
                                                        gstOpen && (
                                                            <>
                                                                <div className="w-full bg-white py-3 lg:px-3 px-2">
                                                                    <p className="text-gray-400 lg:text-sm text-xs font-light">to claim credit of GST charged by airlines. please enter your company GST number</p>
                                                                    <GstDetails errors={errors} setGstDetails={setGstDetails} />
                                                                </div>
                                                            </>
                                                        )
                                                    }



                                                </div>
                                                {
                                                    (totalarray.length == pinfo.length) && (
                                                        <>
                                                            <ServiceSelection pinfo={pinfo} mealsave={setSmeals} routeInfos={reviews.searchQuery.routeInfos} paxInfo={reviews.searchQuery.paxInfo} tripInfos={reviews.tripInfos} />
                                                            <div className="w-full bg-gray-100 py-2 px-2 border-2 border-gray-200 mb-4">
                                                                <p className="text-black lg:text-md text-xs border-b border-gray-400">Select Seats (optional)</p>
                                                                {
                                                                    conditions.isa ? (
                                                                        <>
                                                                            <div className="flex items-center justify-between gap-4 my-3">
                                                                                {tripInfos.map((trip) => (
                                                                                    trip.sI.map((segment) => (
                                                                                        <>
                                                                                            <button className={`text-black  p-2  rounded  text-start lg:text-sm text-xs`}>
                                                                                                <p>
                                                                                                    {segment?.da.city} <ArrowRightOutlined /> {segment?.aa.city}
                                                                                                </p>
                                                                                                <p className="lg:text-sm text-xs text-gray-400">on {moment(segment.at).format('MMM DD,  YYYY')} </p>
                                                                                            </button>
                                                                                        </>
                                                                                    ))
                                                                                ))}
                                                                                <button onClick={selectSeat} className='bg-blue-500 text-white px-4 py-2 lg:text-md text-xs rounded'>Select Seat</button>
                                                                            </div>
                                                                            {
                                                                                ssrSeatInfos.length > 0 && (
                                                                                    <>
                                                                                        <div className="w-full my-2">
                                                                                            {
                                                                                                ssrSeatInfos.map(itm => (
                                                                                                    <>
                                                                                                        <span className='px-4 py-2 lg:text-sm text-xs border border-gray-400 rounded bg-white'>{itm.code} | {itm.amount}</span>
                                                                                                    </>
                                                                                                ))
                                                                                            }
                                                                                        </div>
                                                                                    </>
                                                                                )
                                                                            }

                                                                        </>
                                                                    ) : (
                                                                        <>
                                                                            <p className='text-yellow-900 text-sm py-2'>No seat map Available</p>
                                                                        </>
                                                                    )
                                                                }
                                                            </div>
                                                        </>
                                                    )
                                                }



                                            </div>
                                        </div>
                                    </div>
                                    <div className="lg:col-span-3 col-span-12">
                                        <div className="w-full ">
                                            <div className="w-full mb-4">
                                                {
                                                    errors.length > 0 ? (
                                                        errors.map((error, index) => (
                                                            <div key={index} className="w-full bg-red-100 py-2 px-
                                                2 border-2 border-red-400 mb-4">
                                                                <p className="text-red-600 text-sm">{error.msg}</p>
                                                            </div>
                                                        ))
                                                    ) : (
                                                        <></>
                                                    )
                                                }
                                            </div>
                                            <div className='lg:py-2 py-1 lg:px-0 px-4'>



                                                <p className="text-gray-400 text-md  ">Fare Summary</p>
                                                <table className="w-full table mb-5">
                                                    <tbody className="*:text-sm">
                                                        <tr className="border-b-2 border-gray-200">
                                                            <td className="py-3">Base fare</td>
                                                            <td className="text-end py-3">&#8377; {totalFareDetail.fC.BF + markupcom}</td>
                                                        </tr>
                                                        <tr className="border-b-2 border-gray-200">
                                                            <td className="py-3">Taxes and fees</td>
                                                            <td className="text-end py-3">&#8377; {totalFareDetail.fC.TAF }</td>
                                                        </tr>
                                                        <tr className="border-b-2 border-gray-200">
                                                            <td className="py-3">Seat Amount</td>
                                                            <td className="text-end py-3">
                                                                &#8377; {getSeatAmount()}
                                                            </td>
                                                        </tr>
                                                        <tr className="border-b-2 border-gray-200">
                                                            <td className="py-3">Meal Amount</td>
                                                            <td className="text-end py-3">
                                                                &#8377; {getMealAmount()}
                                                            </td>
                                                        </tr>
                                                        <tr className="border-b-2 border-gray-200">
                                                            <td className="py-3">Baggage Amount</td>
                                                            <td className="text-end py-3">
                                                                &#8377; {getBaggageAmount()}
                                                            </td>
                                                        </tr>
                                                        <tr className="border-b-2 border-gray-200">
                                                            <td className="py-3">Amount to pay</td>
                                                            <td className="text-end py-3">&#8377; {totalFareDetail.fC.TF + getSeatAmount() + getMealAmount() + getBaggageAmount() + markupcom} {markupcom}</td>
                                                        </tr>

                                                        <tr className="border-b-2 border-gray-200">
                                                            <td className="py-3">Promo Code</td>
                                                            <td className="text-end py-3">
                                                                <div className="flex border border-[var(--primary)] rounded overflow-hidden items-center">
                                                                    <input type="text" value={pcode} onChange={(e) => setPcode(e.target.value)} name="" className="w-full px-3 py-2 outline-none" id="" />
                                                                    <button onClick={applypromocdode} className="px-3 text-white py-2 bg-[var(--primary)]">Apply</button>
                                                                </div>

                                                            </td>
                                                        </tr>
                                                        <tr className="border-b-2 border-gray-200">
                                                            <td className="py-3">Discount</td>
                                                            <td className="text-end py-3">&#8377; {papply ?? 0}</td>

                                                        </tr>
                                                        <tr className="border-b-2 border-gray-200">
                                                            <td className="py-3">Net Payable</td>
                                                            <td className="text-end py-3">&#8377; {totalFareDetail.fC.TF + getSeatAmount() + getMealAmount() + getBaggageAmount() + markupcom - papply}</td>

                                                        </tr>

                                                    </tbody>
                                                </table>
                                                <div className="w-full bg-gray-200 rounded-lg shadow-lg shadow-gray-400 py-5 px-2 flex items-center justify-between ">
                                                    <div className="button w-full">
                                                        {/* <button onClick={checkout} className="bg-primary text-white text-xs hidden   py-2 px-2 rounded-lg w-full">Checkout</button> */}
                                                        <button onClick={checkoutBooking} className="bg-primary text-white text-xs   py-2 px-2 rounded-lg w-full">Checkout</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </>
                )
            }
        </>
    )
}



export default AddPassengerDetails