import { useLocalStorage } from './useLocalStorage';
import { cardsarray } from '../models/CardsArray';

export function useCartoes() {
  const [cartoes, setCartoes] = useLocalStorage('cartoes', cardsarray);

  const handleDelete = (id) => {
    setCartoes((prev) => prev.filter((cartao) => cartao.id !== id));
  };

  const handleAdd = () => {
    const novoId = cartoes.length > 0 ? Math.max(...cartoes.map(c => c.id)) + 1 : 1;
    const novo = {
      id: novoId,
      nome: `Cartão ${novoId}`,
      descricao: `Nova descrição do cartão ${novoId}`,
      imagem: `https://source.unsplash.com/random/300x100?sig=${novoId}`,
    };
    setCartoes((prev) => [...prev, novo]);
  };

  return {
    cartoes,
    setCartoes,
    handleAdd,
    handleDelete
  };
}
