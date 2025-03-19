import { renderHook, act } from '@testing-library/react'
import useBookingData from './useBookingData'

test('Test useBookingData hooks', () => {

    localStorage.removeItem('testBookingDataHooks');

    const { result, rerender } = renderHook((localStorageKey) => useBookingData(localStorageKey),{initialProps:'testBookingDataHooks'});

    let [bookingData, addBookingData ] = result.current;
    expect(bookingData).toStrictEqual([]);

    act(() => {
        addBookingData({reservation: "#1"})
    });

    [bookingData, addBookingData ] = result.current;

    expect(bookingData).toStrictEqual([{reservation: "#1"}]);

    act(() => {
        addBookingData({reservation: "#2"})
    });

    [bookingData, addBookingData ] = result.current;

    expect(bookingData).toStrictEqual([{reservation: "#1"},{reservation: "#2"}]);

    localStorage.removeItem('testBookingDataHooks');
});


test('Test useBookingData hooks load from data storage', () => {
    localStorage.removeItem('test1BookingDataHooks');

    const testValue =[{reservation: "#1"},{reservation: "#2"}];

    localStorage.setItem('test1BookingDataHooks',JSON.stringify(testValue))

    const { result, rerender } = renderHook((localStorageKey) => useBookingData(localStorageKey),{initialProps:'test1BookingDataHooks'});

    let [bookingData, addBookingData ] = result.current;
    expect(bookingData).toStrictEqual(testValue);

    act(() => {
        addBookingData({reservation: "#3"})
    });

    [bookingData, addBookingData ] = result.current;

    expect(bookingData).toStrictEqual([...testValue,{reservation: "#3"}]);

    act(() => {
        addBookingData({reservation: "#4"})
    });

    [bookingData, addBookingData ] = result.current;

    expect(bookingData).toStrictEqual([...testValue,{reservation: "#3"},{reservation: "#4"}]);


    localStorage.removeItem('test1BookingDataHooks');


});