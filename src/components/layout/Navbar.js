import styles from './navbar.module.css';
import logo from '../../img/Pequenos-Programadores.png'
import lupa from '../../img/lupa.png'

function Navbar() {
    return (
        <nav class={styles.nav}>
            <div class={styles.logo}>
                <img src={logo} alt="logo" />
            </div>
            
            <div class={styles.searchContainer}>
                <label htmlFor="search-input">
                    <img src={lupa} alt="Pesquisar" />
                </label>
                <input id="search-input" class={styles.searchBar} type="search" placeholder="Pesquisar por..." />
            </div>  
        </nav>
    );
}

export default Navbar;
