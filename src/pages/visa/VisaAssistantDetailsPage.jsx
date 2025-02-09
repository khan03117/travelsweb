// import React from 'react'

import { useParams } from "react-router-dom"
import BreadCrumb from "../../components/BreadCrumb"

const VisaAssistantDetailsPage = () => {
    const {url} = useParams();
  return (
    <>
        <BreadCrumb path={['Home', 'Visa', 'Visa Assistant', url ]} title={url} />
        <section className="py-10">
            
        </section>
    </>
  )
}

export default VisaAssistantDetailsPage