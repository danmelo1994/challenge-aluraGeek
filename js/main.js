let produtos = [
    {
        id: 0,
        imagem: "https://a-static.mlcdn.com.br/800x560/playstation-5-825gb-1-controle-branco-sony/magazineluiza/236508100/3cbb973600b77f01218850959290ba12.jpg",
        produto: "PlayStation 5",
        preco: 3600.0,
    },
    {
        id: 1,
        imagem: "https://cdn.awsli.com.br/800x800/516/516420/produto/23267327/kombi-sy05vnj6eu.jpg",        
        produto: "Carrinho Kombi",
        preco: 250.0,
    },
    {
        id: 2,
        imagem: "https://a-static.mlcdn.com.br/800x560/casinha-de-boneca-polly-43-moveis-a-princesa-artesanatos/aprincesaartesanatos/1022/67cf091cbf6e8a94fbb336e0285d105e.jpeg",        
        produto: "Casinha de Boneca",
        preco: 100.0,
    },
    {
        id: 3,
        imagem: "https://cdn.awsli.com.br/800x800/2179/2179503/produto/260525018/screenshot_3-l5ikwakigd.jpg",        
        produto: "Mini Game",
        preco: 650.0,
    },
    {
        id: 4,
        imagem: "https://a-static.mlcdn.com.br/800x560/boneco-toy-story-meu-amigo-woody-25cm-elka/magazineluiza/231168000/225eee15d2d9c57dc134c6d7b3a31897.jpg",        
        produto: "Boneco Woody",
        preco: 200.0,
    },
    {
        id: 5,
        imagem: "https://a-static.mlcdn.com.br/800x560/boneca-barbie-o-filme-dia-perfeito-mattel/magazineluiza/237004000/06d551d7d2ce825c1dc8c18bd8a962df.jpg",        
        produto: "Boneca Barbie",
        preco: 300.0, 
    },
];

function visualizarProdutos() {
    const cards = document.getElementById("cards");
    cards.innerHTML = "";
    produtos.forEach((produto) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${produto.imagem}" alt="Imagem do produto">
            <div class="card_container--info">
                <p>${produto.produto}</p>
                <div class="card_container--preco">
                    <p>R$ ${produto.preco.toFixed(2)}</p>
                    <img class="trash" src="assets/trash.png" alt="Ícone do Lixo" onclick="deletarProduto(${produto.id})">
                    <img class="edit" src="assets/pen.png" alt="Ícone de Edição" onclick="editarProduto(${produto.id})">
                </div>
            </div>
        `;
        cards.appendChild(card);
    });
}

function inserirProduto() {
    const form = document.getElementById("form_produto");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const nome = document.getElementById("nome").value;
        const preco = parseFloat(document.getElementById("preco").value);
        const imagem = document.getElementById("imagem").value;
        if (nome && preco && imagem) {
            const novoProduto = {
                id: produtos.length,
                imagem,
                produto: nome,
                preco,
            };
            produtos.push(novoProduto);
            visualizarProdutos();
            form.reset();
        } else {
            alert("Preencha todos os campos!");
        }
    });
}

function deletarProduto(id) {
    if (confirm("Tem certeza que deseja excluir o produto?")) {
        produtos = produtos.filter((produto) => produto.id !== id);
        visualizarProdutos();
        if (produtos.length === 0) {
            alert("Nenhum produto encontrado!");
        }
    }
}

function editarProduto(id) {
    const produto = produtos.find((produto) => produto.id === id);
    if (produto) {
        const nome = prompt("Novo nome do produto:", produto.produto);
        const preco = parseFloat(prompt("Novo valor do produto:", produto.preco));
        const imagem = prompt("Nova imagem do produto:", produto.imagem);
        if (nome && preco && imagem) {
            produto.produto = nome;
            produto.preco = preco;
            produto.imagem = imagem;
            visualizarProdutos();
            alert("Produto atualizado com sucesso!");
        } else {
            alert("Preencha todos os campos!");
        }
    } else {
        alert("Produto não encontrado!");
    }
}

visualizarProdutos();

inserirProduto();
