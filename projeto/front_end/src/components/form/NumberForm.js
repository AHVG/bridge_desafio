import Input from './Input.js'
import SubmitButton from './SubmitButton.js';
import styles from './numberForm.module.css';
import { useState } from 'react';

function NumberForm({handleSubmit}){
    const [number, setNumber] = useState("");
    const [isValidNumber, setIsValidNumber] = useState(false);

    function validFieldValue(field){
        let stringInput = field.number;
        let numberInput = Number.parseInt(field.number);
        if(isNaN(numberInput))
            return false;
        else if(stringInput.includes('.'))
            return false;
        else if(numberInput < 3 || 100000000 <= numberInput)
            return false
        return true;
    }

    function submit(event) {
        event.preventDefault();
        if(validFieldValue(number))
        {
            handleSubmit(number);
            setIsValidNumber(true);
        }
        else{
            alert("Número inválido\nOu está fora do range (< 3)\nOu não é número\nOu muito grande (> 10000000)");
            setIsValidNumber(false);
        }
    }

    function handleChange(e){
        setNumber({ ...number, [e.target.name]: e.target.value});
    }

    return (
        <form onSubmit={submit} className={styles.numberFormContainer}>
            <Input 
                type="text"
                text={isValidNumber ? "Numero válido" : "Numero inválido"}
                name="number"
                placeholder="Insira um numero"
                handleOnChange={handleChange}
            />
            <SubmitButton text="calcular" />
        </form>
    );
}

export default NumberForm;
