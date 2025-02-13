var produtos = [
  {
    id: 1,
    name: "micro placas",
    marca: "digital",
    preco: 9000,
  },
];

function listar (req, res) {
  res.json(produtos);
}

function listarPorId (req, res) {
  const { id } = req.params;

  for (let item of produtos) {
    if (item.id == id) {
      res.json(item);
      return;
    }
  }
  res.status(404).send("Produto não encontrado!");
}

function criar (req, res) {
  const { id, name, marca, preco } = req.body;

  produtos.push({
    id,
    name,
    marca,
    preco,
  });

  res.send("Produto cadastrado com sucesso!");
}

function atualizar(req, res) {
  const localizarProduct = produtos.find(produto => produto.id === Number(req.params.id));
};


function remover(req, res) {
  const { id } = req.params;

  for (let i = 0; i < produtos.length; i++) {
    if (produtos[i].id == id) {
      produtos.splice(i, 1);
      res.status(200).send("Dados apagados com sucesso!");
      let newProduct = produtos;
      return newProduct;
    }
  }

  res.status(404).send("Produto não existe no banco!");
}

module.exports = {
    listar,
    listarPorId,
    criar,
    atualizar,
    remover
}
