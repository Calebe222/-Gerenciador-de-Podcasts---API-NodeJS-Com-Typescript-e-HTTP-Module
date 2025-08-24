import {IncomingMessage, ServerResponse} from "http";

import { servicesListEpisodes } from "../services/list-episodes-service";
import { servicesFilterEpisodes } from "../models/podcast-model";
import { StatusCode } from "../utils/status-code";
import { ContentType } from "../utils/content-type";

export const getListEpisodes = async (
  req: IncomingMessage, 
  res: ServerResponse
) => {
  const content = await servicesListEpisodes(req);

  res.writeHead(StatusCode.OK, {"Content-Type": ContentType.JSON});
  res.end(JSON.stringify(content))
};

export const getFilterEpisodes = async(
  req: IncomingMessage,
  res: ServerResponse
) => { 

  const content = await servicesFilterEpisodes(req.url)

  res.writeHead(StatusCode.OK, {"Content-Type": ContentType.JSON});
  res.end(JSON.stringify(content))
}

