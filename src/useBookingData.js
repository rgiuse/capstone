import { useEffect, useState } from "react";

function useBookingData() {
    const localStorageKey = 'bookingData';
    const [bookingData, setBookingData] = useState(() => {
        return JSON.parse(localStorage.getItem(localStorageKey)) || []
    });

    useEffect(() => {
        localStorage.setItem(localStorageKey, JSON.stringify(bookingData));
    }, [bookingData])

    return [bookingData, setBookingData];
}

export default useBookingData;