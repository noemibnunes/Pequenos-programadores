import React, { useRef } from "react";
import { Stepper } from "primereact/stepper";
import { StepperPanel } from "primereact/stepperpanel";
import { Button } from "primereact/button";
import Conteudo from "../layout/Conteudo";
import styles from "./estilos/stepper.module.css";

export default function StepperComponente() {
  const stepperRef = useRef(null);

  return (
    <div>
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
  );
}
