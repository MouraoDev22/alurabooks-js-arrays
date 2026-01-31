function calcularValorTotalDeLivrosDisponiveis(livros) {
    return livros.reduce((valorAcumulado, livro) => valorAcumulado + livro.preco, 0);
};