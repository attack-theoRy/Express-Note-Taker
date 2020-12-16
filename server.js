const express = require("express");
 const path = require("path");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(express.static('public'));

require("./Develop/routes/apiRoutes")(app);
require("./Develop/routes/htmlRoutes")(app);

app.listen(PORT, () => {
    console.log(`Server is listening port: ${PORT}`)
  })