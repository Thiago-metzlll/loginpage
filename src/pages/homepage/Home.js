import React from 'react';
import styles from './Home.module.scss';
import { useNavigate } from 'react-router-dom';
import { useCartoes } from '../../hooks/useCards';
import GridCard from './../../components/container/grid_card/GridCard';

function Home() {
  const navigate = useNavigate();
  const { cartoes, handleAdd, handleDelete, } = useCartoes();

  const handleEdit = (cartao) => {
    navigate('/form', { state: { cartao } });
  };

  const handleAddCard = () => {
  navigate('/form'); // sem state = criação de novo cartão
};


  return (
    <div className={styles.Homebody}>
      <GridCard
        cartoes={cartoes}
        onDelete={handleDelete}
        onEdit={handleEdit}
        onAdd={handleAddCard }
      />
    </div>
  );
}

export default Home;
