import { Upload, message } from "antd";

export const errorImage = "https://placehold.jp/150x150.png";

export const imageLoadingFailedHandler = (event) => {
  if (!event.target.src || event.target.src === "") {
    event.target.src = errorImage;
  }
  event.target.onerror = null;
};

const isImage = (file) => {
  return file.type.includes("image/");
};

export const beforUploadTypeFileIsImage = (file) => {
  if (!isImage(file)) {
    message.error(`${file.name} is not an image file`);
  }

  return isImage(file) || Upload.LIST_IGNORE;
};
