const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogList) => {
  return blogList.reduce((acc, item) => acc + item.likes, 0);
};

const favoritBlog = (blogList) => {
  const favorite = blogList.reduce((fav, blog) => {
    return blog.likes > fav.likes ? blog : fav;
  }, blogList[0]);
  return favorite;
};

const mostLikes = (blogList) => {
  const { author, likes } = blogList.reduce(
    (fav, blog) => (blog.likes > fav.likes ? blog : fav),
    blogList[0]
  );
  return { author, likes };
};

module.exports = {
  dummy,
  totalLikes,
  favoritBlog,
  mostLikes,
};
