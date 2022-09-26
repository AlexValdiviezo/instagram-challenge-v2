require("../../settings/databaseConnection");
const postService = require("../../services/PostService");

const getAllPosts = async () => {
  try {
    console.log(await postService.getAll());
  } catch (err) {
    console.log("information could not be obtained");
    console.log("more info: " + err);
  }
};

const getPostById = async ({ id }) => {
  try {
    console.log(await postService.getById(id));
  } catch (err) {
    console.log("post not found");
    console.log("more info: " + err);
  }
};

const createPost = async ({ username, title, image }) => {
  try {
    console.log(await postService.createOne({ username, title, image }));
  } catch (err) {
    console.log("could not create post");
    console.log("more info: " + err);
  }
};

const addLike = async ({ id }) => {
  try {
    console.log(await postService.addLike(id));
  } catch (err) {
    console.log("post not found");
    console.log("more info: " + err);
  }
};
const deletePost = async ({ id }) => {
  try {
    console.log("post deleted: " + (await postService.deleteById(id)));
  } catch (err) {
    console.log("post not exists");
    console.log("more info: " + err);
  }
};

const editPost = async ({ id, title }) => {
  try {
    console.log(await postService.changeTitleService(id, title));
  } catch (err) {
    console.log("post not found");
    console.log("more info: " + err);
  }
};

module.exports = {
  getAllPosts,
  createPost,
  addLike,
  deletePost,
  editPost,
  getPostById,
};
