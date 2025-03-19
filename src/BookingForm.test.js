
import * as api from './api.js'
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import { act } from 'react'

import { BrowserRouter } from "react-router";
import App from './App';
import BookingForm from './BookingForm';

const today = new Date(new Date().toDateString());
const tomorrow = new Date(new Date(Date.now() + 24 * 60 * 60 * 1000).toDateString());
const yesterday = new Date(new Date(Date.now() - 24 * 60 * 60 * 1000).toDateString());

function getFormattedsDate(date) {
    //const dateNow = new Date();
    const dateStr = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    return dateStr;
}



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

test('Test HTML5 validation is applied', async () => {
    const user = userEvent.setup()

    const availableTimes = ['17:30', '18:00', '19:00'];
    const updateAvailableTimes = jest.fn();
    const bookingData = []
    const addBookingData = jest.fn();
    const submitForm = jest.fn();


    render(
        <BookingForm availableTimes={availableTimes} updateAvailableTimes={updateAvailableTimes} bookingData={bookingData} addBookingData={addBookingData} submitForm={submitForm} />
    );


    const resDateElement = screen.getByLabelText('Choose date');
    const resTimeElement = screen.getByLabelText('Choose time');
    const guestsElement = screen.getByLabelText('Number of guests');
    const occasionElement = screen.getByLabelText('Occasion');

    const buttonReservation = screen.getByText('Make Your reservation')


    expect(resTimeElement.length).toBe(3)

    expect(occasionElement.length).toBe(2)

    expect(resDateElement.getAttribute('min')).toEqual(getFormattedsDate(today));
    expect(resDateElement.getAttribute('required')).toEqual('');

    expect(resTimeElement.getAttribute('required')).toEqual('');
    expect(guestsElement.getAttribute('required')).toEqual('');
    expect(guestsElement.getAttribute('min')).toEqual('1');
    expect(guestsElement.getAttribute('max')).toEqual('10');

    expect(occasionElement.getAttribute('required')).toEqual('');

});

test('Test Javascript Validation All Valid', async () => {
    const user = userEvent.setup()

    const availableTimes = ['17:30', '18:00', '19:00'];
    const updateAvailableTimes = jest.fn();
    const bookingData = []
    const addBookingData = jest.fn();
    const submitForm = jest.fn();


    render(
        <BookingForm availableTimes={availableTimes} updateAvailableTimes={updateAvailableTimes} bookingData={bookingData} addBookingData={addBookingData} submitForm={submitForm} />
    );


    const resDateElement = screen.getByLabelText('Choose date');
    const resTimeElement = screen.getByLabelText('Choose time');
    const guestsElement = screen.getByLabelText('Number of guests');
    const occasionElement = screen.getByLabelText('Occasion');

    const buttonReservation = screen.getByText('Make Your reservation')


    expect(resTimeElement.length).toBe(3)

    expect(occasionElement.length).toBe(2)


  


    fireEvent.change(resDateElement, { target: { value: getFormattedsDate(tomorrow) } });

    expect(resDateElement.getAttribute('value')).toEqual(getFormattedsDate(tomorrow));
    // fireEvent.change(resDateElement, { target: { value: getFormattedsDate(yesterday) } });

    // expect(resDateElement.getAttribute('value')).toEqual(getFormattedsDate(yesterday));


    await user.selectOptions(resTimeElement, '17:30');
    expect(screen.getByRole('option', { name: '17:30' }).selected).toBe(true)

    fireEvent.change(guestsElement, { target: { value: '5' } });
    expect(guestsElement.getAttribute('value')).toEqual('5');

    await user.selectOptions(occasionElement, 'Anniversary');
    expect(screen.getByRole('option', { name: 'Anniversary' }).selected).toBe(true)


    //Check Button is not disabled
    expect(buttonReservation.getAttribute('disabled')).toEqual(null);

    //Click Button
    await user.click(buttonReservation);

    //Call to get new availableTimes
    expect(updateAvailableTimes).toHaveBeenCalled();


    //Call when form isValid
    expect(addBookingData).toHaveBeenCalled();
    expect(submitForm).toHaveBeenCalled();

});


test('Test Javascript Validation invalid', async () => {
    const user = userEvent.setup()

    let availableTimes = ['17:30', '18:00', '19:00'];
    const updateAvailableTimes = jest.fn();
    const bookingData = []
    const addBookingData = jest.fn();
    const submitForm = jest.fn();


    render(
        <BookingForm availableTimes={availableTimes} updateAvailableTimes={updateAvailableTimes} bookingData={bookingData} addBookingData={addBookingData} submitForm={submitForm} />
    );


    const resDateElement = screen.getByLabelText('Choose date');
    const resTimeElement = screen.getByLabelText('Choose time');
    const guestsElement = screen.getByLabelText('Number of guests');
    const occasionElement = screen.getByLabelText('Occasion');

    const buttonReservation = screen.getByText('Make Your reservation')


    expect(resTimeElement.length).toBe(3)

    expect(occasionElement.length).toBe(2)


  

    // Set a valid form
    fireEvent.change(resDateElement, { target: { value: getFormattedsDate(tomorrow) } });
    expect(resDateElement.getAttribute('value')).toEqual(getFormattedsDate(tomorrow));

    //Call to get new availableTimes
    expect(updateAvailableTimes).toHaveBeenCalled();

    await user.selectOptions(resTimeElement, '17:30');
    expect(screen.getByRole('option', { name: '17:30' }).selected).toBe(true)

    fireEvent.change(guestsElement, { target: { value: '5' } });
    expect(guestsElement.getAttribute('value')).toEqual('5');

    await user.selectOptions(occasionElement, 'Anniversary');
    expect(screen.getByRole('option', { name: 'Anniversary' }).selected).toBe(true)
    // end set a valid form

    //Set invalid yesterday
    fireEvent.change(resDateElement, { target: { value: getFormattedsDate(yesterday) } });
    expect(resDateElement.getAttribute('value')).toEqual(getFormattedsDate(yesterday));

    //Check Button is disabled
    expect(buttonReservation.getAttribute('disabled')).toEqual('');

    //Click Button
    await user.click(buttonReservation);

    //Call when form isValid
    expect(addBookingData).not.toHaveBeenCalled();
    expect(submitForm).not.toHaveBeenCalled();

    //Set invalid datew
    fireEvent.change(resDateElement, { target: { value: '' } });
    expect(resDateElement.getAttribute('value')).toEqual('');

    //Check Button is disabled
    expect(buttonReservation.getAttribute('disabled')).toEqual('');

    //Click Button
    await user.click(buttonReservation);

    //Call when form isValid
    expect(addBookingData).not.toHaveBeenCalled();
    expect(submitForm).not.toHaveBeenCalled();

    // Set valid Date
    fireEvent.change(resDateElement, { target: { value: getFormattedsDate(tomorrow) } });
    expect(resDateElement.getAttribute('value')).toEqual(getFormattedsDate(tomorrow));

     //Click Button
     await user.click(buttonReservation);
 
     //Call when form isValid
     expect(addBookingData).toHaveBeenCalled();
     expect(submitForm).toHaveBeenCalled();

});


test('Test Javascript Validation invalid no available times', async () => {
    const user = userEvent.setup()

    let availableTimes = [];
    const updateAvailableTimes = jest.fn();
    const bookingData = []
    const addBookingData = jest.fn();
    const submitForm = jest.fn();


    render(
        <BookingForm availableTimes={availableTimes} updateAvailableTimes={updateAvailableTimes} bookingData={bookingData} addBookingData={addBookingData} submitForm={submitForm} />
    );


    const resDateElement = screen.getByLabelText('Choose date');
    const resTimeElement = screen.getByLabelText('Choose time');
    const guestsElement = screen.getByLabelText('Number of guests');
    const occasionElement = screen.getByLabelText('Occasion');

    const buttonReservation = screen.getByText('Make Your reservation')


    expect(resTimeElement.length).toBe(0)

    expect(occasionElement.length).toBe(2)


  

    // Set a valid form
    fireEvent.change(resDateElement, { target: { value: getFormattedsDate(tomorrow) } });
    expect(resDateElement.getAttribute('value')).toEqual(getFormattedsDate(tomorrow));

    //Call to get new availableTimes
    expect(updateAvailableTimes).toHaveBeenCalled();

    // await user.selectOptions(resTimeElement, '17:30');
    // expect(screen.getByRole('option', { name: '17:30' }).selected).toBe(true)

    fireEvent.change(guestsElement, { target: { value: '5' } });
    expect(guestsElement.getAttribute('value')).toEqual('5');

    await user.selectOptions(occasionElement, 'Anniversary');
    expect(screen.getByRole('option', { name: 'Anniversary' }).selected).toBe(true)
    // end set a valid form

    //Check Button is disabled
    expect(buttonReservation.getAttribute('disabled')).toEqual('');

    //Click Button
    await user.click(buttonReservation);

    //Call when form isValid
    expect(addBookingData).not.toHaveBeenCalled();
    expect(submitForm).not.toHaveBeenCalled();

});


test('Test Javascript Validation invalid guests', async () => {
    const user = userEvent.setup()

    let availableTimes = ['17:30', '18:00', '19:00'];
    const updateAvailableTimes = jest.fn();
    const bookingData = []
    const addBookingData = jest.fn();
    const submitForm = jest.fn();


    render(
        <BookingForm availableTimes={availableTimes} updateAvailableTimes={updateAvailableTimes} bookingData={bookingData} addBookingData={addBookingData} submitForm={submitForm} />
    );


    const resDateElement = screen.getByLabelText('Choose date');
    const resTimeElement = screen.getByLabelText('Choose time');
    const guestsElement = screen.getByLabelText('Number of guests');
    const occasionElement = screen.getByLabelText('Occasion');

    const buttonReservation = screen.getByText('Make Your reservation')


    expect(resTimeElement.length).toBe(3)

    expect(occasionElement.length).toBe(2)


    // Set a valid form
    fireEvent.change(resDateElement, { target: { value: getFormattedsDate(tomorrow) } });
    expect(resDateElement.getAttribute('value')).toEqual(getFormattedsDate(tomorrow));

    //Call to get new availableTimes
    expect(updateAvailableTimes).toHaveBeenCalled();

    await user.selectOptions(resTimeElement, '17:30');
    expect(screen.getByRole('option', { name: '17:30' }).selected).toBe(true)

    fireEvent.change(guestsElement, { target: { value: '5' } });
    expect(guestsElement.getAttribute('value')).toEqual('5');

    await user.selectOptions(occasionElement, 'Anniversary');
    expect(screen.getByRole('option', { name: 'Anniversary' }).selected).toBe(true)
    // end set a valid form

    //Set invalid guests
    fireEvent.change(guestsElement, { target: { value: '-5' } });
    expect(guestsElement.getAttribute('value')).toEqual('-5');

    //Check Button is disabled
    expect(buttonReservation.getAttribute('disabled')).toEqual('');

    //Click Button
    await user.click(buttonReservation);

    //Call when form isValid
    expect(addBookingData).not.toHaveBeenCalled();
    expect(submitForm).not.toHaveBeenCalled();


    //Set invalid guests
    fireEvent.change(guestsElement, { target: { value: '11' } });
    expect(guestsElement.getAttribute('value')).toEqual('11');

    //Check Button is disabled
    expect(buttonReservation.getAttribute('disabled')).toEqual('');

    //Click Button
    await user.click(buttonReservation);

    //Call when form isValid
    expect(addBookingData).not.toHaveBeenCalled();
    expect(submitForm).not.toHaveBeenCalled();

    //Set valid guests
    fireEvent.change(guestsElement, { target: { value: '7' } });
    expect(guestsElement.getAttribute('value')).toEqual('7');


     //Click Button
     await user.click(buttonReservation);
 
     //Call when form isValid
     expect(addBookingData).toHaveBeenCalled();
     expect(submitForm).toHaveBeenCalled();

});


test('Test Javascript Validation invalid no occasion', async () => {
    const user = userEvent.setup()

    const availableTimes = ['17:30', '18:00', '19:00'];
    const updateAvailableTimes = jest.fn();
    const bookingData = []
    const addBookingData = jest.fn();
    const submitForm = jest.fn();


    render(
        <BookingForm availableTimes={availableTimes} updateAvailableTimes={updateAvailableTimes} bookingData={bookingData} addBookingData={addBookingData} submitForm={submitForm} />
    );


    const resDateElement = screen.getByLabelText('Choose date');
    const resTimeElement = screen.getByLabelText('Choose time');
    const guestsElement = screen.getByLabelText('Number of guests');
    const occasionElement = screen.getByLabelText('Occasion');

    const buttonReservation = screen.getByText('Make Your reservation')


    expect(resTimeElement.length).toBe(3)

    expect(occasionElement.length).toBe(2)


    fireEvent.change(resDateElement, { target: { value: getFormattedsDate(tomorrow) } });
    expect(resDateElement.getAttribute('value')).toEqual(getFormattedsDate(tomorrow));


    await user.selectOptions(resTimeElement, '17:30');
    expect(screen.getByRole('option', { name: '17:30' }).selected).toBe(true)

    fireEvent.change(guestsElement, { target: { value: '5' } });
    expect(guestsElement.getAttribute('value')).toEqual('5');

    fireEvent.change(occasionElement, { target: { value: '' } });
    expect(occasionElement.getAttribute('value')).toEqual(null);


    //Check Button is disabled
    expect(buttonReservation.getAttribute('disabled')).toEqual('');

    //Click Button
    await user.click(buttonReservation);

    //Call to get new availableTimes
    expect(updateAvailableTimes).toHaveBeenCalled();


    //Call when form isValid
    expect(addBookingData).not.toHaveBeenCalled();
    expect(submitForm).not.toHaveBeenCalled();

});



