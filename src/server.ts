import * as http from "http";

import {getListEpisodes, getFilterEpisodes} from "./controllers/podcasts-controllers";
import { Routes } from "./routes/limp";
import { HttpMethod } from "./utils/http-methods";

const server = http.createServer(
  async (request: http.IncomingMessage, response: http.ServerResponse) => {


    const [baseUrl, queryString] = request.url!.split("?") ?? ["", ""];


    // Listar Podcasts
    if (request.method === HttpMethod.GET && baseUrl === Routes.LIST) {
      await getListEpisodes(request, response);
    }
    if(request.method === HttpMethod.GET && baseUrl === Routes.EPISODE){ 
      await getFilterEpisodes(request, response);
    }

  }
);

const port = process.env.PORT;

server.listen(port, () => {
  console.log(`Server iniciado na porta ${port}`)

});
