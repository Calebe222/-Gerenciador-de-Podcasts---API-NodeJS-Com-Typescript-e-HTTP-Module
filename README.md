# 🎧 Podcast Manager

Um app no estilo Netflix, para centralizar diferentes episódios de podcasts separados por categorias.  
O foco são **podcasts em vídeo**, permitindo uma experiência organizada e simples para o usuário.

---

## 📖 Descrição
O **Podcast Manager** tem como objetivo listar episódios de podcasts em sessões de categorias, facilitando a descoberta de conteúdos.  
As categorias podem incluir, por exemplo: **saúde, bodybuilder, mentalidade, humor, esporte, corrida**.

---

## 🚀 Features
- ✅ Listar os episódios de podcasts em sessões de categorias.  
- ✅ Filtrar episódios por nome de podcast.  
- ✅ Retornar os dados no formato **JSON** via API REST.  

---

## 📂 Estrutura dos dados
A API retorna informações no seguinte formato:

```json
[
  {
    "podcast": "flow",
    "episode": "CBUM - Flow #319",
    "videoId": "pQSuQmUfS30",
    "cover": "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
    "link": "https://www.youtube.com/watch?v=pQSuQmUfS30",
    "categories": ["saúde", "esporte", "bodybuilder"]
  },
  {
    "podcast": "flow",
    "episode": "RUBES BARRICHELLO - Flow #339",
    "videoId": "KDGTdiOV4I",
    "cover": "https://i.ytimg.


🛠️ Como funciona
Feature: Listar episódios em categorias

A API retorna:

Nome do podcast

Nome do episódio

ID do vídeo

Imagem de capa

Link para o vídeo

Categorias relacionadas

Feature: Filtrar por nome do podcast

O usuário pode passar um parâmetro na API para buscar apenas episódios de um determinado podcast.

📌 Domínio

Podcasts feitos em vídeo (YouTube ou outra plataforma).

📅 Próximos passos

Implementar paginação dos episódios.

Criar interface web para consumir a API.

Adicionar autenticação para usuários.
