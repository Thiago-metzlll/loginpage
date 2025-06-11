import React from 'react';
import styles from '../pastateste/CardItem.module.scss'

function CardItem({
  nome,
  descricao,
  imagem,
  onNomeChange,
  onDescricaoChange,
  onImagemChange,
  onSubmit,
  titulo,
}) {
  return (
    <div className={styles.cardItemContainer}>
      <form className={styles.cardItemBox} onSubmit={onSubmit}>
        <h2>{titulo}</h2>

        <input
          type="text"
          placeholder="Nome do cartão"
          value={nome}
          onChange={onNomeChange}
          required
        />

        <textarea
          placeholder="Descrição"
          value={descricao}
          onChange={onDescricaoChange}
          rows={3}
        />

        <input
          type="text"
          placeholder="URL da imagem"
          value={imagem}
          onChange={onImagemChange}
        />

        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default CardItem;
