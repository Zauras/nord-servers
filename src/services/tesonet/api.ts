import resolveRequest from "../../utils/resolveRequest";
import axios from "axios";

const reqGetAuthTokenTesonet = async () =>
  resolveRequest(
    axios.post("https://playground.tesonet.lt/v1/tokens", {
      username: "tesonet",
      password: "partyanimal",
    })
  );

const reqGetServerListTesonet = async () =>
  resolveRequest(axios.get("https://playground.tesonet.lt/v1/servers"));

export { reqGetAuthTokenTesonet, reqGetServerListTesonet };
