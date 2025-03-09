const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogList) => {
  return blogList.reduce((acc, item) => acc + item.likes, 0);
};

module.exports = {
  dummy,
  totalLikes,
};
