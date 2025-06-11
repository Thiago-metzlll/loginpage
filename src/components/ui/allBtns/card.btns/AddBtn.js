import React from 'react';
import styles from './Add.btns.module.scss';

function AddCard({ onAdd }) {
  return (
    <div className={`${styles.Card} ${styles.AddCard}`}>
      <button onClick={onAdd} className={styles.AddButton}>+ Adicionar Cartão</button>
    </div>
  );
}

export default AddCard;
