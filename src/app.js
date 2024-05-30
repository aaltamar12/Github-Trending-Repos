require("dotenv").config();
const express = require("express");

const app = express();
const port = 3000;

// Importar rutas
const paths = {
  github: "/api/github",
};

app.use(paths.github, require("../src/routes/github.routes"));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log("Paths: ");

  Object.values(paths).forEach((path) => {
    console.log(`http://localhost:3000${path}?username=`);
  });
});
