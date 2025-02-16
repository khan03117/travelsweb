import React from 'react'

import BreadCrumb from "../../components/BreadCrumb"
import axios from 'axios';
import { API_URL } from '../../utils';
import { Link } from 'react-router-dom';

const VisaAssistantPage = () => {
    const [countries, setCountries] = React.useState([]);
    const getcountries = async () => {
        const resp = await axios.get(API_URL + "visa-assistant");
        setCountries(resp.data.data);
    }
    React.useEffect(() => {
        getcountries();
    }, []);
    return (
        <>
            <BreadCrumb path={['Home', 'Visa', 'Visa Assistant']} title={'Visa Assistant'} />
            <section className='py-20'>
                <div className="container">
                    <div className="grid grid-cols-12 gap-3">
                        {
                            countries.map(itm => (
                                <>
                                    <div className="lg:col-span-2 col-span-6">
                                        <Link to={'/visa-assistant/' +itm.country.url} className="w-full block cursor-pointer  p-2 capitalize shadow shadow-primary h-full rounded-lg ">
                                            {itm.country.country.toLowerCase()}
                                        </Link>
                                    </div>
                                </>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default VisaAssistantPage