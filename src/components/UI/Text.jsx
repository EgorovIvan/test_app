import React from 'react'


const Text = () => {

    return (
        <div className="text-task">
                Тестовое задание web-программист (React.js)<br/>
                    <hr/>
            Нужно разработать таблицу в формате Single Page Application.<br/>
                <br/>
            **Требования к таблице.**<br/>
                <br/>
            1. Таблица должна содержать 4 колонки:<br/>
            1. Дата<br/>
            2. Название<br/>
            3. Количество<br/>
            4. Расстояние<br/>
            2. База данных может быть PostgreSQL<br/>
            3. Таблица должна иметь сортировку по всем полям кроме даты. Фильтрация должна быть в виде двух выпадающих
            списков и текстового поля:<br/>
            1. Выбор колонки, по которой будет фильтрация<br/>
            2. Выбор условия (равно, содержить, больше, меньше)<br/>
            3. Поле для ввода значения для фильтрации<br/>
            4. Таблица должна содержать пагинацию<br/>
                <br/>
            Вся таблица должна работать без перезагрузки страницы.<br/>
                <br/>
            **Можно использовать:**<br/>
                <br/>
            - Возможности node.js<br/>
            - React/Axios<br/>
            - css библиотеки<br/>
                <br/>
            **Нельзя использовать:**<br/>
                <br/>
            - Библиотеки с готовыми компонентами или плагины для React, которые<br/>
                <br/>
            предоставляют готовый функционал, требуемый в задании<br/>
                <br/>
            - Библиотеки и плагины для валидации<br/>
            - Библиотеки и плагины для работы с БД, ORM<br/>
            - CMS системы<br/>
                <br/>
            **Критерии оценки:**<br/>
                <br/>
            - Работоспособность согласно ТЗ<br/>
            - Архитектура решения<br/>
            - Удобство чтения кода и комментарии<br/>
            - Удобство проверки<br/>
        </div>
    )
}

export default Text