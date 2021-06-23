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

  addAvatarToIbmServer(avatarFile){
    return axios.post(
      config.url.UPLOAD,
     { avatarFile },
    { headers : authHeader() }
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
