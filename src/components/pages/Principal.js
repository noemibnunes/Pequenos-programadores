import React, { useRef } from "react";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import styles from './principal.module.css';
import imagemInicio from '../../img/imagem-inicio.svg';
import imagemConteudo from '../../img/imagem-conteudo.svg';
import imagemCuriosidade from '../../img/imagem-curiosidades.svg';
import imagemDesafio from '../../img/imagem-desafios.svg';
import scratchInicio from '../../img/scratch_inicio.png';
import pythonInicio from '../../img/python_inicio.png';
import Card from "../layout/Card";
import Conteudo from "../layout/Conteudo";
import { Stepper } from 'primereact/stepper';
import { StepperPanel } from 'primereact/stepperpanel';
import { Button } from 'primereact/button';
import { Accordion, AccordionTab } from 'primereact/accordion';
import IntroducaoConteudo from "../layout/IntroducaoConteudos";
import SubConteudo from "../layout/SubConteudo";
import Dica from "../layout/Dica";
import VideoJSPlayerComponent from "../videos/videojs";
import video_variaveis from '../../videos/video_variaveis.mp4';

import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primeicons/primeicons.css'; 
import Curiosidade from "../layout/Curiosidades";

function Principal () {
    const stepperRef = useRef(null);

    return (
        <div>
            <Navbar />
       
            <div className={styles.conteudo}>
                <div className={styles.conteudoText}>
                    <h1 style={{color: '#525FE1'}}>Desvende os Mistérios da Programação:</h1>    
                    <h1 style={{color: '#FFA41B'}}>Explore um mundo de possibilidades.</h1>
                    <h3 style={{color: '#6C6C72'}}>
                        Aprenda de forma lúdica e interativa os fundamentos da lógica de programação, desde conceitos básicos 
                        até a prática através de desafios. Desenvolva habilidades essenciais que vão além do código, como resolução
                        de problemas, pensamento crítico e criatividade.
                    </h3>
                </div>
                <img className={styles.imagemInicio} src={imagemInicio} alt="imagem inicio" />
            </div>

            <div className={styles.cards}>
                <div className={styles.card}>
                    <Card titulo="Conteúdos" img={imagemConteudo} texto="Explore os principais conceitos da programação." />
                </div>
                <div className={styles.card}>
                    <Card titulo="Curiosidades" img={imagemCuriosidade} texto=" Descubra fatos e curiosidades sobre o mundo da tecnologia."/>
                </div>
                <div className={styles.card}>
                    <Card titulo="Desafios" img={imagemDesafio} texto="Coloque em prática seus conhecimentos e fortaleça suas habilidades."/>
                </div>
            </div>

            <IntroducaoConteudo titulo="Conteúdos" texto="Vamos nos divertir aprendendo sobre o universo da programação! Para iniciar, vamos te apresentar três conceitos muito importantes.
                Por que esses conceitos são importantes? Bem, eles são como as bases de uma casa. 
                Sem uma base forte, a casa pode desmoronar! Da mesma forma, sem entender programação, algoritmos e lógica de programação, pode ser difícil fazer coisas legais com o computador. "/>

            <div className="flex justify-content-end">
                <Stepper ref={stepperRef} className={styles.stepper} >
                    <StepperPanel header="Programação" className={styles.panel}>
                        <div className="flex flex-column h-12rem">
                            <Conteudo tituloConteudo="O que é Programação?"
                                texto="A programação é como dar ordem ao computador para que ele faça o que você quer. 
                                    Quando sua mãe fala: &quot;Hora de fazer a atividade de casa, desligue a televisão&quot;.
                                    Isso é um exemplo de comando, ela lhe deu uma ordem e espera que você obedeça tal comando."/>
                        </div>
                        <div className={styles.btnRight}>
                            <Button label="Próximo" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} />
                        </div>
                    </StepperPanel>

                    <StepperPanel header="Algoritmo">
                        <div className="flex flex-column h-12rem">
                            <Conteudo tituloConteudo="O que é Algoritmo?" 
                                    texto="Um Algoritmo é como uma receita para o computador! Vamos pensar que iremos fazer um bolo, para isso é necessário seguir passo a passo as instruções da receita para que o bolo fique delicioso. 
                                    Entendeu? Um Algoritmo é uma lista de instruções que dizem ao computador exatamente o que fazer, para completar uma tarefa."/>
                        </div>
                        <div className={styles.btnBetween}>
                            <Button label="Anterior" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} />
                            <Button label="Próximo" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} />
                        </div>
                    </StepperPanel>

                    <StepperPanel header="Lógica de Programação">
                        <div className="flex flex-column h-12rem">
                            <Conteudo tituloConteudo="O que é Lógica de Programação?" 
                                        texto="Você já brincou de montar um quebra-cabeças, certo? Para que a montagem fique correta, precisa colocar as peças certas nos lugares certos. 
                                        A lógica de programação é sobre pensar de maneira organizada e inteligente para resolver problemas usando o computador. "/>
                        </div>
                        <div className="flex pt-4 justify-content-start">
                            <Button label="Anterior" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} />
                        </div>
                    </StepperPanel>
                </Stepper>
            </div>

            <Dica dica="Nesse momento, você pode se questionar: &quot;E como eu irei dar instruções ao computador, se ele não me entende?&quot;,
                Bem, para se comunicar com o computador, precisamos utilizar o que chamamos de Linguagens de Programação." 
                cor="#01B7CD" />

            <div>
                <Conteudo tituloConteudo="Linguagens de programação" 
                            texto="Linguagens de programação podem ser definidas como um idioma que as pessoas usam para escrever instruções e assim dizer ao computador o que deve ser feito. 
                                Existem diversas linguagens de programação, e cada uma delas é mais indicada para um determinado contexto. "
                            subtexto="Vamos te apresentar duas linguagens de programação que são fáceis de entender e apropriadas para sua você que está iniciando nessa jornada."/>
                <div className={styles.subConteudo}>
                    <SubConteudo titulo="Scratch" texto="O Scratch é uma linguagem de programação visual, e também uma comunidade online onde se podem criar e partilhar histórias, jogos e animações interativas.
                                Nessa linguagem, utilizando blocos para construir códigos, podemos assimilar a quando usamos peças de lego para construir algo. Observe o exemplo abaixo:" img={scratchInicio}/>

                    <SubConteudo titulo="Python" texto="O Python é uma linguagem de programação muito usada, eficiente e fácil de aprender e pode ser executada em muitas plataformas diferentes.
                                Nessa linguagem escrevemos linhas de código, que serão entendidas e executadas pelo computador. Observe o exemplo abaixo: " img={pythonInicio}/>
                </div>
            </div>

            <div>
                <Dica dica="Agora que você já sabe o que é Programação, Algoritmo, Lógica de Programação e
                    como podemos nos comunicar com os computadores através das Linguagens de Programação, vamos continuar 
                    avançando na jornada de aprendizagem." 
                    cor="#FF484A" />
            </div>

            <div>
                <Conteudo tituloConteudo="Variáveis e Tipos de dados" 
                    texto="O vídeo abaixo irá te apresentar os conceitos de Variáveis e Tipos de dados. A partir desses conceitos, iniciaremos tópicos mais aprofundados sobre o funcionamento das Linguagens de 
                        Programação, para que seu entendimento seja completo, e logo após você consiga utilizar as Linguagens de programação para criar coisas incríveis." />
            </div>

            <VideoJSPlayerComponent video={video_variaveis} />
            
            <div>
                <Conteudo tituloConteudo="Operadores" 
                    texto="Os operadores podem ser definidos como tudo aquilo que podemos fazer com as variáveis. São símbolos que nos permitem realizar manipulações 
                    sendo elas (operações) matemáticas, lógicas e de comparação específicas."
                    subtexto="Os operadores são divididos em diversas categorias:" />
            </div>

            <div className="card">
                <Accordion activeIndex={0}>
                    <AccordionTab header="Operadores Aritméticos">
                        <p className="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </AccordionTab>
                    <AccordionTab header="Operadores de Designação">
                        <p className="m-0">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                            quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                            sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                            Consectetur, adipisci velit, sed quia non numquam eius modi.
                        </p>
                    </AccordionTab>
                    <AccordionTab header="Operadores Lógicos">
                        <p className="m-0">
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                            quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
                            mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                        </p>
                    </AccordionTab> 
                    <AccordionTab header="Operadores Relacionais">
                        <p className="m-0">
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                            quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
                            mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                        </p>
                    </AccordionTab>
                    <AccordionTab header="Operadores Condicional">
                        <p className="m-0">
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                            quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
                            mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                        </p>
                    </AccordionTab>
                </Accordion>
            </div>
            {/* <div className={styles.divCuriosidades}>
                <Curiosidade />
            </div> */}

        </div>
    );
}

export default Principal