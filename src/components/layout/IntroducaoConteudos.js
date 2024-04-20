import styles from './introducaoConteudo.module.css';

export default function IntroducaoConteudo(props) {
    return (
        <div className={styles.introducao}>
            <h1 className={styles.titulo}> {props.titulo} </h1>
            <h3> {props.texto} </h3>
        </div>
    );
}
