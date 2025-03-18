function BookingDataTable({ bookingData }) {


    const numRow = bookingData.length;
    const container = {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridTemplateRows: `repeat(${numRow}, 1fr)`,
        gridColumnGap: "2px",
        gridRowGap: "2px"
    }


    const genRow = (item) => {

        let row = [];

        for (let name in item)
            row.push(<div>{item[name]}</div>);

        return row;

    }

    const rows = bookingData.map((item) =>
        <>
            {genRow(item)}
        </>
    )


    return (
        <>
            <h3>Booking Data</h3>
            <div style={container}>
                {rows}
            </div>
        </>
    );

}

export default BookingDataTable;
