import { useState } from "react";
import {
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Button,
    IconButton,
} from "@material-tailwind/react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const getMonthYearArray = () => {
    const today = new Date();
    const months = [];
    for (let i = 0; i < 12; i++) {
        const date = new Date(today.getFullYear(), today.getMonth() + i, 1);
        months.push({ month: date.getMonth(), year: date.getFullYear() });
    }
    return months;
};

const getDaysArray = (month, year) => {
    const firstDay = new Date(year, month, 1);
    const days = [];
    const totalDays = new Date(year, month + 1, 0).getDate();
    const emptySlots = firstDay.getDay();
    for (let i = 0; i < emptySlots; i++) days.push(null);
    for (let d = 1; d <= totalDays; d++) days.push(new Date(year, month, d));
    return days;
};

const isSameDay = (date1, date2) =>
    date1 && date2 &&
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate();

const isInRange = (date, start, end) =>
    start && end && date > start && date < end;

const CalendarPopup = ({open, toggleDialog,startDate,endDate,  handleDateClick}) => {
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const months = getMonthYearArray();
    const visibleMonths = months.slice(currentIndex, currentIndex + 2);
    const handleNext = () => {
        if (currentIndex + 2 < months.length) setCurrentIndex(currentIndex + 1);
    };

    const handlePrev = () => {
        if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
    };

   

    const getDateClass = (date) => {
        if (!date) return "";

        const isStart = isSameDay(date, startDate);
        const isEnd = isSameDay(date, endDate);
        const inRange = isInRange(date, startDate, endDate);

        if (isStart && isEnd) return "bg-blue-500 text-white";
        if (isStart) return "bg-blue-500 text-white rounded-l-full";
        if (isEnd) return "bg-blue-500 text-white rounded-r-full";
        if (inRange) return "bg-blue-100 text-blue-700";

        return "hover:bg-blue-50";
    };

    return (
        <>
            

            <Dialog open={open} handler={toggleDialog} size="lg">
                <DialogHeader className="justify-between items-center">
                    <div className="flex gap-2 items-center">
                        <IconButton onClick={handlePrev} disabled={currentIndex === 0} size="sm" variant="outlined">
                            <MdChevronLeft className="h-5 w-5" />
                        </IconButton>
                        <IconButton
                            onClick={handleNext}
                            disabled={currentIndex + 2 >= months.length}
                            size="sm"
                            variant="outlined"
                        >
                            <MdChevronRight className="h-5 w-5" />
                        </IconButton>
                    </div>
                    <div className=" hidden flex-col text-sm">
                        <span><strong>From:</strong> {startDate ? startDate.toDateString() : '—'}</span>
                        <span><strong>To:</strong> {endDate ? endDate.toDateString() : '—'}</span>
                    </div>
                </DialogHeader>

                <DialogBody className="grid grid-cols-2 gap-3 p-0 h-[300px] overflow-y-auto">
                    {visibleMonths.map(({ month, year }) => {
                        const days = getDaysArray(month, year);
                        return (
                            <div key={`${month}-${year}`} className="border p-4 rounded shadow-sm">
                                <h2 className="text-center text-md font-semibold mb-2">
                                    {new Date(year, month).toLocaleString("default", {
                                        month: "long",
                                        year: "numeric",
                                    })}
                                </h2>

                                <div className="grid grid-cols-7 text-xs text-gray-500 mb-1">
                                    {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                                        <div key={day} className="text-center font-medium">{day}</div>
                                    ))}
                                </div>

                                <div className="grid grid-cols-7 gap-1">
                                    {days.map((date, index) =>
                                        date ? (
                                            <div
                                                key={index}
                                                onClick={() => handleDateClick(date)}
                                                className={`w-8 h-8 flex items-center justify-center rounded-md text-sm cursor-pointer ${getDateClass(date)}`}
                                            >
                                                {date.getDate()}
                                            </div>
                                        ) : (
                                            <div key={index}></div>
                                        )
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </DialogBody>

                <DialogFooter>
                    <Button variant="text" onClick={toggleDialog}>Cancel</Button>
                    <Button
                        variant="gradient"
                        color="blue"
                        onClick={() => {
                            if (startDate && endDate) {
                                console.log("Selected Range:", startDate, "to", endDate);
                            }
                            toggleDialog();
                        }}
                        disabled={!startDate || !endDate}
                    >
                        Confirm
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
};

export default CalendarPopup;
