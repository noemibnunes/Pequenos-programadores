import React from 'react';
import styles from './estilos/subConteudo.module.css';
import scratchInicio from '../../img/scratch_inicio.png'; 
import funcaoS from '../../img/funcaoS.png'; 

export default function SubConteudo (props) {
    const isScratch = props.img === scratchInicio || props.img === funcaoS;
    return (
        <div className={styles.subConteudo}>
            <h2 className={styles.titulo}> {props.titulo} </h2>
            <p> {props.texto} </p>
            <img
                src={props.img}
                alt={props.alt} 
                className={isScratch ? styles.scratchImg : ''}
            />
        </div>
    );
};