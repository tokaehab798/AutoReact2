const errorImage = "https://placehold.jp/150x150.png";

export const imageLoadingFailedHandler = (event) => {
  event.target.onerror = null;
  event.target.src = errorImage;
};
