import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from "@testing-library/user-event";


import { BrowserRouter } from "react-router";
import App from '../App';

const today = new Date(new Date().toDateString());
const tomorrow = new Date(new Date(Date.now() + 24 * 60 * 60 * 1000).toDateString());
const yesterday = new Date(new Date(Date.now() + 24 * 60 * 60 * 1000).toDateString());

function getFormattedsDate(date) {
    const dateStr = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    return dateStr;
}



test('Test Booking Page', async () => {

    const user = userEvent.setup()

    render(<BrowserRouter>
        <App />
    </BrowserRouter>);

    let anchorReservation = document.querySelector('nav:nth-child(2) > ul:nth-child(1) > li:nth-child(4) > a:nth-child(1)');

    await user.click(anchorReservation);

    const bookNowElement = screen.getByText('Book Now!');
    expect(bookNowElement).toBeInTheDocument();
});


test('Test Make Your Reservation', async () => {
    //jest.useFakeTimers()
    //const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime })
    const user = userEvent.setup()
    render(<BrowserRouter>
        <App />
    </BrowserRouter>);

    let anchorReservation = document.querySelector('nav:nth-child(2) > ul:nth-child(1) > li:nth-child(4) > a:nth-child(1)');

    const resDateElement = screen.getByLabelText('Choose date');
    const resTimeElement = screen.getByLabelText('Choose time');
    const guestsElement = screen.getByLabelText('Number of guests');
    const occasionElement = screen.getByLabelText('Occasion');

    await user.click(anchorReservation);
    fireEvent.change(resDateElement, { target: { value: getFormattedsDate(tomorrow) } });
    expect(resDateElement.getAttribute('value')).toEqual(getFormattedsDate(tomorrow));

    // await user.selectOptions(resTimeElement, '17:30');
    // expect(screen.getByRole('option', { name: '17:30' }).selected).toBe(true)
    fireEvent.change(resTimeElement, { target: { value: '17:00'} });

    fireEvent.change(guestsElement, { target: { value: '5' } });
    expect(guestsElement.getAttribute('value')).toEqual('5');

    await user.selectOptions(occasionElement, 'Anniversary');
    expect(screen.getByRole('option', { name: 'Anniversary' }).selected).toBe(true)


    let buttonReservation = document.querySelector('input[type=submit]');

    await user.click(buttonReservation);


    const confirmElement = screen.getByText('Your reservation has been confirmed!');
    //console.log(confirmElement);
    expect(confirmElement).toBeInTheDocument();

});