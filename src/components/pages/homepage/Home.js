// src/components/CartaoListaVirtual.jsx
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
          <img src="https://images.unsplash.com/photo-1741850821875-926bc6332d97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTd8fHxlbnwwfHx8fHw%3D"
            alt="Imagem do cartão" className={styles.cardImage} />

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