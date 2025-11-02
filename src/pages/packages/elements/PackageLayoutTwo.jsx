import { CalendarOutlined, EnvironmentOutlined } from '@ant-design/icons'
// import { Button } from '@material-tailwind/react'
import { WEB_Image_URL } from '../../../utils';
import PropTypes from 'prop-types'
import dummyimg from '../../../assets/packages/8.jpeg'


const PackageLayoutTwo = ({ data }) => {
    console.log(data);
    return (
        <>
            <div className="w-full lg:p-4">
                <figure className="w-full relative overflow-hidden">
                    <img
                        src={data.main_image ? WEB_Image_URL + "assets/images/" + data.main_image : dummyimg}
                        onError={(e) => e.target.src = dummyimg}
                        alt=""
                        className="w-full h-48 object-cover rounded-lg"
                    />

                </figure>
                <div className="w-full lg:p-0 p-4">
                    <div className="w-full lg:py-2 p-0">
                        <h4 className='text-lg font-bold text-black'>
                            {data.package_title}
                        </h4>


                    </div>

                    <div className="w-full border-t border-gray-500">
                        <div className="grid grid-cols-2 gap-2 py-3">
                            <div className="col-span-1">
                                <div className="flex gap-3 text-md">
                                    <CalendarOutlined />
                                    <span>
                                        4 Day, 3 Nights
                                    </span>
                                </div>
                            </div>
                            <div className="col-span-1 text-end">
                                <div className="inline-flex gap-3 text-md">
                                    <EnvironmentOutlined />
                                    <span>
                                        {data?.cities.map(itm => itm.state)?.join(', ')}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full my-2">
                            <h3 className='text-lg font-bold'>
                                ₹ {data?.sharing[0]?.amount_b2c}
                            </h3>
                            <p className='text-gray-500'>
                                avg per night
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PackageLayoutTwo


PackageLayoutTwo.propTypes = {
    data: PropTypes.object
}