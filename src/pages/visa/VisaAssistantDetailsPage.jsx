import React from 'react'

import { useParams } from "react-router-dom"
import BreadCrumb from "../../components/BreadCrumb"
import axios from 'axios';
import { WEB_API_URL } from '../../utils';
import { useUser } from '../Account/UserContext';

const VisaAssistantDetailsPage = () => {
  const { url } = useParams();
  const { theme } = useUser();
  const [item, setItem] = React.useState(false);
  const [active, setActive] = React.useState(0)
  const [visa, setVisa] = React.useState({ option_visa: [], desc_visa: [], processing_visa: [] });
  const getitem = async () => {
    const resp = await axios.get(WEB_API_URL + "visa-assistant?slug=" + url);
    const rep = resp.data.data[0];
    setItem(rep);
    setVisa(JSON.parse(rep.visa_details));
  }
  React.useEffect(() => {
    getitem();
  }, []);
  return (
    <>
      {
        item && (
          <>
            <BreadCrumb path={['Home', 'Visa', 'Visa Assistant', url]} title={url} />
            <section className="py-10">
              <div className="container">
                <div className="grid grid-cols-12 gap-4">
                  <div className="lg:col-span-8 col-span-12">
                    <div className="w-full mb-10 flex gap-3">
                      {
                        visa.option_visa.map((itm, index) => (
                          <>
                            <button onClick={() => setActive(index)} className={`capitalize ${active == index ? 'bg-primary text-white' : 'bg-gray-300'} px-10 py-2 text-sm  rounded-full`}>{itm}</button>
                          </>
                        ))
                      }

                    </div>
                    <div className="w-full dynamicContent">

                      <div className=' p-3 ' dangerouslySetInnerHTML={{ __html: visa.desc_visa[active] }} />
                      <div className="w-full p-3 rounded" style={{ background: `${theme.primary}26` }}>
                        <h4>Processing</h4>
                        <div className='' dangerouslySetInnerHTML={{ __html: visa.processing_visa[active] }} />

                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-4 col-span-12">
                    <div className="w-full sticky top-0 p-4 embesyDetail rounded" style={{ background: `${theme.primary}33` }}>
                      <h4 className="text-primary">Embassy Details</h4>
                      <table className="w-full ">
                        <tbody className=''>
                          <tr className='*:text-sm *:py-1'>
                            <td className='w-[25%] font-bold'>Address</td>
                            <td>
                              {item.eaddress}
                            </td>
                          </tr>
                          <tr className='*:text-sm *:py-1'>
                            <td className='font-bold'>Website</td>
                            <td>
                              {item.website}
                            </td>
                          </tr>
                          <tr className='*:text-sm *:py-1'>
                            <td className='font-bold'>Email</td>
                            <td className='text-wrap'>
                              {item.email}
                            </td>
                          </tr>
                          <tr className='*:text-sm *:py-1'>
                            <td className='font-bold'>Phone</td>
                            <td>
                              {item.phone}
                            </td>
                          </tr>
                          <tr className='*:text-sm *:py-1'>
                            <td className='font-bold'>Fax</td>
                            <td>
                              {item.fax}
                            </td>
                          </tr>
                        </tbody>
                      </table>
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

export default VisaAssistantDetailsPage