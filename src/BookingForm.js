import { useEffect, useState } from "react";

import { useFormik } from 'formik';
import * as Yup from 'yup';


function BookingForm({ availableTimes, updateAvailableTimes, bookingData, addBookingData, submitForm }) {

    const today = new Date(new Date().toDateString());

    const validationSchema = Yup.object().shape({
        'res-date': Yup.date()
            .min(today, 'Date cannot be earlier than today')
            .required('Date is required'),
        'res-time': Yup.string()
            .required('Time is required')
            .oneOf(availableTimes),
        guests: Yup.number()
            .min(1, 'Min 1 guests is accepted')
            .max(10, 'Max 10 guests are accepted')
            .required('Number of guests is required'),
        occasion: Yup.string()
            .required('Occasion is required'),
    });

    function getFormattedsDate() {
        const dateNow = new Date();
        const dateStr = `${dateNow.getFullYear()}-${String(dateNow.getMonth() + 1).padStart(2, '0')}-${String(dateNow.getDate()).padStart(2, '0')}`;
        return dateStr;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        formik.handleSubmit(e)
    }

    const formik = useFormik({
        initialValues: {
            'res-date': getFormattedsDate(),
            'res-time': '',
            guests: 1,
            occasion: 'Birthday'
        },
        validationSchema: validationSchema,
        onSubmit: async values => {

            const reservationNumber = `#${bookingData.length + 1}`;

            const formData = { reservationNumber, dateValue: formik.values['res-date'], timeValue: formik.values['res-time'], guestsValue: formik.values['guests'], occasionValue: formik.values['occasion'] };
            addBookingData(formData);

            submitForm(formData);

        },
        enableReinitialize: true,
    });

    useEffect(() => {
        formik.setFieldValue('res-time', availableTimes[0]);

    }, [availableTimes, formik.values['res-date'], formik.touched['res-date']])

    const errorStyle = {
        color: 'red',
        fontSize: '16px',
        marginTop: '-1em',
    }

    return (
        <section>
            <h2>Book Now!</h2>
            <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }} onSubmit={handleSubmit}>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" value={formik.values['res-date']} min={getFormattedsDate()}
                    onChange={(e) => {
                        formik.handleChange(e);
                        updateAvailableTimes({ type: 'NEW_DATE', value: e.target.value });
                    }} required />
                {formik.errors["res-date"] && <p style={errorStyle}>{formik.errors["res-date"]}</p>}
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" value={formik.values['res-time']} onChange={(e) => { formik.handleChange(e) }} required>
                    {availableTimes.map(item => <option key={`${formik.values['res-date']}${item}`}>{item}</option>)}
                </select>
                {formik.errors["res-time"] && <p style={errorStyle}>{formik.errors["res-time"]}</p>}
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" value={formik.values['guests']} onChange={(e) => { formik.handleChange(e) }} required />
                {formik.errors["guests"] && <p style={errorStyle}>{formik.errors["guests"]}</p>}
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={formik.values['occasion']} onChange={(e) => { formik.handleChange(e) }} required>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                {formik.errors["occasion"] && <p style={errorStyle}>{formik.errors["occasion"]}</p>}
                <input type="submit" value="Make Your reservation" aria-label="On Click" disabled={formik.isSubmitting || formik.isValidating || !(formik.isValid && formik.dirty)} />
            </form>
        </section>
    );

}
export default BookingForm;