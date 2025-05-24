// import React from 'react'
import PropTypes from 'prop-types';
const Conditions = ({ conditions }) => {
    return (
        <>
            <div className="w-full">
                <div className="w-full my-2">
                    <h4 className="text-md font-bold text-primary mb-2 ">Note:-</h4>
                    <ul className='list-inside *:pb-1  *:ps-3 *:text-sm list-disc'>
                        <li>
                            Adult passenger date of birth is  {conditions?.dob.adobr ? 'required' : 'not required'}
                        </li>
                        <li>
                            Child passenger date of birth is  {conditions?.dob.cdobr ? 'required' : 'not required'}
                        </li>
                        <li>
                            Infant passenger date of birth is  {conditions?.dob.idobr ? 'required' : 'not required'}
                        </li>
                        <li>
                            GST details is {conditions?.gst?.gstappl ? 'applicable and not mandatory information' : 'not required'}
                        </li>
                        <li>
                            Emergency contact number is {conditions?.iecr ? 'mandatory' : 'not required'}
                        </li>
                        <li>
                            Passport number is {conditions?.pcs ? 'mandatory' : 'not required'}
                        </li>
                        <li>
                            {conditions?.isa ? 'Seat Map Available' : 'Seat Map Not Available'}
                        </li>
                        <li>
                            {conditions?.st / 60} minutes to Book
                        </li>
                    </ul>

                </div>
                <ul className='list-inside *:pb-1  *:ps-3 *:text-sm list-disc'>
                    <li><strong>Frequent Flier Airlines:</strong> {conditions?.ffas.join(", ")}</li>
                    <li><strong>Is Seat Applicable:</strong> {conditions?.isa ? "Yes" : "No"}</li>
                    <li><strong>Is Hold Option Applicable:</strong> {conditions?.isBA ? "Yes" : "No"}</li>
                    <li><strong>Session Time (Seconds):</strong> {conditions?.st}</li>
                    <li><strong>Session Created Time:</strong> {conditions?.sct}</li>
                    <li>
                        <strong>Passport Booking Conditions:</strong>
                        <ul>
                            <li>Passport Expiry Date Required: {conditions?.pcs?.pped ? "Yes" : "No"}</li>
                            <li>Passport Issue Date Required: {conditions?.pcs?.pid ? "Yes" : "No"}</li>
                            <li>Passport Mandatory: {conditions?.pcs?.pm ? "Yes" : "No"}</li>
                            <li>Date of Birth Mandatory: {conditions?.pcs?.dobe ? "Yes" : "No"}</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Date of Birth Requirements:</strong>
                        <ul>
                            <li>Adult DOB Required: {conditions?.dob?.adobr ? "Yes" : "No"}</li>
                            <li>Child DOB Required: {conditions?.dob?.cdobr ? "Yes" : "No"}</li>
                            <li>Infant DOB Required: {conditions?.dob?.idobr ? "Yes" : "No"}</li>
                        </ul>
                    </li>
                    <li>
                        <strong>GST Information:</strong>
                        <ul>
                            <li>GST Applicable: {conditions?.gst?.gstappl ? "Yes" : "No"}</li>
                            <li>GST Mandatory: {conditions?.gst?.igm ? "Yes" : "No"}</li>
                        </ul>
                    </li>
                    <li>Emergency Contact Required: {conditions?.iecr ? "Yes" : "No"}</li>
                    <li>
                        <strong>Document Conditions:</strong>
                        <ul>
                            <li>Document ID Applicable: {conditions?.dc?.ida ? "Yes" : "No"}</li>
                            <li>Document ID Mandatory: {conditions?.dc?.idm ? "Yes" : "No"}</li>
                        </ul>
                    </li>
                    <li>Passenger Address Required: {conditions?.ipa ? "Yes" : "No"}</li>
                    <li>Special Baggage Purchase Available: {conditions?.addOns?.isbpa ? "Yes" : "No"}</li>
                    <li>Special Service Available: {conditions?.iss ? "Yes" : "No"}</li>
                </ul>
            </div>
        </>
    )
}

Conditions.propTypes = {
    conditions: PropTypes.object.isRequired
}
export default Conditions