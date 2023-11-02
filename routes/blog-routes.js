import express from "express";
// import router from "./user-routes";
import { getAllBlogs, addBlog, update, getById  ,deleteBlog} from "../controllers/blog-controller.js";

const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs);
blogRouter.post("/add",addBlog);
blogRouter.put("/update/:id",update);
blogRouter.get("/:id", getById);
blogRouter.delete("/:id", deleteBlog);

export default blogRouter;