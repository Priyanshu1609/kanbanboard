import axios from "axios";
import { Data } from "../types";

const useFetchData = () => {
  const fetchData = async () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://api.quicksell.co/v1/internal/frontend-assignment",
      headers: {},
    };

    const res = await axios.request(config);
    const data: Data = res.data;
    return data;
  };

  return {
    fetchData,
  };
};

export default useFetchData;
