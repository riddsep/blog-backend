const blogsRouter = require("express").Router();
const Blog = require("../models/blog");

blogsRouter.get("/", (request, response) => {
  Blog.find({}).then((result) => response.json(result));
});

blogsRouter.get("/:id", (request, response, next) => {
  Blog.findById(request.params.id)
    .then((result) => {
      if (result) {
        response.json(result);
      } else {
        response.status(404).end();
      }
    })
    .catch((error) => next(error));
});

blogsRouter.post("/", (request, response, next) => {
  const { title, author, url, likes } = request.body;

  const blog = new Blog({
    title,
    author,
    url,
    likes: likes || 0,
  });

  blog
    .save()
    .then((result) => response.json(result))
    .catch((error) => next(error));
});

blogsRouter.delete("/:id", (request, response, next) => {
  Blog.findByIdAndDelete(request.params.id)
    .then(() => {
      response.status(204).end();
    })
    .catch((error) => next(error));
});

blogsRouter.put("/:id", (request, response, next) => {
  const { title, author, url, likes } = request.body;

  const blog = {
    title,
    author,
    url,
    likes,
  };

  Blog.findByIdAndUpdate(request.params.id, blog, { new: true })
    .then((result) => {
      response.json(result);
    })
    .catch((error) => next(error));
});
module.exports = blogsRouter;
