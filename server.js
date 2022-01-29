const express = require("express");
const pg = require("pg");
const app = express();

//Данные подключения к БД
const config = {
    host: "localhost",
    port: "5432",
    user: "postgres",
    database: "table",
    password: "123456"
};

const conn = new pg.Client(config);

//Проверка на ошибки соединения с БД
conn.connect((err) => {
    if (err) throw err;
});

//Запрос данных из таблицы БД
conn.query("SELECT * FROM public.table", (err, q) => {
    if (err) throw err;

    //Выгрузка данных на сервер
    app.get('*', (req, res) => res.status(200).send({
        message: q.rows,
    }));
    conn.end();
});

//Запуск сервера
app.listen(4000, ()=>console.log("Сервер запущен..."));