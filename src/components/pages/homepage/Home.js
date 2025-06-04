// src/components/CartaoListaVirtual.jsx
import { FixedSizeList } from "react-window";
import styles from './Home.module.scss';
import { FixedSizeGrid as Grid } from "react-window";


function Home({ alturaCartao = 120, larguraCartao = 250 }) {

  const cartoes = Array.from({ length: 1000 }, (_, i) => ({
    id: i + 1,
    nome: `Cartão ${i + 1}`,
  }));
  const colunas = 5;
  const linhas = Math.ceil(cartoes.length / colunas);

  const Cell = ({ columnIndex, rowIndex, style }) => {
    const index = rowIndex * colunas + columnIndex;
    if (index >= cartoes.length) return null;

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

  return (
    <Grid
      columnCount={colunas}
      rowCount={linhas}
      columnWidth={larguraCartao}
      rowHeight={alturaCartao}
      height={600}
      width={larguraCartao * colunas}
    >
      {Cell}
    </Grid>
  );
}

export default Home;