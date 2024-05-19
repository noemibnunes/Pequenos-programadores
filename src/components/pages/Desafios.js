import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import CodeEditor from "../Editor";
import { Link } from "react-router-dom";
import styles from "./estilosPage/desafios.module.css";

// Imagens
import bodyDesafio from "../../img/detalhe-body-desafio.svg";
import logoBranca from "../../img/Pequenos-Programadores-branco.svg";
import logoPython from "../../img/python-logo.svg";
import logoScratch from "../../img/scratch-logo.svg";
import programacao from "../../img/programacao.jpg";
import Footer from "../layout/Footer";

export default function Desafios() {
  useEffect(() => {
    document.body.style.backgroundImage = `url(${bodyDesafio})`;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "top right";
    return () => {
      document.body.style.backgroundImage = "";
      document.body.style.backgroundRepeat = "";
      document.body.style.backgroundPosition = "";
    };
  }, []);

  return (
    <div className={styles.desafiosContainer}>
      <div className={styles.navbarDesafios}>
        <Link to="/">
          <img
            src={logoBranca}
            alt="logo-pequenos-programadores"
            className={styles.logo}
          />
        </Link>
        <h1 className={styles.tituloDesafios}>Desafios</h1>
      </div>

      <p className={styles.explicacao}>
        <span>
          Nesta página, você encontrará desafios relacionados aos conceitos básicos
          da programação como também desafios para desenvolver habilidades nas liguagens <strong>Python</strong> e 
          <strong> Scratch</strong>. Pratique seus conhecimentos e desenvolva suas
          habilidades!
        </span>
      </p>

      <div className={styles.programacaoSquare}>
        <div className={styles.divTitulo}>
          <h1 className={styles.tituloLinguagem}>
            Hora de praticar seus conhecimentos nos conceitos básicos da
            programação
          </h1>
          <img
            className={styles.logoScratch}
            src={programacao}
            alt="Imagem programacao"
          ></img>
        </div>
        <div className={styles.questaoScratch}>
          <iframe
            src="https://scratch.mit.edu/projects/1022511806/embed"
            allowtransparency="true"
            width="485"
            height="402"
            frameborder="0"
            scrolling="no"
            allowfullscreen
            title="Jogo educativo: Jornada do programador"
          ></iframe>
        </div>
      </div>
      <div className={styles.pythonSquare}>
        <div className={styles.divTitulo}>
          <h1 className={styles.tituloLinguagem}>
            Hora de praticar seus conhecimentos em Python
          </h1>
          <img
            className={styles.logoPython}
            src={logoPython}
            alt="Logo do Python"
          ></img>
        </div>
        <div className={styles.questao}>
          <h4> Descrição do problema: </h4>
          <p className={styles.textos}>
            Crie um programa em Python que calcule quantas páginas ainda
            precisam ser lidas de um livro, com base no número de páginas já
            lidas e no total de páginas do livro.
          </p>
          <h4> Intruções: </h4>
          <p className={styles.textos}>
            Informar a quantidade de páginas lidas. <br />
            Informar a quantidade de páginas têm o livro. <br />O programa deve
            calcular e exibir quantas páginas ainda precisam ser lidas para
            finalizar o livro.
          </p>
        </div>
        <table>
          <tr>
            <th>Exemplo de Entrada</th>
            <th>Exemplo de Saída</th>
          </tr>
          <tr>
            <td>
              12 <br />
              50
            </td>
            <td>Você ainda precisa ler 38 páginas.</td>
          </tr>
        </table>
        <div class="box-wrapper">
          <Box bg="#FFF8F4" px={6} py={8}>
            <CodeEditor />
          </Box>
        </div>
      </div>
      <div className={styles.scratchSquare}>
        <div className={styles.divTitulo}>
          <h1 className={styles.tituloLinguagem}>
            Hora de praticar seus conhecimentos no Scratch
          </h1>
          <img
            className={styles.logoScratch}
            src={logoScratch}
            alt="Logo do Scratch"
          ></img>
        </div>
        <div className={styles.questaoScratch}>
          <h4> Descrição do problema: </h4>
          <p className={styles.textos}>
            Um personagem precisa chegar em casa o mais rápido possível! Ajude-o
            a percorrer uma linha reta até a casa!
          </p>
          <h4> Intruções: </h4>
          <p className={styles.textos}>
            Crie um cenário com um personagem de sua preferência no início de
            uma linha reta e uma casa no final da linha. <br />
            Permita que o jogador controle o personagem usando as teclas de seta
            para movê-lo para a direita em direção à casa. <br />
            Desenhe uma linha reta clara que vá da posição inicial até a casa.
            Quando o personagem alcançar a casa, mostre uma mensagem de vitória
            na tela.
          </p>
        </div>
        <table>
          <tr>
            <th>Manual do Scratch</th>
          </tr>
          <tr>
            <td>
              <a
                style={{ color: "#000" }}
                href="https://drive.google.com/file/d/1-1-cHi1ZOhB1eT9ngOF2VJf_PRai01I_/view?usp=drive_link"
              >
                Acesse o manual do Scratch para te auxiliar a entender o
                funcionamento da ferramenta.
              </a>
            </td>
          </tr>
        </table>
      </div>
      <div className={styles.divCuriosidades}>
        <Footer />
      </div>
    </div>
  );
}
