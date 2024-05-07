import * as method from "../constants/requestMethods";
import { axiosInstance } from "../helpers/axiosConfig";

export const createForm = (values) => {
    const {
        userId,
        subject,
        description,
    } = values;
  
    const formData = new FormData();
  
    formData.append("userId", userId);
    formData.append("description", description);
    formData.append("subject", subject);

    return axiosInstance({
      url: `/api/v1/forms/createform`,
      method: method.POST,
      data: formData,
    });
};
