// src/components/CartaoListaVirtual.jsx
import { FixedSizeList } from "react-window";
import styles from './home.module.scss';

function Home({ alturaCartao = 120 }) {

  const cartoes = Array.from({ length: 1000 }, (_, i) => ({
    id: i + 1,
    nome: `Cartão ${i + 1}`,
  }));

  const Row = ({ index, style }) => {
    const cartao = cartoes[index];
    return (
      <div style={{ ...style, padding: "10px", boxSizing: "border-box" }}>
        <div
          className={styles.Card}
        >
          <h4>{cartao.nome}</h4>
          <p>ID: {cartao.id}</p>
        </div>
      </div>
    );
  };

  return <>
    <FixedSizeList
      height={600}
      itemCount={cartoes.length}
      itemSize={alturaCartao}
      width="100vw"
    >
      {Row}
    </FixedSizeList>
  </>
}

export default Home;