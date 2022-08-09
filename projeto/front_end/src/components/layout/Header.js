import styles from './header.module.css';

function Header(){
    return (
        <div className={styles.headerContainer}>
            <h1>
            Desafio
            <a href="https://portal.bridge.ufsc.br">
                <img 
                    width="122"
                    height="40"
                    src="https://portal.bridge.ufsc.br/wp-content/uploads/2021/09/cropped-logo_bridge_branca.png"
                    alt="Logo Bridge"
                    data-ratio="3.06"
                    data-original-w="624"
                /> 
            </a>
            Full-Stack
            </h1>
            <h2>
                <a href="https://github.com/AHVG">Augusto de Hollanda Vieira Guerner</a>
            </h2>
        </div>
    );
}

export default Header;