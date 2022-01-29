import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Solution from "./components/UI/Solution";
import Text from "./components/UI/Text";
import Comment from "./components/UI/Comment"
import "./components/UI/css/style.css"


function App() {

    const [statTest, setStateTest] = useState({
        message: [
            {
                "id": 0,
                "date": "init",
                "name": "init",
                "sum": 0,
                "distance": 0
            }]
    });


    useEffect(() => {

        // запрос на сервер
        axios.get('http://localhost:4000').then((res) => {
                const test = res.data
                setStateTest(test)
            }
        )
    }, [setStateTest])


    return (
        <div className="wrapper">

            {/*Компонент текста задачи*/}
            <Text/>

            <div className="container">
                <div className="container-solution">

                    {/*Компонент решения задачи*/}
                    <Solution table={statTest.message}/>
                </div>

                {/*Компонент комментариев*/}
                <Comment/>

            </div>

        </div>

    );

}

export default App;
