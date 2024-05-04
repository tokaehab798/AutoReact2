import * as method from "../constants/requestMethods";
import { axiosInstance } from "../helpers/axiosConfig";

export const getCompetitionById = (id) => {
  return axiosInstance({
    url: `/api/v2/competitions/${id}`,
    method: method.GET,
  });
};
