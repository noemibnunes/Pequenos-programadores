import styles from './navbar.module.css';
import logo from '../../img/pequenos-programadores.svg';
import logoBranca from '../../img/Pequenos-Programadores-branco.svg';
import lupa from '../../img/lupa.png';

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <img className={styles.logoColorida} src={logo} alt="logo-pequenos-programadores" />
                <img className={styles.logoBranco} src={logoBranca} alt='logo-pequenos-programadores-cor-branco' />
            </div>
            
            <div className={styles.searchContainer}>
                <label htmlFor="search-input">
                    <img src={lupa} alt="Pesquisar" />
                </label>
                <input id="search-input" className={styles.searchBar} type="search" placeholder="Pesquisar por..." />
            </div>  
        </nav>
    );
}
