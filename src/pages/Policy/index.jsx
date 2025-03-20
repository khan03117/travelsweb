import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom'
import { API_URL } from '../../utils';
import { useUser } from '../Account/UserContext';

const AppPolicy = () => {
    const { user } = useUser();
    const company_name = user?.company_name;

    const [loading, setLoading] = React.useState(false);
    const { url } = useParams();
    const [policies, setPolicies] = React.useState({ title: "", description: "" });
    const getdata = async () => {
        setLoading(true);
        const resp = await axios.get(API_URL + 'policies?slug=' + url);
        setPolicies(resp.data.data[0]);
        setLoading(false);
    }

    React.useEffect(() => {
        getdata();
    }, [url]);

    return (
        <>
            {
                (!loading && policies?.description) && (
                    <>

                        <section className='py-10'>
                            <div className="container mx-auto">
                                <div className="grid grid-cols-12">

                                    <div className="col-span-1"></div>
                                    <div className="lg:col-span-10 col-span-12">
                                        <div className="w-full p-5 bg-primary/20 rounded shadow shadow-black">
                                            <div className="w-full mb-5">
                                                <h1 className='lg:text-[2rem] text-lg text-[var(--primary)] inline-block underline font-bold'>{policies.title}</h1>
                                            </div>
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html: policies?.description
                                                        .replace(/Aahil Tours &amp; Travels \(AT&amp;T\) Private Limited/g, company_name),
                                                }}
                                            />

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

export default AppPolicy
