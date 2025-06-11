import React from 'react';
import styles from './Card.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

function Card({ cartao, onEdit, onDelete }) {
  return (
    <div className={styles.Card}>
      <h4>{cartao.nome}</h4>
      <p className={styles.cardDescription}>{cartao.descricao}</p>
      <img src={cartao.imagem} alt="Imagem do cartão" className={styles.cardImage} />
      <div className={styles.BtnsCard}>
        <button onClick={() => onEdit(cartao)} className={styles.EditButton} title="Editar cartão">
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <button onClick={() => onDelete(cartao.id)} className={styles.DeleteButton} title="Excluir cartão">
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
}

export default Card;
