import * as method from "../constants/requestMethods";
import { axiosInstance } from "../helpers/axiosConfig";

export const getProjectById = (id) => {
  return axiosInstance({
    url: `/api/v1/projects/${id}`,
    method: method.GET,
  });
};
