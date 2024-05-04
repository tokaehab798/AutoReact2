import * as method from "../constants/requestMethods";
import { axiosInstance } from "../helpers/axiosConfig";

export const getInternalTrainingById = (id) => {
  return axiosInstance({
    url: `/api/v1/internalTrainings/${id}`,
    method: method.GET,
  });
};
