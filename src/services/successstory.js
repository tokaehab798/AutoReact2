import * as method from "../constants/requestMethods";
import { axiosInstance } from "../helpers/axiosConfig";

export const getSuccessStoryById = (id) => {
  return axiosInstance({
    url: `/api/v1/successStories/${id}`,
    method: method.GET,
  });
};
