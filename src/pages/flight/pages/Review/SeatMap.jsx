import { Tooltip } from '@material-tailwind/react';
import PropTypes from 'prop-types';
import  { useState, useEffect } from 'react';

const SeatMap = ({ seatData, onClick, selected, pinfo }) => {
  const alltrips = Object.entries(seatData.tripSeat);
  const [active, setActive] = useState(0);
  const [pactive, setPactive] = useState(0)
  const maxCol = alltrips[active][1].sData.column;
  const maxRow = alltrips[active][1].sData.row;
  const [grid, setGrid] = useState([]);

  // Step 1: Create empty grid when 'active' changes
  useEffect(() => {
    const arr = Array.from({ length: maxRow }, () => Array(maxCol).fill(null));
    const seats = alltrips[active][1]?.sInfo ?? [];
  
    seats.forEach((seat) => {
      const { row, column } = seat.seatPosition;
      arr[row - 1][column - 1] = seat;
    });
  
    setGrid(arr);
  }, [active, maxRow, maxCol]);

  // Step 2: Place seats into the grid
  useEffect(() => {
    const seats = alltrips[active][1]?.sInfo ?? [];

    console.log(alltrips);

    if (grid.length === 0) return;
    const newGrid = grid.map((row) => [...row]);
    seats.forEach((seat) => {
      const { row, column } = seat.seatPosition;
      newGrid[row - 1][column - 1] = seat;
    });
    setGrid(newGrid);
  }, [grid.length, active]);
  return (
    <section>
      <div className="container mb-4">
        <div className="flex flex-wrap gap-2">
          {alltrips.map((itm, index) => (
            <button
              key={itm[0]}
              onClick={() => setActive(index)}
              className={`px-3 py-2 rounded border border-gray-400 ${
                active === index ? 'bg-blue-500 text-white' : ''
              }`}
            >
              {itm[0]}
            </button>
          ))}
        </div>
        <div className="flex my-2 flex-wrap gap-2">
         {
          pinfo.map((itm, index) =>  (
            <>
              <span onClick={() => setPactive(index)} className={`px-2 cursor-pointer text-xs py-1 border ${pactive == index ? 'bg-green-500 text-white' : 'bg-white border-gray-400'}  rounded `}>{itm.fN} {itm.lN}</span>
            </>
          ))
         }
        </div>
      </div>

      <div className="container">
        <div className="flex relative z-[20000] flex-col gap-2">
          {grid.map((row, rowIndex) => (
            <div key={rowIndex} className="flex relative z-0 gap-2">
              {row.map((seat, colIndex) => {
                const isSelected =
                seat &&
                selected?.some(
                  (s) =>
                    s.key === alltrips[active][0] &&
                    s.code === seat.seatNo
                );
              

                const seatClass = seat
                  ? seat.isBooked
                    ? 'bg-red-400' // Booked
                    : isSelected
                    ? 'bg-green-400 hover:bg-green-500 text-white cursor-pointer' // Selected
                    : 'bg-white border border-green-500 text-green hover:bg-gray-100 cursor-pointer' // Available
                  : 'bg-gray-200'; // Empty space

                return (
                  <Tooltip className="z-[1400]" placement="top"
                    key={`${rowIndex}-${colIndex}`}
                    content={seat ? `Seat: ${seat.seatNo}\n₹${seat.amount}` : 'No seat'}
                  >
                    <div
                      onClick={() =>
                        seat && !seat.isBooked && onClick(alltrips[active][0], seat.seatNo, seat.amount, pactive)
                      }
                      className={`w-12 h-12 flex items-center justify-center rounded-md text-sm font-medium ${seatClass}`}
                      title={seat ? `Seat: ${seat.seatNo}\n₹${seat.amount}` : 'No seat'}
                    >
                      {seat ? seat.seatNo : '-'}
                    </div>
                  </Tooltip>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeatMap;
SeatMap.propTypes = {
  seatData : PropTypes.array,
  onClick : PropTypes.func,
  selected : PropTypes.array,
  pinfo : PropTypes.array
}
