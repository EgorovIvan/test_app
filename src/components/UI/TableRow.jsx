import React from 'react'

const TableRow = ({table}) => {

    const {date, name, sum, distance} = table

    return (

        // Тело ввода данных в ячейки строки
        <div className="table-header">
            <div className="table-cell">{date.substr(0, 10)}</div>
            <div className="table-cell">{name}</div>
            <div className="table-cell">{sum}</div>
            <div className="table-cell">{distance}</div>
        </div>
    )
}

export default TableRow