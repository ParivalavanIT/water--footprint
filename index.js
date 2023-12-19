const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const categories = require("./public/categories");

app.set("view engine", "ejs");
app.use(express.static("./public"));

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
// Existing routes

// Route to handle search
app.get('/search', (req, res) => {
  const { query } = req.query; // Get the search query from the request
  
  // Filter categories based on the search query
  const filteredCategories = Object.keys(categories).filter(category => {
    // Filter logic based on category name or item names
    const categoryLowerCase = category.toLowerCase();
    if (categoryLowerCase.includes(query.toLowerCase())) {
      return true; // Include the category if it matches the search query
    }

    // Check item names in the category
    const items = categories[category];
    for (const item of items) {
      if (item.name.toLowerCase().includes(query.toLowerCase())) {
        return true; // Include the category if any item matches the search query
      }
    }

    return false;
  });

  // Render the filtered categories on the search results page
  res.render('search', { filteredCategories, query });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
