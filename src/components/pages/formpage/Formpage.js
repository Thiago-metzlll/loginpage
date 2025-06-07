import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Formpage.module.scss';

function Formulario() {
  const navigate = useNavigate();

  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [imagem, setImagem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const novoCartao = {
      nome,
      descricao,
      imagem
    };

    console.log('Novo cartão:', novoCartao);
    alert('Cartão salvo!');
    navigate('/'); // Volta para a Home
  };

  return (
    <div className={styles.FormularioContainer}>
      <form className={styles.FormularioBox} onSubmit={handleSubmit}>
        <h2>Criar Novo Cartão</h2>

        <input
          type="text"
          placeholder="Nome do cartão"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />

        <textarea
          placeholder="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          rows={3}
        />

        <input
          type="text"
          placeholder="URL da imagem"
          value={imagem}
          onChange={(e) => setImagem(e.target.value)}
        />

        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default Formulario;
