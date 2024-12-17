# Aplicativo de Revisão de Filmes

### Video:
[![Watch the video](https://raw.githubusercontent.com/nicoleprevid/movie-review-app/906032645baf8804a9fa074fccbb9b94b7486ae7/src/assets/Captura%20de%20tela%20.png?token=GHSAT0AAAAAAC4BMPOTUZONXFTCHIVC66CKZ3BTEMQ)](https://www.youtube.com/watch?v=GMVKyEcVBNo)
### Funcionalidades:

*Já implementada*

1. **Autenticação e Autorização**
   - Utilizar Auth0 para gerenciar o login e registro de usuários.
   - Proteger rotas que requerem autenticação.

2. **Buscar Filmes**
   - Implementar a integração com a OMDb API para permitir a busca de filmes.

*A ser implementada:*

3. **Revisões de Filmes**
   - Permitir que os usuários adicionem, editem e visualizem revisões de filmes.
   - Armazenar revisões em um banco de dados (pode ser Firebase, MongoDB, etc.).

4. **Lista de Desejos**
   - Permitir que os usuários adicionem filmes à sua lista de desejos.
   - Armazenar a lista de desejos no banco de dados.


### Estrutura do Aplicativo:

- **Página de Login/Registro**
- **Dashboard**: Visão geral das últimas revisões e listas de desejos.
- **Buscar Filmes**: Pesquisar filmes utilizando a OMDb API.
- **Revisões de Filmes**: Adicionar, editar e visualizar revisões de filmes.
- **Lista de Desejos**: Adicionar filmes à lista de desejos.

### Configuração do Projeto

1. **Clone o Repositório**
   ```sh
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd nome-do-repositorio
   ```

2. **Instale as Dependências**
   Certifique-se de ter o Node.js e o npm instalados. Então, execute:
   ```sh
   npm install
   ```

3. **Configuração do Auth0 e OMDb API**
   - Crie uma conta no [Auth0](https://auth0.com/) e configure uma nova aplicação para obter as credenciais (Client ID, Domain).
   - Obtenha uma chave de API da [OMDb API](http://www.omdbapi.com/apikey.aspx).

4. **Configuração das Credenciais no Angular**
   - Abra o arquivo `src/environments/environment.ts` e adicione suas credenciais do Auth0 e OMDb API:
     ```typescript
     export const environment = {
       production: false,
       auth: {
         domain: 'your-auth0-domain',
         clientId: 'your-auth0-client-id'
       },
       omdbApiKey: 'your-omdb-api-key'
     };
     ```

5. **Inicie o Servidor de Desenvolvimento**
   ```sh
   npm start
   ```

### Estrutura do Código

- **src/**
  - **app/**: Contém os componentes principais do aplicativo.
    - **auth/**: Componentes e serviços relacionados à autenticação.
    - **dashboard/**: Componente do dashboard.
    - **movie-search/**: Componente de busca de filmes.
    - **reviews/**: Componentes para adicionar, editar e visualizar revisões de filmes.
    - **wishlist/**: Componente da lista de desejos.
  - **assets/**: Arquivos estáticos como imagens e estilos.
  - **environments/**: Arquivos de configuração de ambiente.

### Tecnologias Utilizadas

- **Angular**: Framework principal para o desenvolvimento do frontend.
- **Auth0**: Serviço de autenticação e autorização.
- **OMDb API**: Fonte de dados para informações sobre filmes.

### Autor

- Nicole Previd
---
