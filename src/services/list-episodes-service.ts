import { IncomingMessage } from "http";
import { repositoryPodcast } from "../repositories/podcasts-repository";

export const servicesListEpisodes = async (podcastName:  IncomingMessage) => {
  
  const queryString = podcastName.url?.split("?p")[1] || "";

  const data = await repositoryPodcast(queryString);

  return data;
};