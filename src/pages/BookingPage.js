import useBookingData from "../hooks/useBookingData";

import BookingForm from "../components/BookingForm";
import BookingDataTable from "../components/BookingDataTable"


function BookingPage({ availableTimes, updateAvailableTimes, submitForm }) {
    const localStorageKey = 'bookingData';
    const [bookingData, addBookingData] = useBookingData(localStorageKey);

    return (
        <>
            <section className="pageSection booking">
                <BookingForm availableTimes={availableTimes} updateAvailableTimes={updateAvailableTimes} bookingData={bookingData} addBookingData={addBookingData} submitForm={submitForm} />
                <BookingDataTable bookingData={bookingData} />
            </section>
        </>
    );
}

export default BookingPage;