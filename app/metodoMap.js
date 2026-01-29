function aplicarDesconto(livros) {
    const desconto = 0.3;
    const livrosComDesconto = livros.map(livro => ({
        ...livro,
        preco: livro.preco - (livro.preco * desconto)
    }));
    return livrosComDesconto;
};