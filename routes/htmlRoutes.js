var path = require("path");

module.exports = function(app){

  // return the note page
  app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
  })

  // return the beginning "get started" screen
  app.get("*", (req, res)=>{
    res.sendFile(path.join(__dirname, "../public/index.html"))
  })
}