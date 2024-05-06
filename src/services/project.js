import * as method from "../constants/requestMethods";
import { axiosInstance } from "../helpers/axiosConfig";

export const getProjectById = (id) => {
  return axiosInstance({
    url: `/api/v2/projects/${id}`,
    method: method.GET,
  });
};


export const deleteProjectById = (id) => {
  return axiosInstance({
    url: `/api/v2/projects/${id}`,
    method: method.DELETE,
  });
};