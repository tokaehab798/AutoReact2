import * as method from "../constants/requestMethods";
import { axiosInstance } from "../helpers/axiosConfig";

export const getExternalTrainingById = (id) => {
  return axiosInstance({
    url: `/api/v2/externalTrainings/${id}`,
    method: method.GET,
  });
};

export const deleteExternalById = (id) => {
  return axiosInstance({
    url: `/api/v2/externalTrainings/${id}`,
    method: method.DELETE,
  });
};
