import { Routes, Route, useNavigate } from "react-router";
import { useEffect, useReducer, useState } from "react";
import HomePage from "./pages/HomePage.js";
import BookingPage from "./pages/BookingPage.js";
import AboutPage from "./pages/AboutPage.js";
import ConfirmedBooking from "./pages/ConfirmedBooking.js";
import MenuPage from "./pages/MenuPage.js";

import * as api from './api.js'


function Main() {
    let navigate = useNavigate();
    const [date, setDate] = useState(new Date());
    const [availableTimes, updateAvailableTimes] = useReducer(updateTimes, new Date(), initializeTimes);

    function updateTimes(state, action) {
        switch (action.type) {
            case 'INIT_DATE':
                setDate(action.value);
                break;
            case 'NEW_DATE':
                setDate(new Date(Date.parse(action.value)));
                break;
            case 'FETCHED_OK':
                return action.value;
            default:
                return state;
        }
        return state;

    }

    useEffect(() => {
        async function fetchData() {
            let fetchedData = api.fetchAPI(date);
            
            //Test Async
            //await new Promise((callback) => setTimeout(callback, 500));
            
            updateAvailableTimes({ type: 'FETCHED_OK', value: fetchedData });

            //setTimeout(()=> updateAvailableTimes({ type: 'FETCHED_OK', value: fetchedData }), 500  )
        }
        fetchData();
    }, [date])



    function initializeTimes(date) {
        return updateTimes([], { type:'INIT_DATE', value:new Date()})
    }

    function submitForm(formData) {

        if (api.submitAPI(formData)) {
            //console.log(formData);
            navigate('/confirmed', { state: formData });
        }

    }

    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/about" element={<AboutPage />}></Route>
                <Route path="/menu" element={<MenuPage />}></Route>
                <Route path="/booking" element={<BookingPage availableTimes={availableTimes} updateAvailableTimes={updateAvailableTimes} submitForm={submitForm} />}></Route>
                <Route path="/confirmed" element={<ConfirmedBooking />}></Route>
            </Routes>
        </main>
    );

}

export default Main;