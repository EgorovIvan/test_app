import React from 'react'
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const Table = ({tableFlt}) => {

    return (
        <div className="table">

            {/*Компонент с заголовками стобцов*/}
            <TableHeader/>

            {/*Создание компонентов строк и ввод в них данных*/}
            {tableFlt.map((table) =>
                <TableRow key={table.id} table={table}/>
            )}
        </div>
    )
}

export default Table