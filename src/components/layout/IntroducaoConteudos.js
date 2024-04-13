import styles from './introducaoConteudo.module.css';

function IntroducaoConteudo(props) {
    return (
        <div className={styles.introducao}>
            <h1 className={styles.titulo}> {props.titulo} </h1>
            <h2> {props.texto} </h2>
        </div>
    );
}

export default IntroducaoConteudo;