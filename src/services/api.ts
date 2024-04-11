import axios from "axios";
import { GetAPIArgs } from "./types";

// Note: Usually this should be in an ENV file
const API_BASE_URL = "https://api.bitpin.org/";

const TIMEOUT = 60000;

const $axios = axios.create({
  baseURL: API_BASE_URL,
  timeout: TIMEOUT,
});

$axios.interceptors.response.use((response) => {
  return {
    ...response,
    data: response?.data,
  };
});

export const serviceGet = <T>({
  url,
  queryParamsObj,
  config,
}: GetAPIArgs): Promise<T> => {
  const finalUrl = `${url}?${new URLSearchParams(queryParamsObj || "")}`;

  return new Promise((resolve, reject) => {
    $axios
      .get(finalUrl, config)
      .then((response) => {
        if (response?.status === 200) {
          resolve(response.data);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};
