import styles from './subConteudo.module.css';

export default function subConteudo(props) {
    return (
        <div className={styles.subConteudo}>
            <h2 className={styles.titulo}> {props.titulo} </h2>
            <p> {props.texto} </p>
            <img src={props.img} alt="imagem-conteudo"/>
        </div>
    );
}
