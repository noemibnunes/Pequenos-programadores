import styles from './estilos/introducaoConteudo.module.css';

export default function IntroducaoConteudo(props) {
    return (
        <div className={styles.introducao}>
            <h1 className={styles.titulo}> {props.titulo} </h1>
            <h2> {props.texto} </h2>
        </div>
    );
}
