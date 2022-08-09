import Input from './Input.js'
import SubmitButton from './SubmitButton.js';
import styles from './numberForm.module.css';
import { useState } from 'react';

function NumberForm({handleSubmit}){
    const [number, setNumber] = useState("");
    const [isValidNumber, setIsValidNumber] = useState(false);

    function isPositiveNumber(number){
        // Intercepta numero negativos, numeros flutuantes e não números
        for(let i = 0; i < number.length; i++)
            if(isNaN(number.charAt(i)) || number.charAt(i) === ' ')
                return false;
        return true;
    }

    function isOutRange(number){
        // Intercepta numeros fora do range
        // Numero muito fora das restrições ou número muito grande para calcular, pois demorará
        if(number < 3 || 100000000 <= number)
            return true;
        return false;
    }

    function validFieldValue(field){
        let stringInput = field.number;
        let numberInput = Number.parseInt(field.number);
        if(!isPositiveNumber(stringInput))
            return false;
        else if(isOutRange(numberInput))
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
            alert("Número inválido\nOu Fora do range (< 3)\nOu não é número\nOu muito grande (> 10000000)\nOu é float");
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
