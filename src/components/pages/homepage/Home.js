import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Home.module.scss';
import { FixedSizeGrid as Grid } from "react-window";
import React, { useState, useEffect } from 'react';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function Home({ alturaCartao = 120, larguraCartao = 250, GAP = 10 }) {
  const navigate = useNavigate();

  const [cartoes, setCartoes] = useState(() => {
    const dados = localStorage.getItem('cartoes');
    return dados
      ? JSON.parse(dados)
      : Array.from({ length: 10 }, (_, i) => ({
          id: i + 1,
          nome: `Cartão ${i + 1}`,
          descricao: `Descrição do cartão ${i + 1}`,
          imagem:
            'https://images.unsplash.com/photo-1741850821875-926bc6332d97?w=500&auto=format&fit=crop&q=60',
        }));
  });

  // Sincroniza o localStorage sempre que cartoes mudar
  useEffect(() => {
    localStorage.setItem('cartoes', JSON.stringify(cartoes));
  }, [cartoes]);

  const handleDelete = (id) => {
    setCartoes((prev) => prev.filter((cartao) => cartao.id !== id));
  };

  const handleAdd = () => {
    // Calcula id único
    const maxId = cartoes.length > 0 ? Math.max(...cartoes.map((c) => c.id)) : 0;
    const novoId = maxId + 1;

    setCartoes((prev) => [
      ...prev,
      {
        id: novoId,
        nome: `Cartão ${novoId}`,
        descricao: `Nova descrição do cartão ${novoId}`,
        imagem: 'https://source.unsplash.com/random/300x100?sig=' + novoId,
      },
    ]);
  };

  const handleEdit = (cartao) => {
    navigate('/form', { state: { cartao } });
  };

  const colunas = 5;
  const linhas = Math.ceil((cartoes.length + 1) / colunas); // +1 para botão "Adicionar"
  const cellWidth = larguraCartao + GAP;
  const cellHeight = alturaCartao + GAP;

  const Cell = ({ columnIndex, rowIndex, style }) => {
    const index = rowIndex * colunas + columnIndex;

    // Botão especial para adicionar cartão
    if (index === cartoes.length) {
      return (
        <div
          style={{ ...style, padding: '10px', boxSizing: 'border-box' }}
          key="add-card"
        >
          <div className={`${styles.Card} ${styles.AddCard}`}>
            <button onClick={handleAdd} className={styles.AddButton}>
              + Adicionar Cartão
            </button>
          </div>
        </div>
      );
    }

    // Fora do limite
    if (index > cartoes.length) return null;

    const cartao = cartoes[index];

    return (
      <div style={{ ...style, padding: '10px', boxSizing: 'border-box' }} key={cartao.id}>
        <div className={styles.Card}>
          <h4>{cartao.nome}</h4>
          <p className={styles.cardDescription}>{cartao.descricao}</p>
          <img src={cartao.imagem} alt="Imagem do cartão" className={styles.cardImage} />
          <div className={styles.BtnsCard}>
            <button
              onClick={() => handleEdit(cartao)}
              className={styles.EditButton}
              title="Editar cartão"
            >
              <FontAwesomeIcon icon={faEdit} />
            </button>
            <button
              onClick={() => handleDelete(cartao.id)}
              className={styles.DeleteButton}
              title="Excluir cartão"
            >
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
