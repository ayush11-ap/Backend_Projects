const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.set(express.static(path.join(__dirname, "public")));

let posts = [
  {
    id: uuidv4(),
    username: "Elon Musk",
    content:
      "When something is important enough, you do it even if the odds are not in your favor.",
  },
  {
    id: uuidv4(),
    username: "Jeff Bezos",
    content:
      "Your brand is what other people say about you when you're not in the room.",
  },
  {
    id: uuidv4(),
    username: "Warren Buffett",
    content:
      "Someone's sitting in the shade today because someone planted a tree a long time ago.",
  },
  {
    id: uuidv4(),
    username: "Bill Gates",
    content:
      "Don’t compare yourself with anyone in this world… if you do so, you are insulting yourself.",
  },
  {
    id: uuidv4(),
    username: "Mukesh Ambani",
    content:
      "It is important to remember that there are no overnight successes. You will need to be dedicated, single-minded, and there is no substitute to hard work.",
  },
  {
    id: uuidv4(),
    username: "Ratan Tata",
    content:
      "I don’t believe in taking right decisions. I take decisions and then make them right.",
  },
  {
    id: uuidv4(),
    username: "Azim Premji",
    content:
      "The real core of a successful business is to be centered on customer needs.",
  },
  {
    id: uuidv4(),
    username: "Larry Page",
    content: "Always work hard on something uncomfortably exciting.",
  },
  {
    id: uuidv4(),
    username: "Mark Zuckerberg",
    content: "The biggest risk is not taking any risk.",
  },
  {
    id: uuidv4(),
    username: "Larry Ellison",
    content:
      "When you innovate, you've got to be prepared for everyone telling you you're nuts.",
  },
  {
    id: uuidv4(),
    username: "Steve Jobs",
    content: "Innovation distinguishes between a leader and a follower.",
  },
];

app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

app.get("/posts/newPost", (req, res) => {
  res.render("new.ejs");
});

app.post("/posts", (req, res) => {
  let { username, content } = req.body;
  let newId = uuidv4();
  posts.push({ newId, username, content });
  res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("show.ejs", { post });
});

app.patch("/posts/:id", (req, res) => {
  let { id } = req.params;
  let newContent = req.body.content;
  let post = posts.find((p) => id === p.id);
  post.content = newContent;
  res.redirect("/posts");
});

app.get("/posts/:id/edit", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("edit.ejs", { post });
});

app.delete("/posts/:id", (req, res) => {
  let { id } = req.params;
  posts = posts.filter((p) => id !== p.id);
  res.redirect("/posts");
});

app.listen(port, () => {
  console.log("listening to port : 8080");
});
