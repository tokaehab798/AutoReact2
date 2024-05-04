import * as method from "../constants/requestMethods";
import { axiosInstance } from "../helpers/axiosConfig";

export const getAllSuccessStories = () => {
  return axiosInstance({
    url: "/api/v1/successStories",
    method: method.GET,
  });
};