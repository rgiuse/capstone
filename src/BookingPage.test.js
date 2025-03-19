import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import { act } from 'react'

import { BrowserRouter } from "react-router";
import App from './App';
import BookingForm from './BookingForm';

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
    const user = userEvent.setup()

    render(<BrowserRouter>
        <App />
    </BrowserRouter>);

    let anchorReservation = document.querySelector('nav:nth-child(2) > ul:nth-child(1) > li:nth-child(4) > a:nth-child(1)');

    await user.click(anchorReservation);
    let buttonReservation = document.querySelector('input[type=submit]');

    await user.click(buttonReservation);

    const confirmElement = screen.getByText('The reservation has been confirmed!');
    expect(confirmElement).toBeInTheDocument();

});