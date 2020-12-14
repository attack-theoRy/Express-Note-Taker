const express = require("express");
// const path = require("path");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, () => {
    console.log(`Server is listening port: ${PORT}`)
  })