import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import menino_programador from '../../img/menino_programador.png';
import styles from './curiosidade.module.css';

export default function Curiosidade() {
  const [curiosidades, setCuriosidades] = useState([]);

  useEffect(() => {
    const curiosidades = [
      { id: 1, 
        titulo: "Arham Om Talsania - O programador mais jovem do mundo", 
        conteudo: "Seu pai é programador, sendo assim, o menino desde os dois anos de idade teve contato com a tecnologia. Aos 6 anos, ele foi aprovado em um exame de certificação da Microsoft para a linguagem de programação Python.",
        subConteudo: "Este feito o levou ao Guinness World Records como o programador mais jovem do mundo.",
        imagem: menino_programador,
      }, 
      { id: 2, 
        titulo: "Por que estudar programação?", 
        conteudo: "conteudo for curiosity 2" 
        // imagem:,
      },
      { id: 3, 
        titulo: "O que é pensamento computacional?", 
        conteudo: "conteudo for curiosity 3",
        // imagem:,
      },
      { id: 4, 
        titulo: "Onde a programação está presente?", 
        conteudo: "conteudo for curiosity 3",
        // imagem:,
      },

    ];
    setCuriosidades(curiosidades);
  }, []);

  const CuriosidadeTemplate = (Curiosidade) => (
    <div className={styles.curiosidades}>
        <h1>
            Curiosidades
        </h1>
        <h4>{Curiosidade.titulo}</h4>
        <p>{Curiosidade.conteudo}</p>
        <p>{Curiosidade.subConteudo}</p>
        <img src={Curiosidade.imagem}></img>
    </div>
  );

  return (
    <div className="flex justify-content-center">
      <Carousel value={curiosidades} numVisible={1} numScroll={1} itemTemplate={CuriosidadeTemplate} />
      {/* autoplayInterval={10000} - time para passar automatico*/}
    </div>
  );
}
