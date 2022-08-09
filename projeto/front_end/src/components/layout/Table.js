import styles from './table.module.css';

import PropTypes from 'prop-types';

Table.prototype = {
    column: PropTypes.array,
    operations: PropTypes.array
};

function Table({columns, operations}) {
    return (
        <div className={styles.tableContainer}>
            <table>
                <thead>
                    <tr>
                        {columns.map((column, index) => <th key={index}>{column}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {operations.map((operation, index) => {
                        return (
                            <tr key={index}>
                                <td>{operation.number}</td>
                                <td>{operation.answer}</td>
                                <td>{operation.responseTime}</td>
                                <td>{operation.registrationDate.split('T')[0]}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
