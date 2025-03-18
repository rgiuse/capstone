import { render, screen } from "@testing-library/react";
import { useReducer } from "react";
import BookingForm from './BookingForm';
import * as api from './api.js'

test('Renders the BookingForm heading', () => {


        function updateTimes(state, action){
            //console.log(action, state);
            // eslint-disable-next-line no-undef 
            return api.fetchAPI(new Date(Date.parse(action.value)));;
        }
    
        function initializeTimes(date){
            // eslint-disable-next-line no-undef 
            return api.fetchAPI(date);
        }
   
    render(<BookingForm  availableTimes={initializeTimes(new Date ())} updateAvailableTimes={updateTimes} />);
    const headingElement = screen.getByText("Book Now!");
    expect(headingElement).toBeInTheDocument();
})

test('Test initializeTimes and updateTimes',()=>{

    function getFormattedsDate() {
        const dateNow = new Date();
        const dateStr = `${dateNow.getFullYear()}-${String(dateNow.getMonth() + 1).padStart(2, '0')}-${String(dateNow.getDate()).padStart(2, '0')}`;
        return dateStr;
    }

    function updateTimes(state, action){
        return api.fetchAPI(new Date(Date.parse(action.value)));;
    }

    function initializeTimes(date){
        return api.fetchAPI(date);
    }

    let state = initializeTimes(new Date());

    expect(state).toStrictEqual(updateTimes(state, {value: getFormattedsDate() }))


})