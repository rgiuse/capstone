import { useLocation } from "react-router";

function ConfirmedBooking() {

    const reservationStyle = {
        height: '400px',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 'auto',
        flexDirection: 'column',
    }

const location = useLocation();
const reservationNumber = location.state?.reservationNumber ?? '#0';
return (
    <section className="pageSection confirmed">
        <section style={reservationStyle}>
            Your reservation has been confirmed!
            <div>
                {reservationNumber}
            </div>

        </section>
    </section>
);
}

export default ConfirmedBooking;