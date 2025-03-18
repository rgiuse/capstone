import { useState } from "react";


function BookingForm({ availableTimes, updateAvailableTimes, bookingData, setBookingData, submitForm }) {

    function getFormattedsDate() {
        const dateNow = new Date();
        const dateStr = `${dateNow.getFullYear()}-${String(dateNow.getMonth() + 1).padStart(2, '0')}-${String(dateNow.getDate()).padStart(2, '0')}`;
        return dateStr;
    }


    const [dateValue, setDateValue] = useState(getFormattedsDate());
    const [timeValue, setTimeValue] = useState(availableTimes[0]);
    const [guestsValue, setGuestsValue] = useState(1);
    const [occasionValue, setOccasionValue] = useState('Birthday');

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedBookingData = [...bookingData, { dateValue, timeValue, guestsValue, occasionValue }];
        setBookingData(updatedBookingData);

        console.log('Form submitted:', updatedBookingData);
        submitForm(updatedBookingData);
    }
    return (
        <>
            <h2>Book Now!</h2>
            <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }} onSubmit={handleSubmit}>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" value={dateValue} onChange={(e) => { setDateValue(e.target.value); updateAvailableTimes({ type: 'changed_data', value: e.target.value }); }} />
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time " value={timeValue} onChange={(e) => { setTimeValue(e.target.value) }}>
                    {availableTimes.map(item => <option key={item}  >{item}</option>)}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" value={guestsValue} onChange={(e) => { setGuestsValue(e.target.value) }} />
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={occasionValue} onChange={(e) => { setOccasionValue(e.target.value) }}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input type="submit" value="Make Your reservation" />
            </form>
        </>
    );

}
export default BookingForm;