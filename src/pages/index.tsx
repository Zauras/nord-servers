import { Base } from "../templates/Base";
import { reqGetAuthTokenTesonet,  reqGetServerListTesonet } from "../services/tesonet/api";
import axios from "axios";

const Index = () => <Base />;

const setHeaders = ({ authToken }) => {
  axios.interceptors.request.use((req) => {
    if (authToken) req.headers.Authorization = `Bearer ${authToken}`;

    return req;
  });
};

type ServerDto = {
  name: string
  distance: number
}

export const getServerSideProps = async () => {
  const authResp = await reqGetAuthTokenTesonet();
  const { token } = authResp.data ?? {};
  setHeaders({ authToken: token });
  //f9731b590611a5a9377fbd02f247fcdf
  
  const { data, error } = await reqGetServerListTesonet();

  return {
    props: {},
  };
};

export default Index;
