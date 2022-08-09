import Text from './layout/Text.js';
import Table from './layout/Table.js';
import styles from './operationsHistory.module.css';
import UpdateForm from './form/UpdateForm.js';
import { useState } from 'react';

function OperationsHistory() {
    const [operations, setOperations] = useState([]);

    function acessHistory(){
        fetch("https://backend-bridge-heroku.herokuapp.com/api/access-history")
        .then((resp) => resp.json())
        .then((data) => setOperations(data))
        .catch((error) => console.log(error));
    }

    return (
        <div className={styles.operationsHistoryContainer}>
            <Text title="Histórico" text="Cálculos realizadas"/>
            <Table 
                columns={["Número", "Resultado", "Tempo (ms)", "Data"]}
                operations={operations}
            />
            <UpdateForm handleUpdate={acessHistory}/>
        </div>
    );
}

export default OperationsHistory;