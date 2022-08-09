import Text from './Text.js';
import Line from './Line.js';
import styles from './screen.module.css';


function Screen({response, calculationTime}) {
    return (
        <div className={styles.screenContainer}>
            <Text title="Resultado" text={response} />
            <Line />
            <Text title="Tempo" text={calculationTime}/>
        </div>
    );
}

export default Screen;
