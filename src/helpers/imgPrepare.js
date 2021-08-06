export const prepareImgLink = (imgLink) => {
  if (imgLink.match("base64")) {
    return imgLink;
  }
  return `https://api-factory.simbirsoft1.com${imgLink}`;
};
