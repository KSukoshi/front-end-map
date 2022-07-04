# Projeto Teste - Clínicas Front End

https://user-images.githubusercontent.com/27301991/177206050-39378331-f917-49ab-a918-80a7ed3203a0.mp4

## Tecnologias

- Ruby on Rails Backend API
- React
- Leaflet
- Google Geocoding/Places API
- HTML/CSS


### Instalação
Após configurar e rodar o servidor backend, clone o repositório e rode o comando `npm i` para instalar as dependências e packages
ao finalizar, execute `npm start`, lembrando que o CORS da API backend está setada para o `http://localhost:3001` então é importante rodar o front-end após configurar o backend.

Cole a sua chave API do Google Geocoding/Place na variável `REACT_APP_API_KEY` no arquivo `.env` 

Pronto! O React vai abrir uma aba em seu navegador na página principal do projeto.

### Funções

Na página inicial, você pode procurar por endereços na barra de pesquisa superior, colocando o nome da rua e o número, ao selecionar o seu endereço, o aplicativo preenche automático o campo de endereço, latitude e longitude no box. Preencha o nome da clínica e o CNPJ com até 14 números.

Ao enviar a requisição, a aplicação parseia no backend e preenche os campos necessários com os dados que o Google Places retorna. Caso os dados do endereço sejam insuficientes para preencher todos os campos, o backend efetua um rollback e não deixa salvar no banco.

Ao salvar a clínica no banco, ele é disponibilizado no endpoint `http://localhost:3000/api/v1/clinics` onde o front-end consome a coleção de jsons e mostra as clínicas cadastradas na aplicação.


