# Project MongoDB Commerce

Este projeto foi desenvolvido com o objetivo de fixar o conteúdo sobre MongoDB do curso oferecido pela Trybe.

Neste projeto realizei buscas em um banco de dados.

#### Observações importantes:

Os arquivos citados abaixo foram criados/ configurados pela Trybe:
eslintrc.json, git ignore, package.json, package-lock.json, assets/ produtos.

### Descrição dos requisitos:

##### 1 - Retornei a quantidade de documentos inseridos na coleção produtos

##### 2 - Ordenei a coleção produtos pela quantidade de lanches vendidos em ordem crescente, apenas mostrando o nome e a quantidade de lanches vendidos

##### 3 - Retornei o lanche mais vendido, somente mostrando o nome e a quantidade de lanche que foram mais vendidos

##### 4 - Retornei os lanches que tiveram vendas > 50 e < 100, retornando apenas o nome e a quantidade de lanches vendidos em ordem crescente

##### 5 - Retornei as informações de nome, curtidas e vendidos dos lanches que tiveram curtidas igual a 36 ou tenham a quantidade de vendas igual a 85

##### 6 - Retornei as informações de nome e curtidas dos lanches que tiveram curtidas > 10 e < 100

##### 7 - Retornei as informações de nome e vendidos dos lanches que tenham sido vendidos com uma quantidade diferente de 50 e em que o campo tags não exista

##### 8 - Deletei os lanches com quantidade de curtidas > 50 e retornei o nome dos lanches que restaram no banco

##### 9 - Retornei o nome de todos os lanches com calorias < 500

##### 10 - Retornei o nome do produto, a quantidade de curtidas e quantos itens foram vendidos dos produtos que não sejam iguais a Big Mac e McChicken

##### 11 - Retornei o nome do produto, a quantidade de curtidas e quantos itens foram vendidos dos produtos que não sejam iguais a Big Mac e McChicken

##### 12 - Adicionei ketchup aos ingredientes para todos os sanduíches menos o McChicken

##### 13 - Incluí o campo criadoPor em todos os documentos colocando Ronald McDonald no valor desse campo

##### 14 - Criei uma query que retorna todos os lanches que possuem picles em seus ingredientes e mostre apenas os 3 primeiros itens contidos no array valoresNutricionais

##### 15 - Adicionei o campo avaliacao em todos os documentos da coleção e efetuei alterações nesse campo (exemplo: avaliacao do tipo NumberInt com o valor padrão 0)

##### 16 - Adicionei o campo ultimaModificacao com a data somente no sanduíche Big Mac

##### 17 - Retornei a quantidade total de produtos em uma nova coleção chamada resumoProdutos

##### 18 - Incluí bacon no final da lista de ingredientes dos sanduíches Big Mac e Quarteirão com Queijo

##### 19 - Removi o item cebola de todos os sanduíches

##### 20 - Removi o primeiro ingrediente do sanduíche Quarteirão com Queijo

##### 21 - Removi o último ingrediente do sanduíche Cheddar McMelt

##### 22 - Adicionei a quantidade de vendas dos sanduíches por dia da semana

##### 23 - Inseri os valores combo e tasty no array tags de todos os sanduíches e aproveitei para deixar os valores em ordem alfabética ascendente (A a Z)

##### 24 - Ordenei em todos os documentos os valores do array valoresNutricionais pelo campo percentual de forma decrescente

##### 25 - Adicionei o valor muito sódio ao final do array tags nos produtos em que o percentual de sódio seja > ou igual a 40

##### 26 - Adicionei o valor contém sódio ao final do array tags nos produtos em que o percentual de sódio seja > que 20 e < que 40

##### 27 - Contei quantos produtos contém Mc no nome, sem utilizar case sensitive

##### 28 - Contei quantos produtos têm 4 ingredientes

##### 29 - Renomiei o campo descricao para descricaoSite em todos os documentos

##### 30 - Removi o campo curtidas do item Big Mac

##### 31 - Retornei o nome dos sanduíches em que o número de curtidas é maior que o número de sanduíches vendidos

##### 32 - Retornei o nome e a quantidade de vendidos dos sanduíches em que o número de vendas é múltiplo de 5