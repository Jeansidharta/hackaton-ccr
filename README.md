# Projeto Hackaton CCR

Este projeto foi desenvolvido para [hackaton](http://www.grupoccr.com.br/hackathonccr/) organizada pela [CCR](http://www.grupoccr.com.br/) iniciada em 16/01/2021. A proposta da hackaton é criar uma solução relacionada à diversidade e empregabilidade de jovens no mercado de trabalho.

**Essa solução está disponível publicamente neste link: [https://hackaton-ccr-125.netlify.app/](https://hackaton-ccr-125.netlify.app/)**

## Sobre nossa solução

### Visão geral

Este software é construído para coletar dados de colaboradores e empregados de uma empresa. Será enviado um link para toda a equipe da empresa que está sendo analisada. Cada pessoa deve preencher os formulários apropriadamente. Os dados preenchidos serão enviados para nós, para serem devidamente interpretados. Após devidamente entender esses dados e suas causas, vamos pode tomar decisões de como ajudar a empresa contratante a melhorar a sua diversidade, e consequentemente a efetividade. As empresas terão acesso a um dashboard, que mostra uma visão geral dos dados que foram coletados, tendo o cuidado de anonimizar esses dados para que não seja identificado quem respondeu o que.

### Tecnologias utilizadas

Este projeto foi construído com as seguintes tecnologias:

- [Next.js](https://nextjs.org/) - Framework de Server-side Rendering. Escolhida pela maior flexibilidade que essa ferramenta disponibiliza ao projeto em relação à alternativa (create-react-app).

- [React](https://reactjs.org/) - Biblioteca de componentização. Escolhida para acelerar o desenvolvimento, e facilitar a modularização do projeto

- [Styled components](https://styled-components.com/) - Biblioteca de estilização. Escolhida para facilitar a estilização dos componentes

- [Typescript](https://www.typescriptlang.org/) - Transpilador que implementa tipagem em Javascript. Escolhido para documentar melhor o projeto, e dificultar a criaçào de bugs.

- [React toastify](https://github.com/fkhadra/react-toastify) - Biblioteca de componente de Toast.

## A equipe por trás deste projeto

Nós somos a equipe número 125, composta pelos integrantes:

- **Adla Viana** - Antropóloga, etnógrafa e pesquisadora
- **Maria Luiza Salvador** - UX/UI designer
- **Jean Sidharta** - Desenvolvedor web

## Como executar este projeto

### Pre-requisitos

Você deve ter o [Node.js](https://nodejs.org/) e o NPM instalado.

### Inicialização

Primeiro, clone este projeto em uma pasta, e execute o comando `npm install` dentro da pasta do projeto, para instalar as depêndencias do projeto

### Executando

Para executar o projeto, execute `npm run dev` na pasta do projeto. Para abrir a página web, abra a seguinte URL em seu browser de preferência: [http://localhost:3000](http://localhost:3000).

## Exemplo de fluxo

Primeiro, os colaboradores/empregados receberão um link individual, que abrirá a página de formulário de informações ([http://localhost:3000](http://localhost:3000)). Os dados fornecidos pelo usuário serão enviados para o nosso banco de dados para serem tratados e analisados.

Na nossa página de admin, nós (desenvolvedoroes e mantenedores da plataforma), e apenas nós, temos acesso a todas as respostas de todos os usuários. Nem os colaboradores e nem as empresas tem acesso à essas informações, apenas a equipe responsável pela análise desses dados. Essa página é a ([http://localhost:3000/admin](http://localhost:3000/admin))

A empresa em sí terá acesso a uma tabela com um resumo simplificado dos dados, garantindo a segurança e privacidade das pessoas que responderam os formulários.Essa página é a ([http://localhost:3000/dashboard](http://localhost:3000/dashboard))