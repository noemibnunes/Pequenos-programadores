import { Accordion, AccordionTab } from "primereact/accordion";
import VideoJSPlayerComponent from "../videos/videojs";
import styles from "./estilos/accordion.module.css";

// Imagens
import operadoresScratch from "../../img/operadorScratch.png";
import operadoresPython from "../../img/operadorPython.png";
import variavelScratch from "../../img/variavelScratch.png";
import resultadoVariavelScratch from "../../img/resultadoVariavelScracth.png";
import variavelPython from "../../img/variavelPython.png";
import operadorRelacionalS from "../../img/operadorRelacionalS.png";
import operadorRelacionalP from "../../img/operadorRelacionalP.png";

// Vídeos
import video_operadores_logicos from "../../videos/video_operadores_logicos.mp4";

export default function AccordionComponente() {
  return (
    <div>
      <div className="card">
        <Accordion>
          <AccordionTab header="Operadores Aritméticos">
            <h5>
              Operadores Aritméticos executam operações matemáticas como adição,
              subtração, divisão, entre outras.
            </h5>
            <p>
              A imagem a seguir, mostra os blocos de operadores aritméticos no
              Scratch e como podemos utilizá-los:
            </p>
            <img
              className={styles.imgScratch}
              src={operadoresScratch}
              alt="operadores-scratch"
            ></img>

            <p>
              A imagem a seguir, mostra como podemos utilizar os operadores
              aritméticos no Python:
            </p>
            <img src={operadoresPython} alt="operadores-python"></img>
          </AccordionTab>
          <AccordionTab header="Operadores de Designação">
            <h5>
              Operadores de Designação (=) pode ser entendido como um pegar algo
              de um lugar e colocar para outro.
            </h5>
            <p>
              Imagina que você tenha uma variável chamada "Números" e nela você
              deseja guardar o número 2 nela, para isso usamos o operador de
              designação. Basicamente, quando você diz que "Números = 2", está
              ordenando que a caixa guarde esse número até que ele seja usado.
            </p>
            <p style={{ margin: "20px 0" }}>
              No scratch, para criar uma variável, existe os blocos de variável,
              ao clicar em criar uma variável, ele permite que você nomeie ela
              como quiser. Agora, podemos utilizar a variável e os blocos de
              comando referente a elas.
            </p>
            <div className={styles.imgVariavel}>
              <img
                className={styles.scratch}
                src={variavelScratch}
                alt="variavel-scratch"
              ></img>
              <img
                className={styles.resultadoVariavelScratch}
                src={resultadoVariavelScratch}
                alt="resultado-variavel-scratch"
              ></img>
            </div>
            <p>
              A imagem a seguir, mostra como é criado uma variável e atribuido
              um valor a essa variável no Python:
            </p>
            <img src={variavelPython} alt="variavel-python"></img>
          </AccordionTab>
          <AccordionTab header="Operadores Lógicos">
            <h5>
              Operadores Lógicos são instruções que nos ajudam a tomar decisões
              com base em condições.
            </h5>
            <p>
              Para determinar se algo é verdadeiro ou falso, temos os operadores
              <strong> E</strong> (ambas as condições precisam ser verdadeiras
              para que a expressão seja verdadeira),
              <strong> OU</strong> (se apenas uma ou ambas as condições forem
              falsas, a expressão é falsa),
              <strong> NÃO</strong> (nega uma condição, se ela for verdade se
              torna falsa, e vice-versa).
            </p>
            <p style={{ margin: "20px 0" }}>
              Ficou com dúvidas? Para que seu entendimento seja completo,
              assista o vídeo abaixo:
            </p>

            <VideoJSPlayerComponent
              video={video_operadores_logicos}
              cor_background={"#FFF"}
              alt="video-operador-logico"
            />
          </AccordionTab>
          <AccordionTab header="Operadores Relacionais">
            <h5>
              Operadores relacionais são utilizados para comparar valores, e
              seguem o mesmo entendimento que você aprender na escola.
            </h5>
            <p>
              &lt; (menor que), &gt; (maior que), &lt;= (menor ou igual que),
              &gt;= (maior ou igual que). O que vai mudar na forma de
              representar são os operadores de == (Igual a) e != (diferente de).
            </p>
            <p style={{ padding: "20px" }}>
              A imagem a seguir, mostra como utilizamos os operadores
              relacionais no Scratch. Para que você não fique com dúvidas o (
              <strong>FALSE</strong>) significa falso e (<strong>TRUE</strong>)
              significa verdadeiro:
            </p>
            <img
              className={styles.imgScratch}
              src={operadorRelacionalS}
              alt="operador-relacional-scratch"
            ></img>
            <p>
              A imagem a seguir, mostra como utilizamos os operadores
              relacionais no Python:
            </p>
            <img
              src={operadorRelacionalP}
              alt="operador-relacional-python"
            ></img>
          </AccordionTab>
        </Accordion>
      </div>
    </div>
  );
}
