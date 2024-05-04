import * as method from "../constants/requestMethods";
import { axiosInstance } from "../helpers/axiosConfig";

export const getSuccessStoryById = (id) => {
  return axiosInstance({
    url: `/api/v2/successStories/${id}`,
    method: method.GET,
  });
};

export const deleteSuccessStoryById = (id) => {
  return axiosInstance({
    url: `/api/v2/successStories/${id}`,
    method: method.DELETE,
  });
};

export const addSuccessStory = (data) => {
  return axiosInstance({
    url: `/api/v2/successStories`,
    method: method.POST,
    data,
  });
};
