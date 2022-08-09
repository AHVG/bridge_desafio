import styles from './text.module.css'

function Text({title, text}){

    return (
        <div className={styles.textContainer}>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    );
}

export default Text;
