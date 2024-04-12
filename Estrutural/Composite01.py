'''------------------------------------------------------------------------------------
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

------------------------------------------------------------------------------------'''

# Classe Componente: Esta é a classe base para todos os componentes.
class Componente:
    def __init__(self, nome):
        self.nome = nome

    def adicionar(self):
        # Método vazio - Pode ser implementado em uma subclasse se necessário.
        pass

    def remover(self):
        # Método vazio - Pode ser implementado em uma subclasse se necessário.
        pass

    def obterNome(self):
        # Método para obter o nome do componente.
        return self.nome


# Classe Item: Esta classe representa um item individual no carrinho de compras.
class Item(Componente):
    def __init__(self, nome, preco):
        # Construtor da classe Item que recebe um nome e um preço como parâmetros.
        super().__init__(nome)
        self.preco = preco

    def obterPreco(self):
        # Método para obter o preço do item.
        return self.preco

    def obterConteudo(self):
        # Método para obter o conteúdo do item.
        return f"{self.nome} - R${self.preco:.2f}"


# Classe Container: Esta classe representa um conjunto de itens.
class Container(Componente):
    def __init__(self, nome):
        # Construtor da classe Container que recebe um nome como parâmetro.
        super().__init__(nome)
        self.arrayComponente = []

    def adicionar(self, componente):
        # Método para adicionar um componente ao container.
        self.arrayComponente.append(componente)

    def remover(self, componente):
        # Método para remover um componente do container.
        self.arrayComponente.remove(componente)

    def obterPreco(self):
        # Método para obter o preço total de todos os componentes no container.
        preco = 0
        for componente in self.arrayComponente:
            preco += componente.obterPreco()
        return preco

    def obterConteudo(self):
        # Método para obter o conteúdo de todos os componentes no container.
        conteudo = f"{self.nome}:\n"
        for componente in self.arrayComponente:
            conteudo += f"\t{componente.obterConteudo()}\n"
        return conteudo
