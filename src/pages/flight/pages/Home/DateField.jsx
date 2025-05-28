import PropTypes from 'prop-types';
import LabelSearch from './LabelSearch';
import { CloseOutlined } from '@ant-design/icons';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const DateField = ({ label, disabled, values, handletrip, handleFdata, sid }) => {
  const datelabel = label.split(' ').join('');
  const handleDate = (date) => {

    handleFdata(sid, datelabel, date);
  }

  return (
    <>
      <div className="w-full bg-white h-full p-3 relative">
        <LabelSearch label={label} />
        <div className="w-full">
          {
            disabled && (
              <>
                <button onClick={() => handletrip(2)} className='absolute top-2 z-50 end-2 size-6 text-gray-600'>
                  <CloseOutlined />
                </button>
              </>
            )
          }
          <DatePicker minDate={new Date()} popperModifiers={[
            {
              name: "preventOverflow",
              options: {
                boundary: "viewport",
              },
            },
          ]} withPortal className='w-full min-h-14  outline-none z-40 date-input  top-0 p-2  start-0 h-full' selected={values.length >= sid ? values[sid]?.[datelabel] : new Date()} monthsShown={1} onChange={(date) => handleDate(date)} />
        </div>
      </div>
    </>
  )
}
DateField.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
  handletrip: PropTypes.func,
  handleFdata: PropTypes.func,
  sid: PropTypes.number,
  values : PropTypes.string
}

export default DateField