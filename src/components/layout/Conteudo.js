import styles from './conteudo.module.css';

export default function Conteudo(props) {
    return (
        <div className={styles.conteudo}>
            <h1 className={styles.tituloConteudo}> {props.tituloConteudo} </h1>
            <p> {props.texto} </p>
            <p> {props.subtexto} </p>
        </div>
    );
}
