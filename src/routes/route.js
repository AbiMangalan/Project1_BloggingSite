const express = require('express');
const router = express.Router();
const controller = require("../controllers/authorController")

//Author-Blog route Hndlers
router.post("/author", controller.createAuthor)
// router.post("/blogs", controller.createBlogs)
// router.get("/blogs", controller.getBlogs)
// router.put("/blogs/:blogId", controller.updateBlogs)
// router.delete("/blogs/:blogId", controller.deleteBlogsById)
// router.delete("/blogs?queryParams", controller.deleteBlogs)

module.exports = router;