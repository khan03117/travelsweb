import React from 'react'
import axios from 'axios';
import DestinationLayoutOne from './DestinationLayoutOne'
import { API_URL, usertoken } from '../../utils';
import { useParams } from 'react-router-dom';
import DestinationLayoutTwo from './DestinationLayoutTwo';
// import DestinationLayoutTwo from './DestinationLayoutTwo';

const Destinations = () => {
    const { id } = useParams();
    const [items, setItems] = React.useState([]);
    const getitems = async () => {
        try {
            const resp = await axios.get(API_URL + "destinations", {
                headers: {
                    Authorization: usertoken
                }
            });
            if (resp.data.success == 1) {
                setItems(resp.data.data);
            }
        } catch (err) {
            console.log(err)
        }
    }
    React.useEffect(() => {
        getitems();
    }, []);
    return (
        <>
            <section className=' py-10'>
                <div className="container">
                    <div className="w-full mb-10 text-center">
                        <h2 className="section_title !mb-2">Top Destinations</h2>
                        <p>
                            Explore our top destinations voted by more than 100,000+ customers around the world.
                        </p>
                    </div>
                    <div className="grid grid-cols-12 gap-3">
                        {
                            items.map((itm) => (
                                <>
                                    {
                                        (!id || id == 1) && (
                                            <>
                                                <div className="col-span-3">
                                                    <DestinationLayoutOne data={itm} />
                                                </div>
                                            </>
                                        )
                                    }
                                    {
                                        (id == 2) && (
                                            <>
                                                <div className="col-span-3">
                                                    <DestinationLayoutTwo data={itm} />
                                                </div>
                                            </>
                                        )
                                    }

                                    {/* <div className="col-span-3">
                                        <DestinationLayoutTwo data={itm} />
                                    </div> */}

                                </>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Destinations