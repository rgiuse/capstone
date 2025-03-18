
function Header({ item }) {
    let row = [];
    for (let celName in item)
        row.push(<div className="bookingTableHeader" key={celName} >{celName}</div>);

    return row;

}


function Row({ item }) {
    let row = [];

    for (let celName in item)
        row.push(<div key={item[celName]} >{item[celName]}</div>);

    return row;

}


function BookingDataTable({ bookingData }) {
    const numRow = bookingData.length;
    let numColumns = (bookingData[0] && Object.keys(bookingData[0]).length) ?? 1;

    const container = {
        display: "grid",
        gridTemplateColumns: `repeat(${numColumns}, 1fr)`,
        gridTemplateRows: `repeat(${numRow}, 1fr)`,
        gridColumnGap: "2px",
        gridRowGap: "2px"
    }

    const rows = bookingData.map((item) =>
        <Row key={item.resevationNumber} item={item} />
    )


    return (
        <>
            <h3>Booking Data</h3>
            <div className="bookingTable"  style={container}>
                {bookingData[0] && <Header item={bookingData[0]} />}
                {rows}
            </div>
        </>
    );

}

export default BookingDataTable;
