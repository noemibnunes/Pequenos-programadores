import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { Carousel } from "primereact/carousel";
import menino_programador from "../../img/menino_programador.png";
import programacao_dia_dia from "../../img/programacao_diadia.svg";
import aprender_programacao from "../../img/aprender_programacao.jpg";
import pensamento_computacional from "../../img/pensamento_computacional.jpg";

import styles from "./curiosidade.module.css";

export default function Curiosidade() {
  const [curiosidades, setCuriosidades] = useState([]);

  useEffect(() => {
    const curiosidades = [
      {
        id: 1,
        titulo: "Arham Om Talsania - O programador mais jovem do mundo",
        conteudo:
          "Seu pai é programador, sendo assim, o menino desde os dois anos de idade teve contato com a tecnologia. Aos 6 anos, ele foi aprovado em um exame de certificação da Microsoft para a linguagem de programação Python.",
        subConteudo:
          "Este feito o levou ao Guinness World Records como o programador mais jovem do mundo.",
        imagem: menino_programador, alt_imagem:"jovem-programador"
      },
      {
        id: 2,
        titulo: "Por que estudar programação?",
        conteudo: 
          "É como aprender a resolver quebra-cabeças! Quando aprendemos a programar estamos treinando nossa mente a pensar de maneira lógica e encontrar a melhor solução para problemas.",
        subConteudo:
          "Você percebeu que durante o aprendizado dos tópicos abordados, foram citados exemplos do seu dia a dia? Bem, podemos concluir que o nosso cotidiano é baseado em ações lógicas, desde escolher que brinquedo irá usar na brincadeira até o ato de escovar os dentes todo o dia. Aprender a programar nos ajuda a entender como a tecnologia funciona e nos torna mais espertos e criativos.",
        imagem: aprender_programacao, alt_imagem:"estudar-programacao"
      },
      {
        id: 3,
        titulo: "O que é pensamento computacional?",
        conteudo: <span>"Imagina que você está fazendo um exercício de matemática, que envolve um problema do tipo: &quot;João tinha 5 maçãs, Maria pediu 2 maçãs a João. Quantas maçãs restaram ao João?&quot;</span>,
        subConteudo:  <span>Para resolver esse problema, você precisa entender o que está acontecendo. Então você separa as etapas: <strong>João tinha 5 maçãs. Maria pediu 2 maçãs</strong>.	Agora você entendeu o cenário, e percebe que terá que fazer uma subtração (5 - 2), ao fazer descobre que <strong>3 maçãs restaram ao João</strong>. </span>,
        subConteudo2: "O Pensamento Computacional é isso, separar em partes menores um problema complexo e depois juntar essas partes para encontrar uma solução. Com o pensamento computacional, podemos resolver problemas de forma eficaz e criativa.",
        imagem: pensamento_computacional, alt_imagem:"pensamento-computacional"
      },
      {
        id: 4,
        titulo: "Onde a programação está presente?",
        conteudo: "Acredito que você gosta de jogar vários jogos, tais como jogos de corrida, por exemplo. Você sabia que é através da programação que são criados os personagens, cenários e desafios?",
        subConteudo: "Os programadores (como são chamadas as pessoas que programam) escrevem códigos que dizem ao jogo como os carros devem se mover, os obstáculos devem funcionar e o controle do que acontece quando você pressiona os botões de controle do carro. Esse é apenas um dos exemplos, mas a programação está presente em tudo no dia a dia, desde os aplicativos de celular, até sistemas utilizados em hospitais.",
        imagem: programacao_dia_dia, alt_imagem:"onde-esta-programacao"
      },
    ];
    setCuriosidades(curiosidades);
  }, []);

  const CuriosidadeTemplate = (Curiosidade) => (
    <div className={styles.curiosidadesContainer}>
      <h1>Curiosidades</h1>
      <div className={styles.curiosidades}>
        <div className={styles.imgCuriosidade}>
          <img src={Curiosidade.imagem} alt={Curiosidade.alt_imagem}></img>
        </div>
        <div className={styles.conteudoCuriosidade}>
          <h2>{Curiosidade.titulo}</h2>
          <p>{Curiosidade.conteudo}</p>
          <p>{Curiosidade.subConteudo}</p>
          <p>{Curiosidade.subConteudo2}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex justify-content-center">
      <Carousel
        value={curiosidades}
        autoplayInterval={10000}
        numVisible={1}
        numScroll={1}
        itemTemplate={CuriosidadeTemplate}
      />
    </div>
  );
}
