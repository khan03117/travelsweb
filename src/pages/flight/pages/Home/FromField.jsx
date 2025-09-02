import PropTypes from 'prop-types';
import LabelSearch from './LabelSearch';
import { useRef, useState } from 'react';
import React from 'react';
// import { getData } from '../../Utils';
import { GiAirplaneDeparture, GiAirplaneArrival } from "react-icons/gi";
import { getData } from '../../../../utils';
const FromField = ({ label, sid, handleFdata, values, selectedcities, setSelectedCities }) => {
  const [keyword, setKeyword] = React.useState('');
  const [open, setOpen] = useState(false);
  const [cities, setCities] = React.useState([]);
  // const [code, setCode] = React.useState({ name: "", code: "" });
  const handleOpen = () => {
    setOpen(!open);
  }
  const handleKeyWord = (e) => {
    const val = e.target.value;
    setKeyword(val);
  }
  const ref = useRef(null);
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setOpen(false);
    }
  };
  const getdata = async () => {
    const items = await getData(`airports?key=${keyword}`);
    const obj1 = values[sid]?.From_obj;
    const obj2 = values[sid]?.To_obj;
    const arr = [...items.data];
    if (obj1 && obj2) {
      arr.push(obj1, obj2);
    }
    setCities(arr);
  }
  React.useEffect(() => {
    getdata();
  }, [keyword]);
  const handleCode = (obj) => {
    handleFdata(sid, label, obj.code);
    handleFdata(sid, label + "_obj", obj);
    handleFdata(sid, label + '_country', obj.countrycode);
    setSelectedCities((prev) => ([...prev, { ...obj }]));
    setOpen(false);
  }

  React.useEffect(() => {
    if (ref) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const getignoreid = () => {
    const findid = label == "From" ? "To" : "From";
    return values[sid]?.[findid];
  }

  return (
    <div onClick={handleOpen} className="w-full h-full min-h-20 group p-3 cursor-pointer lg:relative bg-white">
      <LabelSearch label={label} />

      <div className="w-full">
        <h4 className="text-xl font-bold">{selectedcities.find(obj => obj.code == values[sid]?.[label])?.code}</h4>
        <p className="text-sm font-light">{selectedcities.find(obj => obj.code == values[sid]?.[label])?.name}</p>

      </div>
      {
        open && (
          <>

            <div ref={ref} className="absolute   w-full z-50 bg-white top-16 p-1 start-0 border border-blue-gray-200">
              <input
                type="text"
                placeholder="Search country"
                className="w-full p-2 text-sm outline-none border border-blue-gray-200"
                onChange={handleKeyWord}
                value={keyword}
                onClick={(e) => e.stopPropagation()}
              />
              <div className="w-full">
                <ul className="*:p-1 *:text-sm max-h-[250px] overflow-x-hidden overflow-y-auto">
                  {
                    cities.length > 0 && cities.filter(obj => obj.code != getignoreid()).map((cit) => (
                      <>
                        <li onClick={() => handleCode(cit)}  key={cit._id} className='border-b border-dashed border-blue-gray-200 last:border-b-0'>
                          <button className=" gap-2 text-xs w-full text-start">
                            <div className="flex items-center gap-3">
                              {
                                label.toLowerCase() == 'from' && (
                                  <span><GiAirplaneDeparture className='size-4' /></span>
                                )
                              }
                              {
                                label.toLowerCase() == 'to' && (
                                  <span className="size-4"><GiAirplaneArrival /></span>
                                )
                              }
                              <span> {cit.code} {cit.name}</span>
                            </div>
                            <p className='font-bold'>{cit.city} {cit.country}</p>
                          </button>
                        </li>
                      </>
                    ))
                  }


                </ul>
              </div>
            </div>
          </>
        )
      }

    </div>
  );
};

FromField.propTypes = {
  label: PropTypes.string,
  handleopen: PropTypes.func,
  // open: PropTypes.shape({
  //   id: PropTypes.string,
  //   type: PropTypes.string,
  // }),
  sid: PropTypes.number,
  handleFdata: PropTypes.func,
  values: PropTypes.array,
  selectedcities: PropTypes.array,
  setSelectedCities: PropTypes.func,
};

export default FromField;
