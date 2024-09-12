let produtos = [
    { id: 1, nomeProduto: "Arroz", precoUnit: 20.00, estoque: 100, entrada: 150, saida: 50 },
    { id: 2, nomeProduto: "Feijão", precoUnit: 15.00, estoque: 80, entrada: 100, saida: 20 },
    { id: 3, nomeProduto: "Macarrão", precoUnit: 10.00, estoque: 50, entrada: 80, saida: 30 }
];

function listarProdutosEmEstoque() {
    let saida = document.getElementById('saida')

    let produtosEmEstoque = produtos.filter(produto => produto.estoque > 0);

    saida.innerHTML = `<pre>id | nomeProduto | precoUnit | estoque</pre>`;
    saida.innerHTML += `<pre>---------------------------------------</pre>`;
        for (let produto of produtosEmEstoque) {
     saida.innerHTML += `<pre>${produto.id} | ${produto.nomeProduto} | ${produto.precoUnit.toFixed(2)} | ${produto.estoque}</pre>`;
    }
}

function retirarProduto() {
    let saida = document.getElementById('saida')

    let id = Number(window.prompt("Digite o ID do produto a retirar: "));
    let quantidade = Number(window.prompt("Digite a quantidade a retirar: "));
    let produto = produtos.find(produto => produto.id == id);

    if (produto && produto.estoque >= quantidade) {
        produto.estoque -= quantidade;
        produto.saida = (produto.saida || 0) + quantidade;
        saida.innerHTML = `<p>Você retirou ${quantidade} unidades de ${produto.nomeProduto}.</p>`;
        saida.innerHTML += `<p>Estoque Atual de ${produto.nomeProduto}: ${produto.estoque} unidades.</p>`;
    } else if (produto) {
        saida.innerHTML = `<p>Não há estoque suficiente de ${produto.nomeProduto}.</p>`;
    } else {
        saida.innerHTML = `<p>Produto não encontrado.</p>`;
    }
}

function adicionarProduto() {
    let saida = document.getElementById('saida');

    let id = Number(prompt("Digite o ID do produto para adicionar: "));
    let quantidade = Number(prompt("Digite a quantidade a adicionar: "));
    let produto = produtos.find(produto => produto.id == id);

    if (produto) {
        produto.estoque += quantidade;
        produto.entrada = (produto.entrada || 0) + quantidade;
        saida.innerHTML = `<p>Você adicionou ${quantidade} unidades de ${produto.nomeProduto}.</p>`;
        saida.innerHTML += `<p>Estoque Atual de ${produto.nomeProduto}: ${produto.estoque} unidades.</p>`;
    } else {
        saida.innerHTML = `<p>Produto não encontrado.</p>`;
    }
}

function cadastrarProduto() {
    let saida = document.getElementById('saida');
    
    let nomeProduto = prompt("Digite o nome do produto: ");
    let precoUnit = Number(prompt("Digite o preço unitário: "));
    let estoque = Number(prompt("Digite a quantidade em estoque: "));

    let novoProduto = {
        id: produtos.length + 1,
        nomeProduto: nomeProduto,
        precoUnit: precoUnit,
        estoque: estoque,
        entrada: estoque,
        saida: 0
    };

    produtos.push(novoProduto);

    saida.innerHTML = `<p>Produto cadastrado com sucesso!</p>`;
    saida.innerHTML += `<p>Nome: ${nomeProduto}</p>`;
    saida.innerHTML += `<p>Preço Unitário: R$${precoUnit.toFixed(2)}</p>`;
    saida.innerHTML += `<p>Quantidade em Estoque: ${estoque} unidades</p>`;
}


function historicoEntradaSaida() {
    let saida = document.getElementById('exit')

    saida.innerHTML = `<p>Histórico de Entrada e Saída:</p>`;
    for (let produto of produtos) {
        saida.innerHTML += `<p>${produto.nomeProduto}: Entrada - ${produto.entrada} unidades, Saída - ${produto.saida} unidades</p>`;
    }
}

function niveisEstoque() {
    let saida = document.getElementById('saida')

    console.log("\nNíveis de Estoque:");
    for (let produto of produtos) {
        saida.innerHTML += `<p>${produto.nomeProduto}: ${produto.estoque} unidades</p>`;
    }
}

function calculadoraDesconto() {
    let saida = document.getElementById('Saida')

    let id = Number(prompt("Digite o ID do produto para aplicar o desconto: "));
    let desconto = Number(prompt("Digite o percentual de desconto (ex: 20 para 20%): "));
    let produto = produtos.find(produto => produto.id == id);

    if (produto) {
        let precoComDesconto = produto.precoUnit - (produto.precoUnit * (desconto / 100));
        saida.innerHTML = `<p>Preço original de ${produto.nomeProduto}: R$${produto.precoUnit.toFixed(2)}</p>`;
        saida.innerHTML += `<p>Preço com ${desconto}% de desconto: R$${precoComDesconto.toFixed(2)}</p>`;
    } else {
        saida.innerHTML = `<p>Produto não encontrado.</p>`;
    }
}

function simulacaoVenda() {
    let saida = document.getElementById('Saida')

    let id = Number(prompt("Digite o ID do produto para venda: "));
    let quantidade = Number(prompt("Digite a quantidade que deseja vender: "));
    let produto = produtos.find(produto => produto.id == id);

    if (produto && produto.estoque >= quantidade) {
        let totalVenda = produto.precoUnit * quantidade;
        produto.estoque -= quantidade;
        produto.saida += quantidade;
        saida.innerHTML = `<p>Venda realizada!</p>`;
        saida.innerHTML += `<p>${quantidade} unidades de ${produto.nomeProduto} vendidas por um total de R$${totalVenda.toFixed(2)}</p>`;
        saida.innerHTML += `<p>Estoque Atual de ${produto.nomeProduto}: ${produto.estoque} unidades.</p>`;
    } else if (produto) {
        saida.innerHTML = `<p>Estoque insuficiente de ${produto.nomeProduto}.</p>`;
    } else {
        saida.innerHTML = `<p>Produto não encontrado.</p>`;
    }
}
