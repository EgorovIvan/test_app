const express = require("express");
const http = require("http")
const pg = require("pg");
const app = express();
const net = require('net');
const {URL} = require('url');
//
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





// Запуск сервера
app.listen(4000, ()=>console.log("Сервер запущен..."));
 

//Запрос данных из таблицы БД
// conn.query("SELECT * FROM public.table", (err, q) => {
//     if (err) throw err;
//
//     let datadb = ''
//     http.createServer(function (req, res) {
//
//
//         console.log("Url: " + req.url);
//         console.log("Тип запроса: " + req.method);
//         console.log("User-Agent: " + req.headers["user-agent"]);
//         console.log("Все заголовки");
//         console.log(req.headers);
//         console.log(q.rows[1]);
//
//
//         res.setHeader("Content-Type", "text/html");
//         res.write("<!DOCTYPE html>");
//         res.write("<html>");
//         res.write("<head>");
//         res.write("<title>Hello Node.js</title>");
//         res.write("<meta charset=\"utf-8\" />");
//         res.write("</head>");
//         res.write("<body><p>[")
//
//         for (let i in q.rows) {
//             datadb = '{' + "<br/>" + '"' + 'id' + '"' + ':' + ' ' + '"' + q.rows[i].id + '"' + ',' + "<br/>" +
//                 '"' + 'date' + '"' + ':' + ' ' +  '"' + q.rows[i].date + '"' + ',' + "<br/>" +
//                 '"' + 'name' + '"' + ':' + ' ' +  '"' + q.rows[i].name + '"' + ',' + "<br/>" +
//                 '"' + 'sum' + '"' + ':' + ' ' +  q.rows[i].sum + ',' + "<br/>" +
//                 '"' + 'distance' + '"' + ':' + ' ' +  q.rows[i].distance + "<br/>" + '}' + ',' + "<br/>";
//             res.write(datadb)
//
//         }
//         res.write("]</p></body>");
//         res.write("</html>");
//         res.end();
//     }).listen(4000, () => console.log("Сервер запущен..."));
//
//
//     conn.end();
// });


