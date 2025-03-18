import { useEffect, useState } from "react";

function useBookingData(localStorageKey) {
    //const localStorageKey = 'bookingData';
    const [bookingData, setBookingData] = useState(() => {
        return JSON.parse(localStorage.getItem(localStorageKey)) || []
    });

    useEffect(() => {
        localStorage.setItem(localStorageKey, JSON.stringify(bookingData));
    }, [bookingData, localStorageKey])


    const addBookingData = function (data) {
        if (Array.isArray(data)) {
            setBookingData([...bookingData, ...data]);
        }
        else{
            setBookingData([...bookingData, data]);
        }
           
    }

    const clearBookingData = function () {
        setBookingData([]);
    }

    return [bookingData, addBookingData];
}

export default useBookingData;