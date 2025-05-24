import React from 'react'
import PropTypes from 'prop-types';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import LabelSearch from '../pages/Home/LabelSearch';
const DateFieldHotel = () => {
    const [startDate, setStartDate] = React.useState(new Date());
    const handleDate = (date) => {
        console.log(date)
        setStartDate(date);

    }

    return (
        <>
            <div className="w-full bg-white h-full p-3 relative">
                <LabelSearch label='Checkin-Checkout' />
                <div className="w-full">

                    <DatePicker selectsRange minDate={new Date()} popperModifiers={[
                        {
                            name: "preventOverflow",
                            options: {
                                boundary: "viewport",
                            },
                        },
                    ]} withPortal className='w-full min-h-14 outline-none z-40 date-input  top-0 p-2  start-0 h-full' selected={startDate} monthsShown={2} onChange={(date) => handleDate(date)} />
                </div>
            </div>
        </>
    )
}
DateFieldHotel.propTypes = {
    label: PropTypes.string,
    disabled: PropTypes.bool,
    handletrip: PropTypes.func,
    handleFdata: PropTypes.func,
    sid: PropTypes.number
}

export default DateFieldHotel