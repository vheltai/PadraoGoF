/*-------------------------------------------------------------------------------------
MATERIAL DE AULA DO PROF. VINICIUS HELTAI
CONTEUDO: Padrão de Projeto GoF / Estruturais / Composite
---------------------------------------------------------------------------------------
Autor: Vinicius Heltai
Data: 12/04/2024    Local: São Paulo-SP / Brasil

E-mail: vheltai@gmail.com
GitHub: https://github.com/vheltai
Site: https://www.heltai.com.br 

Licença: Creative Commons (CC0)
---------------------------------------------------------------------------------------
DESCRIÇÃO DO PROJETO:

- Desenvolva um programa que simule um carrinho de compras online utilizando o Padrão 
de Projeto GoF Estrutural Composite. 
- Crie uma classe abstrata chamada Componente que servirá como a interface para os 
componentes individuais (item) e seus contêineres (Container). A classe Componente deve 
ter métodos para adicionar, remover e obter o nome de um item.
- A classe Folha representa um item individual no carrinho de compras e deve herdar de 
Componente. Ela deve ter métodos para obter o preço e o conteúdo do item.
- A classe Container representa um conjunto de itens e deve herdar de Componente. 
Ela deve ter métodos para adicionar um item, remover um item, obter o preço total dos 
itens e obter o conteúdo de todos os itens.
- Para validar o projeto, crie um exemplo de aplicação que cria várias frutas (como 
maçã, laranja, uva, banana e abacate), adiciona-as a um carrinho de compras, adiciona 
uma embalagem ao pedido, e calcula o preço total do pedido, incluindo o frete. 
- O programa deve imprimir o conteúdo e o preço total do carrinho de compras, do pedido 
e do pedido completo.

---------------------------------------------------------------------------------------
OBSERVAÇÃO DO PROFESSOR:

- Este projeto tem como objetivo testar e validar o conhecimento do Padrão de Projeto 
GoF Estrutural de Objetos, chamado Composite.
- A partir deste exemplo de código, o objetivo é validar e testar o padrão. 
- Este projeto pode ser explorado, melhorado e adaptado para outras aplicações. 
- Aproveite para explorar e aperfeiçoar seus conhecimentos. Como dica, tente integrar 
com backend (Node.js) e interface web.

- Não deixe de consultar o material de aula para melhor entendimento sobre o assunto.

-------------------------------------------------------------------------------------*/

// Classe Componente: Esta é a classe base para todos os componentes.
class Componente {
    constructor(nome){
        this.nome = nome;
    }

    adicionar(){
        // Método vazio - Pode ser implementado em uma subclasse se necessário.
    }

    remover(){
        // Método vazio - Pode ser implementado em uma subclasse se necessário.
    }

    obterNome(){
        // Método para obter o nome do componente.
        return this.nome;
    }

}

// Classe Item: Esta classe representa um item individual no carrinho de compras.
class Item extends Componente{
    constructor(nome, preco){
        // Construtor da classe Item que recebe um nome e um preço como parâmetros.
        super(nome);
        this.preco = preco;
    }

    obterPreco(){
        // Método para obter o preço do item.
        return this.preco;
    }

    obterConteudo() {
        // Método para obter o conteúdo do item.
        return `${this.nome} - R$${this.preco.toFixed(2)}`;
    }
}

// Classe Container: Esta classe representa um conjunto de itens.
class Container extends Componente{
    constructor(nome){
        // Construtor da classe Container que recebe um nome como parâmetro.
        super(nome);
        this.arrayComponente = [];
    }

    adicionar(componente){
        // Método para adicionar um componente ao container.
        this.arrayComponente.push(componente);
    }

    remover(componente){
        // Método para remover um componente do container.
        const index = this.arrayComponente.indexOf(componente);
        if (index > -1){
            this.arrayComponente.splice(index, 1);
        }
    }

    obterPreco() {
        // Método para obter o preço total de todos os componentes no container.
        let preco = 0;
        for (let componente of this.arrayComponente) {
            preco += componente.obterPreco();
        }
        return preco;
    }
    
    obterConteudo() {
        // Método para obter o conteúdo de todos os componentes no container.
        let conteudo = `${this.nome}:\n`;
        for (let componente of this.arrayComponente) {
            conteudo += `\t${componente.obterConteudo()}\n`;
        }
        return conteudo;
    }
}

// Exemplo de Aplicação ---------------------------------------------------------------
// Criação dos objetos e execução do programa:

// Criação de itens individuais.
const maca    = new Item('Maçã', 8.99);
const laranja = new Item('Laranja', 3.69);
const uva     = new Item('Uva', 9.98);
const banana  = new Item('Banana', 6.99);
const abacate = new Item('Abacate', 4.91);

// Adicionando itens ao carrinho de compras.
const produto = new Container('Carrinho de Compra');
produto.adicionar(maca);
produto.adicionar(laranja);
produto.adicionar(uva);
produto.adicionar(banana);
produto.adicionar(abacate);

// Criando um pedido e adicionando o carrinho de compras e a embalagem ao pedido.
const pedido = new Container('Pedido Fechado');
pedido.adicionar(produto);
pedido.adicionar(new Item('Embalagem', 1.90));

// Criando um pedido completo e adicionando o pedido e o frete ao pedido completo.
const pedidoEntrega = new Container('Pedido Completo');
pedidoEntrega.adicionar(pedido);
pedidoEntrega.adicionar(new Item('Frete SP', 35.00));

// Imprimindo o conteúdo e o preço total do carrinho de compras, do pedido e do pedido completo.
console.log(produto.obterConteudo());
console.log(pedido.obterConteudo());
console.log(pedidoEntrega.obterConteudo());
console.log(`Preço Total R$${pedidoEntrega.obterPreco().toFixed(2)}`);