
function Header({ item }) {
    let row = [];
    for (let cellName in item)
        row.push(<div className="bookingTableHeader" key={cellName} >{cellName}</div>);

    return row;

}


function Row({ item }) {
    let row = [];
    for (let cellName in item)
        row.push(<div key={`${cellName}${item[cellName]}`} >{item[cellName]}</div>);
    return <>{row}</>;

}


function BookingDataTable({ bookingData }) {
    const numRow = bookingData.length;
    let numColumns = (bookingData[0] && Object.keys(bookingData[0]).length) ?? 1;

    const container = {
        display: "grid",
        gridTemplateColumns: `repeat(${numColumns}, 1fr)`,
        gridTemplateRows: `1.5fr repeat(${numRow}, 1fr)`,
        gridColumnGap: "2px",
        gridRowGap: "2px"
    }

    const rows = bookingData.map((item) =>
        <Row key={item.reservationNumber} item={item} />
    )


    return (
        <section className="bookingDataTable">
            <h3>Booking Data</h3>
            <div className="bookingTable"  style={container}>
                {bookingData[0] && <Header key="header" item={bookingData[0]} />}
                {rows}
            </div>
            {numRow === 0 && <div>No Data</div> }

        </section>
    );

}

export default BookingDataTable;
