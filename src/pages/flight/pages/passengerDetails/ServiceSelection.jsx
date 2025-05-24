import React from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

const ServiceSelection = ({ tripInfos, paxInfo, routeInfos, mealsave }) => {
    const [tripIndex, setTid] = React.useState(0);
    const [segmentIndex, setSid] = React.useState(0);
    const [segment, setSegment] = React.useState(tripInfos[tripIndex].sI[segmentIndex]);
    console.log(tripInfos)
    const [services, setServices] = React.useState([]);

    const handleTindex = (tid, sid) => {
        setTid(tid);
        setSid(sid);
        setSegment(tripInfos[tid].sI[sid]);
    };

    const handleService = (e, serviceType) => {
        const code = e.target.value;
        const ptype = e.target.dataset.type;
        const pindex = e.target.dataset.index;
        const key = segment.id;
        // Find amount from the selected service list
        const serviceList = segment.ssrInfo?.[serviceType] || [];
        const selectedItem = serviceList.find(item => item.code === code);
        const amount = selectedItem?.amount || 0;
        const foundIndex = services.findIndex(
            obj => obj.type === ptype && obj.index === pindex && obj.key === key && obj.service === serviceType
        );
        const updated = [...services];
        if (foundIndex !== -1) {
            updated[foundIndex] = { ...updated[foundIndex], code, amount };
        } else {
            updated.push({ type: ptype, index: pindex, key, service: serviceType, code, amount });
        }
        setServices(updated);
    };

    React.useEffect(() => {
        // const formatted = services.map(({ key, code, service, amount }) => ({
        //     key,
        //     code,
        //     service,
        //     amount
        // }));
        mealsave?.(services);
    }, [services]);

    return (
        <div className="w-full my-2 bg-gray-100 py-2 px-2 border-2 border-gray-200 mb-4">
            <p className="text-black lg:text-md text-sm  pb-2 border-b border-gray-400">Add Baggage, Meal & other services to your Travel</p>
            <div className="flex gap-4 my-3">
                {tripInfos.map((trip, tindex) =>
                    trip.sI.map((segment, sindex) => (
                        <button
                            key={`${tindex}-${sindex}`}
                            onClick={() => handleTindex(tindex, sindex)}
                            className={`text-black lg:p-2 p-1 ${(tindex === tripIndex && sindex === segmentIndex) ? 'bg-primary text-white' : 'bg-gray-300 text-black'} rounded lg:text-sm text-xs`}
                        >
                            <p>{segment.da.city} <ArrowRightOutlined /> {segment.aa.city}</p>
                            <span className={`lg:text-sm text-xs block ${(tindex === tripIndex && sindex === segmentIndex) ? 'text-gray-300' : 'text-gray-600' } `}>
                                on {new Date(routeInfos[tindex].travelDate).toDateString()}
                            </span>
                        </button>
                    ))
                )}
            </div>

            {segment?.ssrInfo && (
                <>
                    {Object.keys(paxInfo).filter(key => key !== "INFANT").map((paxType) =>
                        [...Array(paxInfo[paxType])].map((_, paxIndex) => (
                            <div key={`${tripIndex}-${segmentIndex}-${paxType}-${paxIndex}`} className="w-full flex flex-col gap-2 py-3 border-b border-gray-300">
                                <p className="text-black font-semibold">{paxType.toUpperCase()} {paxIndex + 1}</p>

                                {/* Meal Selection */}
                                <div>
                                    <label className="block text-sm text-gray-500">Select Meal</label>
                                    <select
                                        data-type={paxType}
                                        data-index={paxIndex}
                                        onChange={(e) => handleService(e, 'MEAL')}
                                        className="border-b border-gray-600 text-sm outline-none w-full"
                                    >
                                        <option value="">Select</option>
                                        {segment.ssrInfo.MEAL?.map((meal, idx) => (
                                            <option
                                                key={idx}
                                                value={meal.code}
                                                selected={
                                                    services.find(obj =>
                                                        obj.type === paxType &&
                                                        obj.index == paxIndex &&
                                                        obj.key === segment.id &&
                                                        obj.service === 'MEAL'
                                                    )?.code === meal.code
                                                }
                                            >
                                                {meal.desc} - ₹{meal.amount}
                                            </option>
                                        )) || <option>No meal options</option>}
                                    </select>
                                </div>

                                {/* Baggage Selection */}
                                <div>
                                    <label className="block text-sm text-gray-500">Select Baggage</label>
                                    <select
                                        data-type={paxType}
                                        data-index={paxIndex}
                                        onChange={(e) => handleService(e, 'BAGGAGE')}
                                        className="border-b border-gray-600 text-sm outline-none w-full"
                                    >
                                        <option value="">Select</option>
                                        {segment.ssrInfo.BAGGAGE?.map((bag, idx) => (
                                            <option
                                                key={idx}
                                                value={bag.code}
                                                selected={
                                                    services.find(obj =>
                                                        obj.type === paxType &&
                                                        obj.index == paxIndex &&
                                                        obj.key === segment.id &&
                                                        obj.service === 'BAGGAGE'
                                                    )?.code === bag.code
                                                }
                                            >
                                                {bag.desc} - ₹{bag.amount}
                                            </option>
                                        )) || <option>No baggage options</option>}
                                    </select>
                                </div>
                            </div>
                        ))
                    )}
                </>
            )}
        </div>
    );
};

ServiceSelection.propTypes = {
    tripInfos: PropTypes.array.isRequired,
    paxInfo: PropTypes.object.isRequired,
    routeInfos: PropTypes.array.isRequired,
    mealsave: PropTypes.func
};

export default ServiceSelection;
