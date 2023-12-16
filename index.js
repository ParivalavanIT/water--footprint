const express = require("express");
const app = express();
const port = 3000 || process.env.PORT;

const categories = require("./public/categories");

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", { categories });
});

app.get("/category/:categoryName", (req, res) => {
  const { categoryName } = req.params;
  const items = categories[categoryName] || [];
  res.render("items", { categoryName, items });
});

app.get("/category/:categoryName/:itemName", (req, res) => {
  const { categoryName, itemName } = req.params;
  const selectedCategory = categories[categoryName];
  const selectedItem = selectedCategory.find(
    (item) => item.name.toLowerCase() === itemName.toLowerCase()
  );
  const description = selectedItem
    ? selectedItem.details
    : `Description for ${itemName} in ${categoryName}`;

  if (selectedItem) {
    res.render("description", { selectedItem, description });
  } else {
    res.status(404).send("Item not found");
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
