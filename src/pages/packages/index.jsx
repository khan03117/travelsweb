import React from 'react'

import { Link, useParams } from "react-router-dom"
// import PackageLayoutFive from "./elements/PackageLayoutFive"
// import PackageLayoutFour from "./elements/PackageLayoutFour"
import PackageLayoutOne from "./elements/PackageLayoutOne"
// import PackageLayoutThree from "./elements/PackageLayoutThree"
// import PackageLayoutTwo from "./elements/PackageLayoutTwo"
import axios from 'axios'
import { API_URL, usertoken } from '../../utils'
import BreadCrumb from '../../components/BreadCrumb'
import { useUser } from '../Account/UserContext'
import PackageLayoutTwo from './elements/PackageLayoutTwo'
import PackageLayoutThree from './elements/PackageLayoutThree'
import PackageLayoutFour from './elements/PackageLayoutFour'
import PackageLayoutFive from './elements/PackageLayoutFive'
import Loading from '../../components/Loading'

const Packages = () => {
  const { user } = useUser();
  const id = user.web_theme;
  const { url } = useParams();
  const [items, setItems] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const getitems = async () => {
    try {
      setLoading(true);
      const resp = await axios.get(API_URL + "destination-packages/" + url, {
        headers: {
          Authorization: usertoken
        }
      });
      setItems(resp.data.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }
  React.useEffect(() => {
    getitems();
  }, []);
  console.log(url)
  const getlayout = (data) => {
    if (id == 1) {
      return <PackageLayoutOne data={data} />
    }
    if (id == 2) {
      return <PackageLayoutTwo data={data} />
    }
    if (id == 3) {
      return <PackageLayoutThree data={data} />
    }
    if (id == 4) {
      return <PackageLayoutFour data={data} />
    }
    if (id == 5) {
      return <PackageLayoutFive data={data} />
    }
  }
  return (
    <>
      {
        loading ? (
          <>
            <Loading height={'min-h-lvh h-full'} />
          </>
        ) : (
          <>

            <BreadCrumb path={['Home', 'Packages']} title={'Packages'} />
            <section className="py-20">
              <div className="container">
                <div className="grid grid-cols-12 gap-7 gap-y-7 ">
                  {
                    items.map((itm) => (
                      <>
                        <div className="lg:col-span-4 col-span-12">
                          <Link to={'/package/show/' + itm.url} className="block">
                            {getlayout(itm)}
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
    </>
  )
}

export default Packages