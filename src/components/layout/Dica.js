import styles from './dica.module.css';

export default function Dica (props) {
    return (
        <div className={styles.dicas} style={{ color: props.cor }}>
            <h3> {props.dica} </h3>
        </div>
    );
}
