import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from "@testing-library/user-event";


import { BrowserRouter } from "react-router";
import AboutPage from './AboutPage';

const today = new Date(new Date().toDateString());
const tomorrow = new Date(new Date(Date.now() + 24 * 60 * 60 * 1000).toDateString());
const yesterday = new Date(new Date(Date.now() + 24 * 60 * 60 * 1000).toDateString());

function getFormattedsDate(date) {
    const dateStr = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    return dateStr;
}



test('Test About Page', async () => {
    const user = userEvent.setup()

    render(<AboutPage>
    </AboutPage>);

    const element =  screen.getByTestId('about-page-test-id', {exact: true});
    expect(element).toBeInTheDocument();
});

