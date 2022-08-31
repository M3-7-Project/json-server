## Gerais

### Registro - **POST** /register

_Request:_

```json
{
  "email": "post@malone.com",
  "password": "Postmalone123."
}
```

_Response:_
<br/>
**201 Created**
• É retornado os dados do usuário (sem a senha), juntamente com seu id e token de acesso.
<br/>
<br/>
**400 Bad Request** • É retornado caso o email ou senha não sejam informados

```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBvc3RAbWFsb25lLmNvbSIsImlhdCI6MTY2MTg5MTU2MywiZXhwIjoxNjYxODk1MTYzLCJzdWIiOiIyIn0.2B7lCiHqWZun6x42WKOYl45-yL1BAQpNQn8B7XAd4LA",
  "user": {
    "email": "post@malone.com",
    "name": "Austin Richard Post",
    "artistic_name": "Post Malone",
    "type": "producer",
    "contact": "postmalone@bussiness.com",
    "description": "Tenho incontáveis tatuagens e minha música é um calderão fervente de country, grunge, hip-hop e R&B! Eu faço música!",
    "genre": ["Hip-Hop", "Grunge", "R&B", "Country"],
    "profile_picture": "https://upload.wikimedia.org/wikipedia/commons/1/12/Post_Malone_at_the_2019_American_Music_Awards.png",
    "social_media": {
      "instagram": "https://www.instagram.com/postmalone/",
      "facebook": "https://www.facebook.com/postmalone",
      "youtube": "https://www.youtube.com/c/postmalone",
      "twitter": "https://twitter.com/postmalone"
    },
    "id": 2
  }
}
```

<br/>

### Criar Perfil - **POST** /profiles/

Para adicionar informações sobre o usuário sendo criado, deve-se usar o id dele
e passar como userId na requisição. Apenas donos logados podem criar seus perfis.

Para criar um produtor:

```json
{
  ...
  "type": "producer",
  ...
}
```

Para criar um usuário:

```json
{
  ...
  "type": "user",
  ...
}
```

_Request:_

```json
{
  "userId": 1,
  "name": "Austin Richard Post",
  "artistic_name": "Post Malone",
  "type": "producer",
  "contact": "postmalone@bussiness.com",
  "description": "Tenho incontáveis tatuagens e minha música é um calderão fervente de country, grunge, hip-hop e R&B! Eu faço música!",
  "genre": ["Hip-Hop", "Grunge", "R&B", "Country"],
  "profile_picture": "https://upload.wikimedia.org/wikipedia/commons/1/12/Post_Malone_at_the_2019_American_Music_Awards.png",
  "social_media": {
    "instagram": "https://www.instagram.com/postmalone/",
    "facebook": "https://www.facebook.com/postmalone",
    "youtube": "https://www.youtube.com/c/postmalone",
    "twitter": "https://twitter.com/postmalone"
  },
  "id": 1
}
```

_Response:_

```json
{
      "userId": 1,
      "artistic_name": "Post Malone",
      "type": "producer",
      "contact": "postmalone@bussiness.com",
      "description": "Tenho incontáveis tatuagens e minha música é um calderão fervente de country, grunge, hip-hop e R&B! Eu faço música!",
      "genre": [
        "Hip-Hop",
        "Grunge",
        "R&B",
        "Country"
      ],
      "profile_picture": "https://upload.wikimedia.org/wikipedia/commons/1/12/Post_Malone_at_the_2019_American_Music_Awards.png",
      "social_media": {
        "instagram": "https://www.instagram.com/postmalone/",
        "facebook": "https://www.facebook.com/postmalone",
        "youtube": "https://www.youtube.com/c/postmalone",
        "twitter": "https://twitter.com/postmalone"
      },
      "id": 1
    },
```

<br/>

### Procurar Perfil - **GET** - /profiles/:id

Procura todos os perfis caso um id não seja passado. Caso tenha id, retorna o perfil do usuário/produtor com o id correspondente. Pode-se usar filtros para
encontrar usuários por nome, por exemplo, ` ?name=Post Malone`

_Response:_

```json
[
  {
    "userId": 1,
    "artistic_name": "Post Malone",
    "type": "producer",
    "contact": "postmalone@bussiness.com",
    "description": "Tenho incontáveis tatuagens e minha música é um calderão fervente de country, grunge, hip-hop e R&B! Eu faço música!",
    "genre": ["Hip-Hop", "Grunge", "R&B", "Country"],
    "profile_picture": "https://upload.wikimedia.org/wikipedia/commons/1/12/Post_Malone_at_the_2019_American_Music_Awards.png",
    "social_media": {
      "instagram": "https://www.instagram.com/postmalone/",
      "facebook": "https://www.facebook.com/postmalone",
      "youtube": "https://www.youtube.com/c/postmalone",
      "twitter": "https://twitter.com/postmalone"
    },
    "id": 1
  }
]
```

<br/>

### Atualizar Perfil - **PATCH** /profiles/:id

Perfil de usuários apenas podem mudar imagem e nome. Produtores podem atualizar
Nome, Nome artístico, Descrição, Contato, Redes sociais (Mudar o link do instagram, facebook, twitter e youtube) e Foto de Perfil.
<br/>
Apenas donos do respectivo perfil podem atualizá-los.

_Request:_

```json
{
  "name": "Austin Richard Post"
}
```

_Response:_

```json
{
  "userId": 1,
  "name": "Austin Richard Post",
  "artistic_name": "Post Malone",
  "type": "producer",
  "contact": "postmalone@bussiness.com",
  "description": "Tenho incontáveis tatuagens e minha música é um calderão fervente de country, grunge, hip-hop e R&B! Eu faço música!",
  "genre": ["Hip-Hop", "Grunge", "R&B", "Country"],
  "profile_picture": "https://upload.wikimedia.org/wikipedia/commons/1/12/Post_Malone_at_the_2019_American_Music_Awards.png",
  "social_media": {
    "instagram": "https://www.instagram.com/postmalone/",
    "facebook": "https://www.facebook.com/postmalone",
    "youtube": "https://www.youtube.com/c/postmalone",
    "twitter": "https://twitter.com/postmalone"
  },
  "id": 1
}
```

<br/>

### Deletar Perfil - **DELETE** /profiles/:id

Deleta o perfil do usuário passado por id.
<br/>
Apenas donos do respectivo perfil podem removê-los. Lembrando que o perfil é diferente do usuário (perfil são os detalhes de cada usuário).

_Response:_

```json
{}
```

<br/>

### Login - **POST** /login

_Request:_

```json
{
  "email": "post@malone.com",
  "password": "Postmalone123."
}
```

_Response:_

```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBvc3RAbWFsb25lLmNvbSIsImlhdCI6MTY2MTg5MjM5NywiZXhwIjoxNjYxODk1OTk3LCJzdWIiOiIyIn0.ogCIZB5WGv1bx7Wcu6G_ioPMRCFalHWzY5YE9LaNLUE",
  "user": {
    "email": "post@malone.com",
    "name": "Austin Richard Post",
    "artistic_name": "Post Malone",
    "type": "producer",
    "contact": "postmalone@bussiness.com",
    "description": "Tenho incontáveis tatuagens e minha música é um calderão fervente de country, grunge, hip-hop e R&B! Eu faço música!",
    "genre": ["Hip-Hop", "Grunge", "R&B", "Country"],
    "profile_picture": "https://upload.wikimedia.org/wikipedia/commons/1/12/Post_Malone_at_the_2019_American_Music_Awards.png",
    "social_media": {
      "instagram": "https://www.instagram.com/postmalone/",
      "facebook": "https://www.facebook.com/postmalone",
      "youtube": "https://www.youtube.com/c/postmalone",
      "twitter": "https://twitter.com/postmalone"
    },
    "id": 2
  }
}
```

<br/>
<br/>

## Produtor

<br/>

### Criar Produção - **POST** - /production/

Cria um álbum (com array de músicas) ou um single. Deve conter o campo "userId"e "profileId",
correspondente ao id do usuário dono do álbum. O campo type deve ser **"album"** ou **"single"**

_Request:_

```json
{
  "userId": 2,
  "profileId": 1,
  "name": "Twelve Carat Thootache",
  "type": "album",
  "preview": "coopedup.mp3",
  "bio": "É o aspecto bipolar e a dualidade de tudo. E assim, há um monte de coisas nesse álbum que são irônicas. E eu acho que esse álbum inteiro é o mais honesto que eu fiz, e estou tão animado para as pessoas ouvirem. Mas cada música conta uma história, então é tipo, ‘Aqui está a vida que vivemos, mas sempre há algo acontecendo no fundo",
  "date": "1656820800000",
  "cover": "https://portalpopline.com.br/wp-content/uploads/2022/06/ab67616d0000b27334362676667a4322838ccc97.jpg",
  "musics": ["I Like You (A Happier Song)", "Cooped Up", "Reputation", "Lemon Tree"]
}
```

_Response:_

```json
{
  "userId": 2,
  "name": "Twelve Carat Thootache",
  "type": "album",
  "preview": "coopedup.mp3",
  "bio": "É o aspecto bipolar e a dualidade de tudo. E assim, há um monte de coisas nesse álbum que são irônicas. E eu acho que esse álbum inteiro é o mais honesto que eu fiz, e estou tão animado para as pessoas ouvirem. Mas cada música conta uma história, então é tipo, ‘Aqui está a vida que vivemos, mas sempre há algo acontecendo no fundo",
  "date": "1656820800000",
  "cover": "https://portalpopline.com.br/wp-content/uploads/2022/06/ab67616d0000b27334362676667a4322838ccc97.jpg",
  "musics": ["I Like You (A Happier Song)", "Cooped Up", "Reputation", "Lemon Tree"],
  "id": 1
}
```

<br/>

### Procurar Produção - **GET** - /production/:id

Retorna todas as produções existentes. Caso o id for fornecido, retorna apenas a com id correspondente.
<br/>
Não há restrição para leitura.

_Response:_

```json
{
  "userId": 2,
  "name": "Twelve Carat Thootacheee3e",
  "type": "album",
  "preview": "coopedup.mp3",
  "bio": "É o aspecto bipolar e a dualidade de tudo. E assim, há um monte de coisas nesse álbum que são irônicas. E eu acho que esse álbum inteiro é o mais honesto que eu fiz, e estou tão animado para as pessoas ouvirem. Mas cada música conta uma história, então é tipo, ‘Aqui está a vida que vivemos, mas sempre há algo acontecendo no fundo",
  "date": "1656820800000",
  "cover": "https://portalpopline.com.br/wp-content/uploads/2022/06/ab67616d0000b27334362676667a4322838ccc97.jpg",
  "musics": ["I Like You (A Happier Song)", "Cooped Up", "Reputation", "Lemon Tree"],
  "id": 1
}
```

<br/>

### Atualizar Produção - **PATCH** - /production/:id

Edita campos da produção com o id correspondente. Apenas o dono da produção consegue atualizá-la. Pode-se atualizar a descrição, data, nome, músicas (adicionar ou excluir),

_Request:_
Atualizando nome.

```json
{
  "name": "Twelve Carat Toothache"
}
```

_Response:_

```json
{
  "userId": 2,
  "name": "Twelve Carat Thootache",
  "type": "album",
  "preview": "coopedup.mp3",
  "bio": "É o aspecto bipolar e a dualidade de tudo. E assim, há um monte de coisas nesse álbum que são irônicas. E eu acho que esse álbum inteiro é o mais honesto que eu fiz, e estou tão animado para as pessoas ouvirem. Mas cada música conta uma história, então é tipo, ‘Aqui está a vida que vivemos, mas sempre há algo acontecendo no fundo",
  "date": "1656820800000",
  "cover": "https://portalpopline.com.br/wp-content/uploads/2022/06/ab67616d0000b27334362676667a4322838ccc97.jpg",
  "musics": ["I Like You (A Happier Song)", "Cooped Up", "Reputation", "Lemon Tree"],
  "id": 1
}
```

<br/>

### Deletar Produção - **Delete** - /production/:id

Deleta a produção com o respectivo id. Apenas donos podem deletar suas produções.

_Response_

```json
{}
```

<br/>

## Stats da Produção

<br/>

### Criar comentário - **POST** - /comments/

Cria um comentário, apenas para usuários autenticados.

_Request:_

```json
{
  "userId": 2,
  "profileId": 2,
  "name": "Nome Sobrenome",
  "body": "Meu comentário na primeira produção",
  "productionId": 1
}
```

_Response:_

```json
{
  "userId": 2,
  "profileId": 2,
  "name": "Nome Sobrenome",
  "body": "Meu comentário na primeira produção",
  "productionId": 1,
  "id": 3
}
```

<br/>

### Criar voto - **POST** - /score/

Permite um usuário votar em uma produção. Apenas usuários logados podem votar.
Deve possuir uma referência à produção e ao perfil do usuário.
_Request:_

```json
{
  "userId": 2,
  "profileId": 2,
  "productionId": 2,
  "name": "Nome Sobrenome"
}
```

_Response:_

```json
{
  "userId": 2,
  "profileId": 2,
  "productionId": 2,
  "name": "Nome Sobrenome",
  "id": 1
}
```

<br/>

### Procurar comentários - **GET** - /comments/:id

Procura todos os comentários. Caso o id seja fornecido, o comentário com
respectivo id é retornado. Disponível à todos.

_Response:_

```json
[
  {
    "userId": 2,
    "name": "Nome Sobrenome",
    "body": "Meu comentário",
    "productionId": 2,
    "id": 1
  },
  {
    "userId": 2,
    "name": "Nome Sobrenome",
    "body": "Meu outro comentário",
    "productionId": 2,
    "id": 2
  },
  {
    "userId": 2,
    "name": "Nome Sobrenome",
    "body": "Meu comentário na primeira produção",
    "productionId": 1,
    "id": 3
  }
]
```

<br/>

### Procurar voto - **GET** - /score/:id

Procura todos os votos. Caso o id seja fornecido, o voto com
respectivo id é retornado. Disponível à todos.

_Response:_

```json
[
  {
    "userId": 2,
    "productionId": 2,
    "name": "Nome Sobrenome",
    "id": 1
  }
]
```

<br/>

### Deletar comentário - **DELETE** - /comments/id

Deleta comentários, deve possuir o campo id. Apenas donos dos comentários podem excluí-los.

_Response:_

```json
{}
```

<br/>

### Deletar score - **DELETE** - /score/id

Deleta scores, deve possuir o campo id. Apenas donos das scores podem excluí-las.

_Response:_

```json
{}
```

## Extras

### Procurar perfis por tipo - **GET** - /profiles/:type

Procura perfis com o tipo passado por types e retorna-os.

### Procurar produções com seus stats - **GET** - /production/:id/stats

Procura por produções com o dado id e retorna seus detalhes junto com seus
stats (comentários e score).

### Procurar por perfis com suas produções - **GET** - /profiles/:id/production

Procura por perfis e suas respectivas produções a partir do id de usuário.

### Procurar por perfis com suas interações - **GET** - /profiles/:id/interactions

Procura por perfis e suas respectivas interações a partir do id de usuário.
