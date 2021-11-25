export const getExsitingWhistlist = () => {
  const wishes = localStorage.getItem('wishlist');

  if (!wishes) {
    return [];
  } else {
    return JSON.parse(wishes);
  }
};
