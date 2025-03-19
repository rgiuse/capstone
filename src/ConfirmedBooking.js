import { useLocation } from "react-router";

function ConfirmedBooking(){
    const location = useLocation();
    const reservationNumber = location.state?.reservationNumber ?? '#0';
    return (
        <section className="pageSection confirmed">
            <section>
            The reservation has been confirmed!
            <div>
            {reservationNumber}
            </div>

            </section>
        </section>
    );
}

export default ConfirmedBooking;