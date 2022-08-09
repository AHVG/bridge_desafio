import Calculator from './Calculator';
import OperationsHistory from './OperationsHistory';
import styles from './content.module.css';


function Content() {
    return (
        <div className={styles.contentContainer}>
            <Calculator />
            <OperationsHistory />
        </div>
    );
}

export default Content;