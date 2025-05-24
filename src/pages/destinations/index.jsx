import React from 'react'
import axios from 'axios';
import DestinationLayoutOne from './DestinationLayoutOne'
import { WEB_API_URL, WEB_SANCTUM_KEY } from '../../utils';
import { Link, useLocation } from 'react-router-dom';
import DestinationLayoutTwo from './DestinationLayoutTwo';
import DestinationLayoutThree from './DestinationLayoutThree';
import BreadCrumb from '../../components/BreadCrumb';
import { useUser } from '../Account/UserContext';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import Loading from '../../components/Loading';
// import DestinationLayoutTwo from './DestinationLayoutTwo';

const Destinations = () => {
    const { user } = useUser();
    const id = user.web_theme ?? 1;
    const [loading, setLoading] = React.useState(true);
    const [items, setItems] = React.useState([]);
    const { pathname } = useLocation();
    const [page, setPage] = React.useState(1);
    const getitems = async () => {
        try {
            setLoading(true);
            const perPage = pathname == "/destinations/" ? 9 : 6;
            const resp = await axios.get(WEB_API_URL + "destinations", {
                headers: {
                    Authorization: WEB_SANCTUM_KEY
                },
                params: {
                    perPage,
                    page
                }
            });
            if (resp.data.success == 1) {
                setItems(resp.data.data);
            }
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false);
        }
    }
    React.useEffect(() => {
        getitems();
    }, [page]);
    return (
        <>
            {
                loading ? (
                    <>
                        <Loading />
                    </>
                ) : (
                    <>
                        {
                            pathname == "/destinations/" && (
                                <>
                                    <BreadCrumb path={['Home', 'Destinations']} title={'Destinations'} />
                                </>
                            )
                        }
                        <section className=' py-10'>
                            <div className="container">
                                <div className="w-full mb-10 text-center">
                                    <h2 className="section_title !mb-2">Top Destinations</h2>
                                    <p>
                                        Explore our top destinations voted by more than 100,000+ customers around the world.
                                    </p>
                                </div>
                                <div className="grid grid-cols-12 lg:gap-8 gap-4">
                                    {
                                        items.map((itm) => (
                                            <>
                                                {
                                                    (id == 1) && (
                                                        <>
                                                            <div className="lg:col-span-3 col-span-6">
                                                                <DestinationLayoutOne data={itm} />
                                                            </div>
                                                        </>
                                                    )
                                                }
                                                {
                                                    (id == 2) && (
                                                        <>
                                                            <div className="lg:col-span-3 col-span-6">
                                                                <DestinationLayoutTwo data={itm} />
                                                            </div>
                                                        </>
                                                    )
                                                }
                                                {
                                                    (id == 3) && (
                                                        <>
                                                            <div className="lg:col-span-4 col-span-6">
                                                                <DestinationLayoutThree data={itm} />
                                                            </div>
                                                        </>
                                                    )
                                                }
                                                {
                                                    (id == 4) && (
                                                        <>
                                                            <div className="lg:col-span-4 col-span-6">
                                                                <DestinationLayoutThree data={itm} />
                                                            </div>
                                                        </>
                                                    )
                                                }
                                                {
                                                    (id == 5) && (
                                                        <>
                                                            <div className="lg:col-span-4 col-span-6">
                                                                <DestinationLayoutThree data={itm} />
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
                                <div className="w-full mt-10">
                                    <div className="grid grid-cols-12">
                                        <div className="col-span-6">
                                            <div className="w-full *:size-10 items-center *:text-center *:leading-10 *:border *:border-primary *:rounded flex gap-2">
                                                <button onClick={() => page > 1 && setPage(prev => prev - 1)}>
                                                    <LeftOutlined />
                                                </button>
                                                <div>{page}</div>
                                                <button onClick={() => setPage(prev => prev + 1)}>
                                                    <RightOutlined />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-span-6">
                                        <Link to={'/destinations'} className='bg-[var(--primary)] rounded-full px-10 hover:bg-opacity-75 py-2 lg:text-sm text-xs text-white'>View All</Link>

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

export default Destinations