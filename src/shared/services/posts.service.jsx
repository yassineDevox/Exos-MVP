import { config } from "../../api/url";
import axios from "../../utils/axios";
import authHeader from "./auth-header";

class PostService {

  getAllByLevel(niveau) {
    return axios.post(
      config.url.PUB.listPublicationByLevel,
      { niveau },
      { headers: authHeader() }
    );
  }

  addPublicationContentToIbmServer(pubContent){
    return axios.post(
      config.url.UPLOAD,
     { pubContent },
    )
  }

  add(newPost){
    return axios.post(
      config.url.PUB.ADD,
      {newPost},
      { headers : authHeader() }
    )
  } 




}

export default new PostService();
