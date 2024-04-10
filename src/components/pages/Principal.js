import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import styles from './principal.module.css';
import detalheSite from '../../img/detalhe-sites.png';
import imagemInicio from '../../img/coding-principal.png';

function Principal () {
    return (
        <div>
            <Navbar />
            <img class={styles.imagem} src={detalheSite} alt="detalhe-site" />
        
            <div class={styles.banner}>
                <div class={styles.bannerText}>
                    <h1 style={{color: '#525FE1'}}>Desvende os Mistérios da Programação:</h1>    
                    <h1 style={{color: '#FFA41B'}}>Explore um mundo de possibilidades.</h1>
                    <p style={{color: '#6C6C72'}}>
                        Aprenda de forma lúdica e interativa os fundamentos da lógica de programação, desde conceitos básicos 
                        até a prática através de desafios. Desenvolva habilidades essenciais que vão além do código, como resolução
                        de problemas, pensamento crítico e criatividade.
                    </p>
                </div>
                <img class={styles.imagemInicio} src={imagemInicio} alt="imagem inicio" />
            </div>
        </div>
    );
}

export default Principal