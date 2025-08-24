# Podcast Manager

### Descrição

Um app ao estilo netlix, aonde eu possa centralizar diferentes episódios de podcasts separados por categorias.

### Domínio

podcasts feitos em video

### Features - funcionalidades

- Listar os episódios podcasts em sessões de categorias
- [saúde, bodybuilder, mentalidade, humor]
- Filtrar episódios por nome de podcast

## Como

### Feature:

- Listar os episódios podcasts em sessões de categorias

### Como vou implementar:

Vou retornar em uma api rest (json) o
nome do podcast , nome do episódio, imagem da capa, link

```js
[

{
  podcast: "flow",
  episode: "CBUM - Flow #319",
  videoId: "pQSuQmUfS30"
  cover: "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg"
  link: "https://www.youtube.com/watch?v=pQSuQmUfS30"
  categories: ["saúde", "esporte", "bodybuilder"]
}

{
  podcast: "flow",
  episode: "RUBES BARRICHELLO - Flow #339",
  videoId: "KDGTdiOV4I"
  cover: "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg"
  link: "https://www.youtube.com/watch?v=4KDGTdiOV4I"
  categories: ["esporte", "corrida"]
}

]

```
