// import React from 'react'

import { Card, CardBody, Typography } from "@material-tailwind/react"
import PropTypes from "prop-types"

const BookingBox = ({booking}) => {
    return (
      <>
       <Card className="w-full max-w-md shadow-xl border border-gray-300 rounded-lg p-6 bg-white">
        <CardBody>
          <Typography variant="h4" color="blue-gray" className="mb-4 text-center">
            E-Ticket
          </Typography>
          <div className="border-b pb-3 mb-3">
            <Typography variant="h6">Passenger: {booking.itemInfos.AIR.travellerInfos[0].fN} {booking.itemInfos.AIR.travellerInfos[0].lN}</Typography>
            <Typography variant="h6">PNR: {booking.itemInfos.AIR.travellerInfos[0].pnrDetails["BOM-HYD"]}</Typography>
            <Typography variant="h6">Ticket No: {booking.itemInfos.AIR.travellerInfos[0].ticketNumberDetails["BOM-HYD"]}</Typography>
          </div>
          <div className="border-b pb-3 mb-3">
            {booking.itemInfos.AIR.tripInfos[0].sI.map((flight, index) => (
              <div key={index} className="mb-4">
                <Typography variant="h6">{flight.fD.fN} ({flight.fD.aI.name})</Typography>
                <Typography variant="body1">From: {flight.da.city} ({flight.da.code}) - {flight.da.terminal}</Typography>
                <Typography variant="body1">To: {flight.aa.city} ({flight.aa.code})</Typography>
                <Typography variant="body1">Departure: {new Date(flight.dt).toLocaleString()}</Typography>
                <Typography variant="body1">Arrival: {new Date(flight.at).toLocaleString()}</Typography>
              </div>
            ))}
          </div>
          <Typography variant="h6" className="text-center mt-3">Booking ID: {booking.order.bookingId}</Typography>
          <Typography variant="h6" className="text-center">Amount Paid: ₹{booking.order.amount}</Typography>
        </CardBody>
      </Card>
      </>
    )
}

export default BookingBox

BookingBox.propTypes = {
  booking : PropTypes.object
}