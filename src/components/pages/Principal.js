import React, { useRef, useState, useEffect } from "react";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import styles from "./principal.module.css";
import imagemInicio from "../../img/imagem-inicio.svg";
import imagemConteudo from "../../img/imagem-conteudo.svg";
import imagemCuriosidade from "../../img/imagem-curiosidades.svg";
import imagemDesafio from "../../img/imagem-desafios.svg";
import scratchInicio from "../../img/scratch_inicio.png";
import pythonInicio from "../../img/python_inicio.png";
import operadoresScratch from "../../img/operadorScratch.png";
import operadoresPython from "../../img/operadorPython.png";
import variavelScratch from "../../img/variavelScratch.png";
import resultadoVariavelScratch from "../../img/resultadoVariavelScracth.png";
import variavelPython from "../../img/variavelPython.png";
import operadorRelacionalS from "../../img/operadorRelacionalS.png";
import operadorRelacionalP from "../../img/operadorRelacionalP.png";
import funcaoP from "../../img/funcaoP.png";
import funcaoS from "../../img/funcaoS.png";

import Card from "../layout/Card";
import Conteudo from "../layout/Conteudo";
import { Stepper } from "primereact/stepper";
import { StepperPanel } from "primereact/stepperpanel";
import { Button } from "primereact/button";
import { Accordion, AccordionTab } from "primereact/accordion";
import IntroducaoConteudo from "../layout/IntroducaoConteudos";
import SubConteudo from "../layout/SubConteudo";
import Dica from "../layout/Dica";
import VideoJSPlayerComponent from "../videos/videojs";
import video_variaveis from "../../videos/video_variaveis.mp4";
import video_operadores_logicos from "../../videos/video_operadores_logicos.mp4";

import { Link } from "react-router-dom";

import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primeicons/primeicons.css";
import Curiosidade from "../layout/Curiosidades";

function Principal() {
  const stepperRef = useRef(null);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

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

      <section id="section-conteudo">
        <IntroducaoConteudo
          titulo="Conteúdos"
          texto="Vamos nos divertir aprendendo sobre o universo da programação! Para iniciar, vamos te apresentar três conceitos muito importantes.
                Por que esses conceitos são importantes? Bem, eles são como as bases de uma casa. 
                Sem uma base forte, a casa pode desmoronar! Da mesma forma, sem entender programação, algoritmos e lógica de programação, pode ser difícil fazer coisas legais com o computador. "
        />
        </section>

        <div className="flex justify-content-end">
          <Stepper ref={stepperRef} className={styles.stepper}>
            <StepperPanel header="Programação" className={styles.panel}>
              <div className="flex flex-column h-12rem">
                <Conteudo
                  tituloConteudo="O que é Programação?"
                  texto='A programação é como dar ordem ao computador para que ele faça o que você quer. 
                                    Quando sua mãe fala: "Hora de fazer a atividade de casa, desligue a televisão".
                                    Isso é um exemplo de comando, ela lhe deu uma ordem e espera que você obedeça tal comando.'
                />
              </div>
              <div className={styles.btnRight}>
                <Button
                  label="Próximo"
                  icon="pi pi-arrow-right"
                  iconPos="right"
                  onClick={() => stepperRef.current.nextCallback()}
                />
              </div>
            </StepperPanel>

            <StepperPanel header="Algoritmo">
              <div className="flex flex-column h-12rem">
                <Conteudo
                  tituloConteudo="O que é Algoritmo?"
                  texto="Um Algoritmo é como uma receita para o computador! Vamos pensar que iremos fazer um bolo, para isso é necessário seguir passo a passo as instruções da receita para que o bolo fique delicioso. 
                                    Entendeu? Um Algoritmo é uma lista de instruções que dizem ao computador exatamente o que fazer, para completar uma tarefa."
                />
              </div>
              <div className={styles.btnBetween}>
                <Button
                  label="Anterior"
                  icon="pi pi-arrow-left"
                  onClick={() => stepperRef.current.prevCallback()}
                />
                <Button
                  label="Próximo"
                  icon="pi pi-arrow-right"
                  iconPos="right"
                  onClick={() => stepperRef.current.nextCallback()}
                />
              </div>
            </StepperPanel>

            <StepperPanel header="Lógica de Programação">
              <div className="flex flex-column h-12rem">
                <Conteudo
                  tituloConteudo="O que é Lógica de Programação?"
                  texto="Você já brincou de montar um quebra-cabeças, certo? Para que a montagem fique correta, precisa colocar as peças certas nos lugares certos. 
                                        A lógica de programação é sobre pensar de maneira organizada e inteligente para resolver problemas usando o computador. "
                />
              </div>
              <div className="flex pt-4 justify-content-start">
                <Button
                  label="Anterior"
                  severity="secondary"
                  icon="pi pi-arrow-left"
                  onClick={() => stepperRef.current.prevCallback()}
                />
              </div>
            </StepperPanel>
          </Stepper>
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
              texto="O Scratch é uma linguagem de programação visual, e também uma comunidade online onde se podem criar e partilhar histórias, jogos e animações interativas.
                                Nessa linguagem, utilizando blocos para construir códigos, podemos assimilar a quando usamos peças de lego para construir algo. O bloco diga é usado para que o ator escolhido fale algo."
              img={scratchInicio} alt="linguagem-scratch"
            />

            <SubConteudo
              titulo="Python"
              texto='O Python é uma linguagem de programação muito usada, eficiente e fácil de aprender e pode ser executada em muitas plataformas diferentes.
                                Nessa linguagem escrevemos linhas de código, que serão entendidas e executadas pelo computador. A função print() aqui no Python corresponde ao "diga" no Scratch, ou seja, é utilizado para exibir algo na tela. '
              img={pythonInicio} alt="linguagem-python"
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

        <div className="card">
          <Accordion>
            <AccordionTab header="Operadores Aritméticos">
              <h5 className="m-0">
                Operadores Aritméticos executam operações matemáticas como
                adição, subtração, divisão, entre outras.
              </h5>
              <p className="m-0">
                A imagem a seguir, mostra os blocos de operadores aritméticos no
                Scratch e como podemos utilizá-los:
              </p>
              <img
                className={styles.imgScratch}
                src={operadoresScratch}
                alt="operadores-scratch"
              ></img>

              <p className="m-0">
                A imagem a seguir, mostra como podemos utilizar os operadores
                aritméticos no Python:
              </p>
              <img src={operadoresPython} alt="operadores-python"></img>
            </AccordionTab>
            <AccordionTab header="Operadores de Designação">
              <h5 className="m-0">
                Operadores de Designação (=) pode ser entendido como um pegar
                algo de um lugar e colocar para outro.
              </h5>
              <p className="m-0">
                Imagina que você tenha uma variável chamada "Números" e nela
                você deseja guardar o número 2 nela, para isso usamos o operador
                de designação. Basicamente, quando você diz que "Números = 2",
                está ordenando que a caixa guarde esse número até que ele seja
                usado.
              </p>
              <p style={{ margin: "20px 0" }}>
                No scratch, para criar uma variável, existe os blocos de
                variável, ao clicar em criar uma variável, ele permite que você
                nomeie ela como quiser. Agora, podemos utilizar a variável e os
                blocos de comando referente a elas.
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
              <p className="m-0">
                A imagem a seguir, mostra como é criado uma variável e atribuido
                um valor a essa variável no Python:
              </p>
              <img src={variavelPython} alt="variavel-python"></img>
            </AccordionTab>
            <AccordionTab header="Operadores Lógicos">
              <h5>
                Operadores Lógicos são instruções que nos ajudam a tomar
                decisões com base em condições.
              </h5>
              <p className="m-0">
                Para determinar se algo é verdadeiro ou falso, temos os
                operadores
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
              <p className="m-0">
                &lt; (menor que), &gt; (maior que), &lt;= (menor ou igual que),
                &gt;= (maior ou igual que). O que vai mudar na forma de
                representar são os operadores de == (Igual a) e != (diferente
                de).
              </p>
              <p style={{ padding: "20px" }} className="m-0">
                A imagem a seguir, mostra como utilizamos os operadores
                relacionais no Scratch. Para que você não fique com dúvidas o (
                <strong>FALSE</strong>) significa falso e (<strong>TRUE</strong>
                ) significa verdadeiro:
              </p>
              <img
                className={styles.imgScratch}
                src={operadorRelacionalS}
                alt="operador-relacional-scratch"
              ></img>
              <p className="m-0">
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
              img={funcaoS} alt="funcao-scratch"
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
              img={funcaoP} alt="funcao-python"
            />
          </div>
        </div>

        {showScrollButton && (
          <div className={styles.scrollButton} onClick={scrollToTop}>
            <span>&uarr;</span>
          </div>
        )}

      <section id="section-curiosidade">
        <div className={styles.divCuriosidades}>
          <Curiosidade />
          <Footer />
        </div>
      </section>
     
    </div>
  );
}

export default Principal;
