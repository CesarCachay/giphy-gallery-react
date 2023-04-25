export const getNumberOfPages = (count: number) => Math.ceil(count / 20);

export const gifFormatter = (giftList: Array<any>) => {
  const formattedArray = giftList.map(gifData => {
    const { username, id, images, title } = gifData || {};
    const originalImage = images?.original?.url
    return {
      id,
      title: title ? `Title: ${title}` : `Owner: ${username}`,
      picture: originalImage
    }
  });
  return formattedArray;
};