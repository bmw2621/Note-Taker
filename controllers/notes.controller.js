// Using the filesystem directly is not that efficient,  I would recommend
// Using a database would be much better, something small like sqlite3
// Would work great for a small application like this

const fs = require("fs");

const getNotes = (req, res) => {
  fs.readFile("./DB/db.json", (err, data) => {
    if (err) throw err;
    dbData = JSON.parse(data);
    res.send(dbData);
  });
};

const addNote = (req, res) => {
  const newNote = req.body;

  fs.readFile("./DB/db.json", (err, data) => {
    if (err) throw err;

    let dbData = JSON.parse(data);

    // Get the highest id in dataset
    const maxId = dbData.reduce((acc, entry) => {
      if (entry.id > acc) return entry.id;
    }, 0);

    // Add data to dataset
    newNote.id = maxId + 1;
    dbData.push(newNote);

    // Write data to file
    fs.writeFile(
      "./DB/db.json",
      JSON.stringify(dbData, null, 2),
      (err, data) => {
        if (err) throw err;
        res.status(201).send(JSON.stringify(newNote));
      }
    );
  });
};

const deleteNote = (req, res) => {
  // Parameter always passes as a string, so it must be
  // parsed as an integer
  const deleteId = parseInt(req.params.id);

  fs.readFile("./DB/db.json", (err, data) => {
    if (err) throw err;

    // Parse JSON file
    let dbData = JSON.parse(data);

    // Filter out the entry with the passed ID
    dbData = dbData.filter((entry) => entry.id !== deleteId);

    // Write to filesystm
    fs.writeFile(
      "./DB/db.json",
      JSON.stringify(dbData, null, 2),
      (err, data) => {
        if (err) throw err;
      }
    );
  });
  res.status(200).send();
};

module.exports = { getNotes, addNote, deleteNote };
