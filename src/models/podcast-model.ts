import { FilterPodCastModel } from "../models/filter-podcast-model";
import { repositoryPodcast } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code";


export const servicesFilterEpisodes = async (
  podcastName: string | undefined) => {

  let responseFormat: FilterPodCastModel = {
    statusCode: 0,
    body: []
  };

  const queryString = podcastName?.split("?p=")[1] || "";
  const data = await repositoryPodcast(queryString);

  if (data) {
    responseFormat.statusCode = StatusCode.OK; 
  } else {
    responseFormat.statusCode = StatusCode.NOT_FOUND;
  }


  responseFormat.body = data;

  return responseFormat;
};
