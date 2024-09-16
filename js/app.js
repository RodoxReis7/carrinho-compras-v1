let totalGeral;
limpar ();

function adicionar() {
    //recuperar valores: nome do produto, valores e quantidades
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;

    //calcular o preço
    let preco = quantidade * valorUnitario;

    //adicionar produuto ao carrinho
    let carrinho = document.getElementById('lista-produtos');
    if (quantidade <= 0) {
        alert('Favor informar a quantidade desejada, para prosseguir.');
    } else {
        carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> ${nomeProduto}<span class="texto-azul">R$${preco}</span>
      </section>`;
    }


    //atualizar valor total da compra
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0;
}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';

}