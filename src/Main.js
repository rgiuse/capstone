import { Routes, Route, useNavigate  } from "react-router";
import { useReducer} from "react";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";
import ConfirmedBooking from "./ConfirmedBooking.js";

import * as api from './api.js'


function Main(){
    let navigate = useNavigate();
    const [availableTimes, updateAvailableTimes ] = useReducer(updateTimes,new Date(),initializeTimes);

    function updateTimes(state, action){
        return api.fetchAPI(new Date(Date.parse(action.value)));;
    }

    function initializeTimes(date){
        return api.fetchAPI(date);
    }

    function submitForm(formData){

        if (api.submitAPI(formData)){
            navigate('/confirmed');
        }

    }

    return(
        <main>
            <Routes> 
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/booking" element={<BookingPage  availableTimes={availableTimes} updateAvailableTimes={updateAvailableTimes} submitForm={submitForm}/>}></Route>
                <Route path="/confirmed" element={<ConfirmedBooking />}></Route>
            </Routes>
        </main>
    );

}

export default Main;