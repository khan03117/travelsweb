// import React from 'react'

import { Link, useParams } from "react-router-dom"
import PackageLayoutFive from "./elements/PackageLayoutFive"
import PackageLayoutFour from "./elements/PackageLayoutFour"
import PackageLayoutOne from "./elements/PackageLayoutOne"
import PackageLayoutThree from "./elements/PackageLayoutThree"
import PackageLayoutTwo from "./elements/PackageLayoutTwo"

const Packages = () => {
  const { id } = useParams();
  const getlayout = () => {
    if (id == 1) {
      return <PackageLayoutOne />
    }
    if (id == 2) {
      return <PackageLayoutTwo />
    }
    if (id == 3) {
      return <PackageLayoutThree />
    }
    if (id == 4) {
      return <PackageLayoutFour />
    }
    if (id == 5) {
      return <PackageLayoutFive />
    }
  }
  return (
    <>
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-12 gap-7 gap-y-7 ">
            {
              [...Array(9)].map(() => (
                <>
                  <div className="col-span-4">
                    <Link to={'/packages/show/' + id} className="block">
                      {getlayout()}
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