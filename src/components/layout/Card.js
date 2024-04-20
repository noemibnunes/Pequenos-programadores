import styles from './card.module.css';

export default function Card(props) {
    return (
        <div className={styles.card}>
            <h2>{props.titulo}</h2>
            <img src={props.img} alt="layout-card" width={180} height={180}/>
            <p>{props.texto}</p>
        </div>
    );
}
