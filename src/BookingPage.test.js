import { render, screen } from '@testing-library/react';
import { act } from 'react'

import { BrowserRouter } from "react-router";
import App from './App';

test('Test Booking Page', () => {
    render(<BrowserRouter>
        <App />
    </BrowserRouter>);

    let anchorReservation = document.querySelector('nav:nth-child(2) > ul:nth-child(1) > li:nth-child(4) > a:nth-child(1)');

    act(() => {
        anchorReservation.click();
    });



    const linkElement = screen.getByText(/Book Now!/i);
    expect(linkElement).toBeInTheDocument();
});


test('Test Make Your Reservation', () => {
    render(<BrowserRouter>
        <App />
    </BrowserRouter>);

    let anchorReservation = document.querySelector('nav:nth-child(2) > ul:nth-child(1) > li:nth-child(4) > a:nth-child(1)');

    act(() => {
        anchorReservation.click();
    });

    let buttonReservation = document.querySelector('input[type=submit]');

    act(() => {
        buttonReservation.click();
    });

    const linkElement = screen.getByText(/The reservation has been confirmed!/i);
    expect(linkElement).toBeInTheDocument();
});