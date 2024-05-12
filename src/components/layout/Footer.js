import styles from './footer.module.css';
import logoBranca from "../../img/Pequenos-Programadores-branco.svg";
import { FaInstagram, FaEnvelope, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.conteudoFooter}>
        <div className={styles.left}>
          <img
            className={styles.logo}
            src={logoBranca}
            alt="Logo do Pequenos Programadores"
          />
        </div>
        <div className={styles.center}>
          <h4 className={styles.texto}>©2024 </h4>
        </div>
        <div className={styles.right}>
          <a href="#" target="_blank" rel="noopener noreferrer" alt="instagram">
            <FaInstagram className={styles.icon} />
          </a>
          <a href="#" alt="email">
            <FaEnvelope className={styles.icon} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" alt="youtube">
            <FaYoutube className={styles.icon} />
          </a>
        </div>
      </div>

    </div>
  );
}
