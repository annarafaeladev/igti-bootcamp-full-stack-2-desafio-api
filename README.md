# manipulacao-arquivo-json
O aluno deverá criar um projeto Node.js para realizar a criação de alguns métodos e processamento de arquivos JSON.

Atividades

O aluno deverá baixar os arquivos Cidades.json e Estados.json do link a seguir (https://github.com/felipefdl/cidades-estados-brasil-json (Links para um site externo.)) e colocá-los dentro do seu projeto. O arquivo Estados.json possui uma listagem com todos os estados do Brasil, cada um representado por um ID. No arquivo Cidades.json estão listadas todas as cidades do Brasil, com seu respectivo estado representando pelo ID fazendo referência ao arquivo Estados.json.

O aluno deverá desempenhar as seguintes atividades:

1-Implementar um método que irá criar um arquivo JSON para cada estado representado no arquivo Estados.json, e o seu conteúdo será um array das cidades pertencentes aquele estado, de acordo com o arquivo Cidades.json. O nome do arquivo deve ser o UF do estado, por exemplo: MG.json.

2- Criar um método que recebe como parâmetro o UF do estado, realize a leitura do arquivo JSON correspondente e retorne a quantidade de cidades daquele estado.

3- Criar um método que imprima no console um array com o UF dos cinco estados que mais possuem cidades, seguidos da quantidade, em ordem decrescente. Utilize o método criado no tópico anterior. Exemplo de impressão: [“UF - 93”, “UF - 82”, “UF - 74”, “UF - 72”, “UF - 65”]

4- Criar um método que imprima no console um array com o UF dos cinco estados que menos possuem cidades, seguidos da quantidade, em ordem decrescente. Utilize o método criado no tópico anterior. Exemplo de impressão: [“UF - 30”, “UF - 27”, “UF - 25”, “UF - 23”, “UF - 21”]

5- Criar um método que imprima no console um array com a cidade de maior nome de cada estado, seguida de seu UF. Em caso de empate, considerar a ordem alfabética para ordená-los e então retornar o primeiro. Por exemplo: [“Nome da Cidade – UF”, “Nome da Cidade – UF”, ...]

6- Criar um método que imprima no console um array com a cidade de menor nome de cada estado, seguida de seu UF. Em caso de empate, considerar a ordem alfabética para ordená-los e então retorne o primeiro. Por exemplo: [“Nome da Cidade – UF”, “Nome da Cidade – UF”, ...]

7- Criar um método que imprima no console a cidade de maior nome entre todos os estados, seguido do seu UF. Em caso de empate, considerar a ordem alfabética para ordená-los e então retornar o primeiro. Exemplo: “Nome da Cidade - UF"

8- Criar um método que imprima no console a cidade de menor nome entre todos os estados, seguido do seu UF. Em caso de empate, considerar a ordem alfabética para ordená-los e então retornar o primeiro. Exemplo: “Nome da Cidade - UF"

O projeto ao ser executado, deve realizar os cinco métodos em sequência, imprimindo os resultados em console e depois finalizando a execução.

![Captura de tela de 2020-06-04 12-34-54](https://user-images.githubusercontent.com/53823948/83777480-dc848e00-a65f-11ea-8b04-b63b54e95a2f.png)

![Captura de tela de 2020-06-04 12-34-46](https://user-images.githubusercontent.com/53823948/83777482-ddb5bb00-a65f-11ea-974d-1743d0e12ed8.png)

![Captura de tela de 2020-06-04 12-34-40](https://user-images.githubusercontent.com/53823948/83777487-de4e5180-a65f-11ea-8458-2589b1b36a02.png)

![Captura de tela de 2020-06-04 12-34-36](https://user-images.githubusercontent.com/53823948/83777491-dee6e800-a65f-11ea-9470-386dcd32ce75.png)

![Captura de tela de 2020-06-04 12-34-32](https://user-images.githubusercontent.com/53823948/83777493-df7f7e80-a65f-11ea-8cc6-6e8a7b138b86.png)

![Captura de tela de 2020-06-04 12-34-24](https://user-images.githubusercontent.com/53823948/83777497-e0b0ab80-a65f-11ea-89dd-6836eefeb1b1.png)

