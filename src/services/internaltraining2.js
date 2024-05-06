import * as method from "../constants/requestMethods";
import { axiosInstance } from "../helpers/axiosConfig";

export const getInternalTrainingById = (id) => {
  return axiosInstance({
    url: `/api/v2/internalTrainings/${id}`,
    method: method.GET,
  });
};

export const deleteInternalById = (id) => {
  return axiosInstance({
    url: `/api/v2/internalTrainings/${id}`,
    method: method.DELETE,
  });
};