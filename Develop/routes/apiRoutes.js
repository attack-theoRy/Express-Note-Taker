const fs = require('fs');

module.exports = function(app){

let notes = require("../db/db.json")

app.get("/api/notes", (req, res) => {
    return res.json(notes)
})

app.get("/api/notes/:id", (req, res) => {
    // console.log(req.params.id)
    const id = req.params.id;
    let fnote;

    notes.forEach(n => {
        if(id == n.id){
            fnote = n;
            return res.json(fnote)
        }
    })
    return res.json(false)

})

app.post("/api/notes", (req, res) => {
    const newNote = req.body;
    if(notes.length === 0){
        newNote.id = 1 }
    else {
        newNote.id = (notes[notes.length-1].id + 1);
    }
    notes.push(newNote);
    let jsonNotes = JSON.stringify(notes)
    fs.writeFile("./db/db.json", jsonNotes, function(err) {
      if (err) {
        return console.log(err);
      }
      console.log("Success!");
    })
    res.json(true)
  })

}