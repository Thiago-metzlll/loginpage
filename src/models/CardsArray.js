export const cardsarray = 
     Array.from({ length: 10 }, (_, i) => ({
              id: i + 1,
              nome: `Cartão ${i + 1}`,
              descricao: `Descrição do cartão ${i + 1}`,
              imagem:
                'https://images.unsplash.com/photo-1741850821875-926bc6332d97?w=500&auto=format&fit=crop&q=60',
            }));
