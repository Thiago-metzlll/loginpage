// src/components/CartaoListaVirtual.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Home.module.scss';
import { FixedSizeGrid as Grid } from "react-window";
import React, { useState } from 'react';
import { faTrash } from '@fortawesome/free-solid-svg-icons';




function Home({ alturaCartao = 120, larguraCartao = 250, GAP = 10 }) {

  const [cartoes, setCartoes] = useState(
    Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      nome: `Cartão ${i + 1}`,
      descricao: `Descrição do cartão ${i + 1}`,
      imagem: 'https://images.unsplash.com/photo-1741850821875-926bc6332d97?w=500&auto=format&fit=crop&q=60'
    }))
  );

  const handleDelete = (id) => {
    setCartoes((prev) =>
      prev.filter((cartao) => cartao.id !==
        id));
  };

  const handleAdd = () => {
    setCartoes((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        nome: `Cartão ${prev.length + 1}`,
        descricao: `Nova descrição do cartão ${prev.length + 1}`,
        imagem: 'https://source.unsplash.com/random/300x100?sig=' + prev.length
      }
      ,
    ]);
  };



  const colunas = 5;
  const linhas = Math.ceil((cartoes.length + 1) / colunas); // +1 para o botão "Adicionar"
  const cellWidth = larguraCartao + GAP;
  const cellHeight = alturaCartao + GAP;


  const Cell = ({ columnIndex, rowIndex, style }) => {
    const index = rowIndex * colunas + columnIndex;

    // Cartão especial: botão de adicionar
    if (index === cartoes.length) {
      return (
        <div style={{ ...style, padding: "10px", boxSizing: "border-box" }} >
          <div className={`${styles.Card} ${styles.AddCard}`}>
            <button onClick={handleAdd} className={styles.AddButton}>
              + Adicionar Cartão
            </button>
          </div>
        </div>
      );
    }

    // Fora do limite
    if (index > cartoes.length) {
      return null;
    }

    const cartao = cartoes[index];



    return (
      <div style={{ ...style, padding: "10px", boxSizing: "border-box" }}>
        <div className={styles.Card}>
          <h4>{cartao.nome}</h4>
          <p className={styles.cardDescription}>{cartao.descricao}</p>
          <img src={cartao.imagem}
            alt="Imagem do cartão"
            className={styles.cardImage} />
          <div>
            <button onClick={() => handleDelete(cartao.id)} className={styles.DeleteButton}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>


        </div>
      </div>
    );
  };

  return (
    <div className={styles.Homebody}>
      <Grid
        columnCount={colunas}
        rowCount={linhas}
        columnWidth={cellWidth}
        rowHeight={cellHeight}
        height={600}
        width={cellWidth * colunas}
      >
        {Cell}
      </Grid>
    </div>

  );

}
export default Home;