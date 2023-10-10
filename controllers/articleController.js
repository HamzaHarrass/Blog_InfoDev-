const { PrismaClient } = require("@prisma/client");
const Prisma = new PrismaClient();
const flash = require("connect-flash");

const asyncHandler = require("express-async-handler");

const createArticle = asyncHandler(async (req, res) => {
  const { title, content, createdAt } = req.body;
  const imagePath = req.file.filename; // Path to the uploaded file
  console.log("Received form data:", { title, content, createdAt });

  try {
    const newarticle = {
      title,
      content,
      picture: imagePath,
      published: true,
      authorId: 1,
    };
    const createdArticle = await Prisma.Post.create({
      data: newarticle,
    });
    res.redirect("/articles");
  } catch (error) {
    console.log(error);
  }
});

const editArticle = asyncHandler(async (req, res) => {
  const articleId = Number(req.params.id);
  const getdataArticle = await Prisma.Post.findUnique({
    where: {
      id: articleId,
    },
  });
  const formattedDate = new Date(getdataArticle.createdAt)
    .toISOString()
    .split("T")[0];

  res.render("editFormArticle", { article: { getdataArticle, formattedDate } });
});

const updateArticle = asyncHandler(async (req, res) => {
  console.log(req.file);
  console.log(req.body);

  const { id, lastimage, title, content, createdAt } = req.body;

  if (req.file === undefined) {


      try {
        


          console.log("Article updated without changing the image");
          res.status(200).json({ message: "Article updated without changing the image" });
      } catch (error) {
          console.error(error.message);
          res.status(500).json({ error: "Internal Server Error" });
      }
  } else {
      try {
          
          console.log("Article updated with a new image");
          res.status(200).json({ message: "Article updated with a new image" });
      } catch (error) {
          console.error(error.message);
          res.status(500).json({ error: "Internal Server Error" });
      }
  }
});


const deleteArticle = asyncHandler(async (req, res) => {
  const articleId = Number(req.params.id);
  console.log(articleId);

  try {
    const deleteArticle = await Prisma.Post.delete({
      where: {
        id: articleId,
      },
    });

    if (deleteArticle) {
      req.flash("success", "Article deleted successfully.");
    } else {
      req.flash("error", "Article not found or could not be deleted.");
    }

    // Redirect to articles page or any other appropriate page
    res.redirect("/articles");
  } catch (error) {
    req.flash("error", "Error deleting article: " + error.message);
    res.redirect("/articles"); // Redirect to articles page or any other appropriate page
  }
});
const getArticle = asyncHandler(async (req, res) => {
  try {
    const article = await Prisma.Post.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    // res.status(200).json(article)

    res.render("article", { Article: article });
    // console.log(Article);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
});
const getAllArticle = asyncHandler(async (req, res) => {
  try {
    const articles = await Prisma.Post.findMany();
    // res.status(200).json(articles)
    res.render("home", { articles });
  } catch (error) {
    console.log(error).json(error.message);
  }
});
const Review = asyncHandler(async (req, res) => {
  const { Idarticle } = req.body; // Destructure Idarticle from req.body
  console.log("thid is ", Idarticle);
  try {
    const getAllcomment = await Prisma.Review.findMany({
      where: {
        postId: parseInt(Idarticle), // Use Idarticle in the where clause after parsing it to an integer
      },
    });
    res.status(200).json({ getAllcomment });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const updateStatus = asyncHandler(async (req, res) => {});
const addComment = asyncHandler(async (req, res) => {
  const { comment, Idarticle } = req.body;
  console.log("Comment:", comment);
  console.log("Idarticle:", Idarticle);
  try {
    const newComment = {
      comment: comment,
      userId: 1,
      postId: parseInt(Idarticle),
    };
    const addnewComment = await Prisma.Review.create({
      data: newComment,
    });

    // Send a success response back to the client with the newly created comment
    res
      .status(201)
      .json({ message: "Comment added successfully", comment: addnewComment });
  } catch (error) {
    // Handle any errors that occur during the creation of the comment
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});
const deleteComment = asyncHandler(async (req, res) => {});
const ratingArticle = asyncHandler(async (req, res) => {});
const home = (req, res) => {
  // res.render('home');
};
const formArticle = (req, res) => {
  res.render("addFormArticle");
};

module.exports = {
  createArticle,
  updateArticle,
  deleteArticle,
  getArticle,
  getAllArticle,
  formArticle,
  Review,
  updateStatus,
  home,
  addComment,
  deleteComment,
  ratingArticle,
  editArticle,
};
