import { useState } from 'react';
import Screen from './layout/Screen.js';
import NumberForm from './form/NumberForm.js';
import styles from './calculator.module.css';

function Calculator() {

    const [response, setResponse] = useState();
    const [calculationTime, setCalculationTime] = useState();

    function calculate(field){
        fetch("https://backend-bridge-heroku.herokuapp.com/api/add-history",
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({number: field.number})
            }
        )
        .then((resp) => resp.json())
        .then((data) => {
            setResponse(data.answer);
            setCalculationTime(data.responseTime + " ms");
        })
        .catch((error) => console.log(error))
    }

    return (
        <div className={styles.calculatorContainer}>
            <Screen 
                response={response} 
                calculationTime={calculationTime} 
            />
            <NumberForm handleSubmit={calculate} />
        </div>
    );
}

export default Calculator;
