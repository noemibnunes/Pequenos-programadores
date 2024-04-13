import React, { useRef } from "react";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import styles from './principal.module.css';
import imagemInicio from '../../img/imagem-inicio.svg';
import imagemConteudo from '../../img/imagem-conteudo.svg';
import imagemCuriosidade from '../../img/imagem-curiosidades.svg';
import imagemDesafio from '../../img/imagem-desafios.svg';
import Card from "../layout/Card";
import Conteudo from "../layout/Conteudo";
import { Stepper } from 'primereact/stepper';
import { StepperPanel } from 'primereact/stepperpanel';
import { Button } from 'primereact/button';
import IntroducaoConteudo from "../layout/IntroducaoConteudos";
import "primereact/resources/themes/lara-light-cyan/theme.css";


function Principal () {
    const stepperRef = useRef(null);

    return (
        <div>
            <Navbar />
       
            <div class={styles.conteudo}>
                <div class={styles.conteudoText}>
                    <h1 style={{color: '#525FE1'}}>Desvende os Mistérios da Programação:</h1>    
                    <h1 style={{color: '#FFA41B'}}>Explore um mundo de possibilidades.</h1>
                    <h3 style={{color: '#6C6C72'}}>
                        Aprenda de forma lúdica e interativa os fundamentos da lógica de programação, desde conceitos básicos 
                        até a prática através de desafios. Desenvolva habilidades essenciais que vão além do código, como resolução
                        de problemas, pensamento crítico e criatividade.
                    </h3>
                </div>
                <img class={styles.imagemInicio} src={imagemInicio} alt="imagem inicio" />
            </div>

            <div className={styles.cards}>
                <div className={styles.card}>
                    <Card titulo="Conteúdos" img={imagemConteudo} texto="Explore os principais conceitos da programação." />
                </div>
                <div className={styles.card}>
                    <Card titulo="Curiosidades" img={imagemCuriosidade} texto=" Descubra fatos sobre o mundo da tecnologia."/>
                </div>
                <div className={styles.card}>
                    <Card titulo="Desafios" img={imagemDesafio} texto="Coloque em prática seus conhecimentos."/>
                </div>
            </div>

            <IntroducaoConteudo titulo="Conteúdos" />

            <div className="flex justify-content-end">
                <Stepper ref={stepperRef} className={styles.stepper}>
                    <StepperPanel header="Programação" className={styles.panel}>
                        <div className="flex flex-column h-12rem">
                            <Conteudo tituloConteudo="O que é Programação?" 
                                texto="A programação é como dar ordem ao computador para que ele faça o que você quer. 
                                    Quando sua mãe fala: &quot;Hora de fazer a atividade de casa, desligue a televisão&quot;.
                                    Isso é um exemplo de comando, ela lhe deu uma ordem e espera que você obedeça tal comando."/>
                        </div>
                        <div className="flex pt-4 justify-content-end">
                            <Button label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} />
                        </div>
                    </StepperPanel>

                    <StepperPanel header="Algoritmo">
                        <div className="flex flex-column h-12rem">
                            <Conteudo tituloConteudo="O que é Algoritmo?" 
                                    texto="Um Algoritmo é como uma receita para o computador! Vamos pensar que iremos fazer um bolo, para isso é necessário seguir passo a passo as instruções da receita para que o bolo fique delicioso. 
                                    Entendeu? Um Algoritmo é uma lista de instruções que dizem ao computador exatamente o que fazer, para completar uma tarefa."/>
                        </div>
                        <div className="flex pt-4 justify-content-between">
                            <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} />
                            <Button label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} />
                        </div>
                    </StepperPanel>

                    <StepperPanel header="Lógica de Programação">
                        <div className="flex flex-column h-12rem">
                            <Conteudo tituloConteudo="O que é Lógica de Programação?" 
                                        texto="Você já brincou de montar um quebra-cabeças, certo? Para que a montagem fique correta, precisa colocar as peças certas nos lugares certos. 
                                        A lógica de programação é sobre pensar de maneira organizada e inteligente para resolver problemas usando o computador. "/>
                        </div>
                        <div className="flex pt-4 justify-content-start">
                            <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} />
                        </div>
                    </StepperPanel>
                </Stepper>
            </div>

            {/* <div className={styles.conteudos}>
                <Conteudo titulo="Conteúdos" tituloConteudo="O que é programação?" 
                    texto="A programação é como dar ordem ao computador para que ele faça o que você quer. 
                        Quando sua mãe fala: &quot;Hora de fazer a atividade de casa, desligue a televisão&quot;.
                        Isso é um exemplo de comando, ela lhe deu uma ordem e espera que você obedeça tal comando."/>
            </div> */}
        </div>
    );
}

export default Principal