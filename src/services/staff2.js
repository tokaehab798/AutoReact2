import * as method from "../constants/requestMethods";
import { axiosInstance } from "../helpers/axiosConfig";

export const getStaffById = (id) => {
  return axiosInstance({
    url: `/api/v1/staff/${id}`,
    method: method.GET,
  });
};