import { CalendarOutlined, EnvironmentOutlined, UsergroupAddOutlined } from '@ant-design/icons'
import { Button } from '@material-tailwind/react'
import { Image_URL } from '../../../utils';
import PropTypes from 'prop-types'
import dummyimg from '../../../assets/packages/8.jpeg'


const PackageLayoutTwo = ({ data }) => {
    return (
        <>
            <div className="w-full p-4 bg-white shadow shadow-black/40 rounded">
                <figure className="w-full relative overflow-hidden">
                    <img
                        src={data.main_image ? Image_URL + "assets/images/" + data.main_image : dummyimg}
                        onError={(e) => e.target.src = dummyimg}
                        alt=""
                        className="w-full h-48 object-cover"
                    />

                </figure>
                <div className="w-full">
                    <div className="w-full py-2">
                        <h4 className='text-lg font-bold text-black'>
                            {data.title ?? data.activity_name}
                        </h4>
                        <div className="w-full mb-2">
                            <span>
                                <EnvironmentOutlined />
                            </span>
                            <span>Barcelona, Spain</span>
                        </div>
                        <p className='text-gray-700 text-xs tracking-widest'>
                            Here we will write short descrition to each package which will be added from backend admin panel
                        </p>
                    </div>

                    <div className="w-full border-t border-gray-500">
                        <div className="grid grid-cols-2 gap-2 py-3">
                            <div className="col-span-1">
                                <div className="flex text-sm">
                                    <CalendarOutlined />
                                    <span>
                                        4 Day, 3 Nights
                                    </span>
                                </div>
                            </div>
                            <div className="col-span-1 text-end">
                                <div className="inline-flex text-sm">
                                    <UsergroupAddOutlined />
                                    <span>
                                        12 Guests
                                    </span>
                                </div>
                            </div>
                        </div>
                        <Button variant='gradient' fullWidth color='teal'>Book Now</Button>
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