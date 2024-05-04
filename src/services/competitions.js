import * as method from "../constants/requestMethods";
import { axiosInstance } from "../helpers/axiosConfig";

export const getAllCompetitions = () => {
  return axiosInstance({
    url: "/api/v1/competitions",
    method: method.GET,

  });
};
