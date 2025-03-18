import useBookingData from "./useBookingData";

import BookingForm from "./BookingForm";
import BookingDataTable from "./BookingDataTable"




function BookingPage({ availableTimes, updateAvailableTimes, submitForm }) {
    const [bookingData, setBookingData] = useBookingData();

    return (
        <>
            <section>
                <BookingForm availableTimes={availableTimes} updateAvailableTimes={updateAvailableTimes} bookingData={bookingData} setBookingData={setBookingData} submitForm={submitForm} />
                <BookingDataTable bookingData={bookingData} />
            </section>
        </>
    );
}

export default BookingPage;