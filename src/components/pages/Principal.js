import React from "react";
import { Link } from "react-router-dom";
import VideoJSPlayerComponent from "../videos/videojs";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primeicons/primeicons.css";

// Componentes
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import styles from "./estilosPage/principal.module.css";
import Card from "../layout/Card";
import Conteudo from "../layout/Conteudo";
import IntroducaoConteudo from "../layout/IntroducaoConteudos";
import SubConteudo from "../layout/SubConteudo";
import Dica from "../layout/Dica";
import Curiosidade from "../layout/Curiosidades";
import StepperComponente from "../layout/StepperComponente";
import AccordionComponente from "../layout/AccordionComponente";

// Imagens
import imagemInicio from "../../img/imagem-inicio.svg";
import imagemConteudo from "../../img/imagem-conteudo.svg";
import imagemCuriosidade from "../../img/imagem-curiosidades.svg";
import imagemDesafio from "../../img/imagem-desafios.svg";
import scratchInicio from "../../img/scratch_inicio.png";
import pythonInicio from "../../img/python_inicio.png";
import funcaoP from "../../img/funcaoP.png";
import funcaoS from "../../img/funcaoS.png";

// Vídeos
import video_variaveis from "../../videos/video_variaveis.mp4";

export default function Principal() {
  return (
    <div>
      <Navbar />

      <div className={styles.conteudo}>
        <div className={styles.conteudoText}>
          <h1 style={{ color: "#525FE1" }}>
            Desvende os Mistérios da Programação:
          </h1>
          <h1 style={{ color: "#017683" }}>
            Explore um mundo de possibilidades.
          </h1>
          <h2 style={{ color: "#6C6C72" }}>
            Aprenda de forma lúdica e interativa os fundamentos da lógica de
            programação, desde conceitos básicos até a prática através de
            desafios. Desenvolva habilidades essenciais que vão além do código,
            como resolução de problemas, pensamento crítico e criatividade.
          </h2>
        </div>
        <img
          className={styles.imagemInicio}
          src={imagemInicio}
          alt="imagem inicio"
        />
      </div>

      <div className={styles.cards}>
        <div className={styles.card}>
          <a href="#section-conteudo">
            <Card
              titulo="Conteúdos"
              img={imagemConteudo}
              texto="Explore os principais conceitos da programação."
              alt="conteudo"
            />
          </a>
        </div>
        <div className={styles.card}>
          <a href="#section-curiosidade">
            <Card
              titulo="Curiosidades"
              img={imagemCuriosidade}
              texto=" Descubra fatos e curiosidades sobre o mundo da tecnologia."
              alt="curiosidade"
            />
          </a>
        </div>
        <div className={styles.card}>
          <Link to="/desafios">
            <Card
              titulo="Desafios"
              img={imagemDesafio}
              texto="Coloque em prática seus conhecimentos e fortaleça suas habilidades."
              alt="desafios"
            />
          </Link>
        </div>
      </div>

      <section className={styles.conteudos}>
        <section id="section-conteudo">
          <IntroducaoConteudo
            titulo="Conteúdos"
            texto="Vamos nos divertir aprendendo sobre o universo da programação! Para iniciar, vamos te apresentar três conceitos muito importantes.
                Por que esses conceitos são importantes? Bem, eles são como as bases de uma casa. 
                Sem uma base forte, a casa pode desmoronar! Da mesma forma, sem entender programação, algoritmos e lógica de programação, pode ser difícil fazer coisas legais com o computador. "
          />
        </section>

        <div>
          <StepperComponente />
        </div>

        <Dica
          dica='Nesse momento, você pode se questionar: "E como eu irei dar instruções ao computador, se ele não me entende?".
                Bem, para se comunicar com o computador, precisamos utilizar o que chamamos de Linguagens de Programação.'
          cor="#017683"
        />

        <div>
          <Conteudo
            tituloConteudo="Linguagens de programação"
            texto="Linguagens de programação podem ser definidas como um idioma que as pessoas usam para escrever instruções e assim dizer ao computador o que deve ser feito. 
                                Existem diversas linguagens de programação, e cada uma delas é mais indicada para um determinado contexto. "
            subtexto="Vamos te apresentar duas linguagens de programação que são fáceis de entender e apropriadas para sua você que está iniciando nessa jornada."
          />
          <div className={styles.subConteudo}>
            <SubConteudo
              titulo="Scratch"
              texto={
                <span>
                  O Scratch é uma linguagem de programação visual, e também uma
                  comunidade online onde se podem criar e partilhar histórias,
                  jogos e animações interativas. Nessa linguagem, utilizando
                  blocos para construir códigos, podemos assimilar a quando
                  usamos peças de lego para construir algo. O bloco <strong>diga </strong> é usado
                  para que o ator escolhido fale algo."
                </span>
              }
              img={scratchInicio}
              alt="linguagem-scratch"
            />

            <SubConteudo
              titulo="Python"
              texto={
                <span>
                  O Python é uma linguagem de programação muito usada, eficiente
                  e fácil de aprender e pode ser executada em muitas plataformas
                  diferentes. Nessa linguagem escrevemos linhas de código, que
                  serão entendidas e executadas pelo computador. A função{" "}
                  <strong>print()</strong> aqui no Python corresponde ao "diga"
                  no Scratch, ou seja, é utilizado para exibir algo na tela. '
                </span>
              }
              img={pythonInicio}
              alt="linguagem-python"
            />
          </div>
        </div>

        <div>
          <Conteudo
            tituloConteudo="Variáveis e Tipos de dados"
            texto="O vídeo abaixo irá te apresentar os conceitos de Variáveis e Tipos de dados. A partir desses conceitos, iniciaremos tópicos mais aprofundados sobre o funcionamento das Linguagens de 
                        Programação, para que seu entendimento seja completo, e logo após você consiga utilizar as Linguagens de programação para criar coisas incríveis."
          />
        </div>

        <VideoJSPlayerComponent
          video={video_variaveis}
          cor_background={"#FFF8F4"}
          alt="video-variavel-e-tipo-dados"
          title="Vídeo sobre variáveis e tipos de dados"
        />

        <div>
          <Conteudo
            tituloConteudo="Operadores"
            texto="Os operadores podem ser definidos como tudo aquilo que podemos fazer com as variáveis. São símbolos que nos permitem realizar manipulações 
                    sendo elas (operações) matemáticas, lógicas e de comparação específicas."
            subtexto="Os operadores são divididos em diversas categorias:"
          />
        </div>

        <div>
          <AccordionComponente />
        </div>

        <div>
          <Conteudo
            tituloConteudo="Estruturas Condicionais"
            texto="As Estruturas Condicionais são com regras de um jogo, servem para dizer ao computador o que fazer, quando fazer e como fazer."
            subtexto={
              <span>
                São elas: <strong>IF</strong> (Se) e <strong>ELSE</strong> (Se
                não).
              </span>
            }
          />

          <iframe
            src="https://scratch.mit.edu/projects/1007475810/embed"
            allowtransparency="true"
            width="485"
            height="402"
            frameborder="0"
            scrolling="no"
            allowfullscreen
            title="Projeto Scratch: Exemplo de Estrutura Condicional"
          ></iframe>
        </div>

        <div>
          <Conteudo
            tituloConteudo="Estruturas de Repetição"
            texto="As Estruturas de Repetição são utilizadas quando será necessário realizar alguma atividade mais de uma vez."
            subtexto={
              <span>
                São elas: <strong>WHILE</strong> (Enquanto) e{" "}
                <strong>FOR</strong> (Para).
              </span>
            }
          />

          <iframe
            src="https://scratch.mit.edu/projects/1007763486/embed"
            allowtransparency="true"
            width="485"
            height="402"
            frameborder="0"
            scrolling="no"
            allowfullscreen
            title="Projeto Scratch: Exemplo de Estrutura de Repetição"
          ></iframe>
        </div>

        <div>
          <Conteudo
            tituloConteudo="Função"
            texto="Função é um bloco de código que realiza uma tarefa específica."
            subtexto={
              <span>
                A função é como uma máquina que recebe alguns <i>inputs</i>,
                isso chamamos de <strong>parâmetro</strong> na programação.
                Executa uma série de instruções e produz um <i>output</i>,
                conhecido como <strong>return</strong> ou retorno da função.
              </span>
            }
          />

          <div className={styles.subConteudo}>
            <SubConteudo
              titulo="Scratch"
              texto="No Scratch podemos criar um bloco que tenha a finalidade de uma função. O exemplo a seguir mostrar que sempre que iniciamos a 
                    execução do código, ele pede que o usuário insira dois números e retorna a soma deles."
              img={funcaoS}
              alt="funcao-scratch"
            />

            <SubConteudo
              titulo="Python"
              texto={
                <span>
                  No Python temos a palavra reservada <strong>def</strong> que
                  usamos para definir que aquele bloco de código é uma função.
                  Usar uma função no código nos permite evitar repeticões de
                  código, já que ao precisar somar dois números não precisaremos
                  fazer a operação de adição toda vez. Apenas chamar a função{" "}
                  <strong>soma (num1, num2)</strong>, passar os dois números por
                  parâmetro e a soma será feita.
                </span>
              }
              img={funcaoP}
              alt="funcao-python"
            />
          </div>
        </div>
      </section>

      <section id="section-curiosidade">
        <div className={styles.divCuriosidades}>
          <Curiosidade />
          <Footer />
        </div>
      </section>
    </div>
  );
}
