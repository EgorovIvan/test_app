import React, {useState} from 'react'
import Table from "./Table";



const Solution = ({table}) => {

    const [addFilter, setAddFilter] = useState('')
    const [selectFrom, setSelectFrom] = useState('')
    const [selectCond, setSelectCond] = useState('')
    const [page, setPage] = useState('1')

    //Функция по фильтрации данных в таблице
    const filterByFunc = () => {


        switch (selectFrom) {
            case 'name':

                //Функция фильтрации по столбцу "Название"
                const nameByFunc = () => {
                    switch (selectCond) {
                        case 'content':
                            return table.filter(item => item.name.toLowerCase().indexOf(addFilter.toLowerCase()) >= 0)
                        default:
                            return table
                    }
                }
                return nameByFunc()
            case 'sum':

                //Функция фильтрации по столбцу "Количество"
                const sumByFunc = () => {
                    switch (selectCond) {
                        //Фильтрация "равно"
                        case 'equals':
                            return table.filter(item => item.sum == addFilter)
                        //Фильтрация по содержимому
                        case 'content':
                            return table.filter(item => item.sum.toString().toLowerCase().indexOf(addFilter.toLowerCase()) >= 0)
                        //Фильтрация "больше"
                        case 'more':
                            return table.filter(item => item.sum > addFilter)
                        //Фильтрация "меньше"
                        case 'less':
                            return table.filter(item => item.sum < addFilter)
                        default:
                            return table
                    }
                }
                return sumByFunc()
            case 'distance':

                //Функция фильтрации по столбцу "Расстояние"
                const distByfunc = () => {
                    switch (selectCond) {
                        case 'equals':
                            return table.filter(item => item.distance == addFilter)
                        case 'content':
                            return table.filter(item => item.distance.toString().toLowerCase().indexOf(addFilter.toLowerCase()) >= 0)
                        case 'more':
                            return table.filter(item => item.distance > addFilter)
                        case 'less':
                            return table.filter(item => item.distance < addFilter)
                        default:
                            return table
                    }
                }
                return distByfunc()
            default:
                return table
        }
    }

    //вычисляем количество страниц
    const sumPage = Math.trunc((filterByFunc().length) / 12) + 1

    //Заполняем массив для отображения создания нескольких button
    const arrayPage = () => {
        const array = []
        for (let i = 0; i < sumPage; i++ ) {
            array.push(i + 1)
        }
        return array
    }

    //Данные таблицы выводимые на страницу после фильтрации
    const tableVision = filterByFunc().slice((page - 1) * 12, 12 * page)

    return (
        <div>

            {/*Тело фильтрации*/}
            <div className="filter">
                <div className="filter-item">Фильтрация:</div>
                <select className="filter-item" name="column" id="1"
                        value={selectFrom} onChange={event => setSelectFrom(event.target.value)}>
                    <option value="" >Выберите столбец...</option>
                    <option value="name">Название</option>
                    <option value="sum">Количество</option>
                    <option value="distance">Расстояние</option>
                </select>
                <select className="filter-item" name="condition" id="2"
                        value={selectCond} onChange={event => setSelectCond(event.target.value)}>>
                    <option value="" disabled selected hidden>Выберите фильтр...</option>
                    <option value="equals">равно...</option>
                    <option value="content">содержимое...</option>
                    <option value="more">больше...</option>
                    <option value="less">меньше...</option>
                </select>
                <input className="filter-item"
                       type="text"
                       placeholder="Введите данные..."
                       value={addFilter}
                       onChange={event => setAddFilter(event.target.value)}/>
            </div>
            <div className="container-table">

                {/*Компонент таблицы БД*/}
                <Table tableFlt={tableVision}/>
            </div>

            {/*Создание кнопок пагинации*/}
            <div className="container-button">
                {arrayPage().map((item, i) =>
                    <button className="button-page" name={i+1}
                            onClick={e => setPage(e.target.name)} key={i}>{i + 1}
                    </button>
                )}
            </div>
        </div>
    )
}

export default Solution