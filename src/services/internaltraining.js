import * as method from "../constants/requestMethods";
import { axiosInstance } from "../helpers/axiosConfig";

export const getAllInternalTrainings = () => {
  return axiosInstance({
    url: "/api/v1/internalTrainings",
    method: method.GET,

  });
};
