import styles from './estilos/dica.module.css';

export default function Dica (props) {
    return (
        <div className={styles.dicas} style={{ color: props.cor }}>
            <h2> {props.dica} </h2>
        </div>
    );
}
