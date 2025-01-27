// import React from 'react'
import AboutThree from '../About/AboutThree'
import PackageLayoutThree from '../packages/elements/PackageLayoutThree'
import Bannertwo from './banners/Bannertwo'

const HomeTwo = () => {
    return (
        <>
            <Bannertwo/>
            <AboutThree/>
            <section className="py-10 bg-primary/30">
        <div className="container">
          <div className="grid grid-cols-12 gap-5 gap-y-5">
            <div className="col-span-12 mb-6">
              <div className="w-full mb-10 text-center">
                <h2 className="section_title">
                  Plan the Trip of a Lifetime with Ease
                </h2>
                <p>
                  Whether youre looking for a romantic getaway, a family-friendly adventure, or a solo journey to explore the world, a travel agency can provide you with a custom-tailored itinerary that exceeds your expectations.
                </p>
              </div>
            </div>
            {
              [1, 2, 3, 4, 5, 6].map(() => (
                <>
                  <div className="col-span-4">
                    <PackageLayoutThree />
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

export default HomeTwo