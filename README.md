# BRIDGE DESAFIO FULL-STACK
Desafio bridge para fullstack feito por AUGUSTO DE HOLLANDA VIEIRA GUERNER

## [DEPLOY no HEROKU](https://frontend-bridge-heroku.herokuapp.com/)
## [Algoritmo do backend](https://www.dcc.fc.up.pt/~pbv/aulas/progimp/teoricas/teorica07.html)


# Sobre o projeto e como rodar localmente

## BACK-END
Back-end do desafio bridge fullstack

### Quais tecnologias foram utilizadas
O projeto utiliza o framework [Spring Boot](https://spring.io/projects/spring-boot) e o banco de dados [postgredSQL](https://www.postgresql.org/) para o backend

### Como rodar localmente
Para funcionar, é necessário configurar o banco de dados antes de mais nada. Depois disso, basta executar o programa via IDE ou via executável.

### Configurando o banco de dados

#### Postgresql
1. Vá neste [link](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads) e aperte na primeira opção do seu sistema operacional
2. Execute o instalador para baixar
3. Aperte next, next e finish, porém, quando pedir uma senha, escreva a que deseja
4. Vá na aba server e crie um banco de dados de nome DB_HISTORY (sugestão de nome)
5. Pronto, o banco de está configurado


### Executando o programa

#### Método 1 -  Rodando via NetBeans
#### Passos
1. Baixe o arquivo zip com todos os arquivos (front-end e back-end) e extraia no local que desejar
2. Inicie o netBeans. Caso não tenha [baixe aqui](https://netbeans.apache.org/download/nb14/nb14.html) e configure-o
3. Abra o arquivo applications que estará no seguinte caminho `.\projeto\back_end\src\main\resources`
4. Após aberto, para suportar o banco de dados, você terá que alterar as seguintes linhas

```JAVA

# Aqui você alterar o DB_HISTORY para o nome que você escolheu
spring.datasource.url = jdbc:postgresql://localhost:5432/DB_HISTORY?useTimezone=true&serverTimezone=UTC

# Aqui fica seu username (possivelmente vai ser o mesmo)
spring.datasource.username = postgres

# Aqui fica a sua senha  (Possivelmente diferente)
spring.datasource.password = database

```

5. Depois que estiver aberta e carregado, vá no canto superior esquerdo e aperte em files e em seguida open project
6. Feito isso, vá onde está o projeto e clique nele duas vezes e aperte ok
7. Após carregar tudo certinho, aperte para rodar lá em cima da barra de ferramentas no play verde
8. Pronto, o backend está rodando

#### Método 2 - Rodando via executável (melhor forma)
#### Passos
1. Baixe o arquivo zip com todos os arquivos (front-end e back-end) e extraia no local que desejar
3. Copie o caminho dele, abra o terminal cmd, digite nele ```cd caminho_copiado``` e aperte enter
4. Em seguida digite ```mvn clean package``` e copie o nome do arquivo jar gerado na pasta target dentro do projeto.
5. Quando terminar o build do projeto, escreva ainda no cmd ```java -jar target\nome_arquivo.jar``` para executar. Possivelmente o nome será este BridgeFullstack-0.0.1-SNAPSHOT
6. Pronto, o backend já está rodando


## FRONT-END
Front-end do desafio bridge fullstack

### Quais tecnologias foram utilizadas
O projeto utiliza o [React](https://pt-br.reactjs.org/) para o front-end

### Como abrir localmente 
### Passos
1. Abra a IDE que você mais gosta, como por exemplo o visual studio code
2. Após aberta, abra a pasta do front-end
3. No terminal, faça um cd para a pasta que contenha o src, ficando assim ```.\front_end``` seu diretória atual
4. Por fim, digite no terminal ```npm install``` e, após terminar de instalar, ```npm start```, caso não tenha o npm (node package manager), siga o este [TUTORIAL](https://dicasdejavascript.com.br/instalacao-do-nodejs-e-npm-no-windows-passo-a-passo/)
5. Pronto, seu frontend já está rodando
