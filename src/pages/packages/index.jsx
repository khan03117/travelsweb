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

const Packages = () => {
  const { url } = useParams();
  const [items, setItems] = React.useState([]);
  const getitems = async () => {
    try {
      const resp = await axios.get(API_URL + "destination-packages/" + url, {
        headers: {
          Authorization: usertoken
        }
      });
      setItems(resp.data.data);
    } catch (err) {
      console.log(err);
    }
  }
  React.useEffect(() => {
    getitems();
  }, []);
  console.log(url)
  // const getlayout = () => {
  //   if (id == 1) {
  //     return <PackageLayoutOne />
  //   }
  //   if (id == 2) {
  //     return <PackageLayoutTwo />
  //   }
  //   if (id == 3) {
  //     return <PackageLayoutThree />
  //   }
  //   if (id == 4) {
  //     return <PackageLayoutFour />
  //   }
  //   if (id == 5) {
  //     return <PackageLayoutFive />
  //   }
  // }
  return (
    <>
      <section>
        <div className="container">
          <div className="grid grid-cols-12">
            <div className="col-span-12">

            </div>
          </div>
        </div>
      </section>
      <BreadCrumb path={['Home', 'Packages']} title={'Packages'} />
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-12 gap-7 gap-y-7 ">
            {
              items.map((itm) => (
                <>
                  <div className="col-span-4">
                    <Link to={'/packages/show/' + itm.url} className="block">
                      <PackageLayoutOne data={itm} />
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

export default Packages