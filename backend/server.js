const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var cors = require('cors')

const MongoClient = require("mongodb").MongoClient;
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

app.use(cors())

// dont forget the <>
const connectionString =
  "mongodb+srv://Spanol:122246@cluster.2rq04.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then((client) => {
    console.log("Connected to Database");
    const db = client.db("portfolio");
    const projectsCollection = db.collection("projects");
    const contactsCollection = db.collection("contact");
    app.get('/', (req, res) => {
      res.sendFile(__dirname + '/Template/index.html')
    })

    app.get("/home-projects", (req, res) => {
      db.collection("projects")
        .find()
        .toArray()
        .then((results) => {
          res.render("projetos.ejs", { projects: results });
        })
        .catch((error) => console.error(error));
    });

    app.get("/home-contacts", (req, res) => {
      db.collection("contact")
        .find()
        .toArray()
        .then((results) => {
          res.render("contatos.ejs", { contacts: results });
        })
        .catch((error) => console.error(error));
    });

    app.get("/projects", (req, res) => {
      db.collection("projects")
        .find()
        .toArray()
        .then((results) => {
          res.send(results)
        })
        .catch((error) => console.error(error));
    });

    app.get("/contacts", (req, res) => {
      db.collection("contact")
        .find()
        .toArray()
        .then((results) => {
          res.send(results)
        })
        .catch((error) => console.error(error));
    });

    app.put("/projects", (req, res) => {
      projectsCollection
        .findOneAndUpdate(query, update, options)
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
    });
    app.put("/contacts", (req, res) => {
      contactsCollection
        .findOneAndUpdate(query, update, options)
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
    });

    app.post("/projects", (req, res) => {
      projectsCollection
        .insertOne(req.body)
        .then((result) => {
          console.log(result);
        })
        .catch((error) => console.log(error));
    });
    app.post("/contacts", (req, res) => {
      contactsCollection
        .insertOne(req.body)
        .then((result) => {
          res.json("Success");
        })
        .catch((error) => console.log(error));
    });

    app.delete("/projects", (req, res) => {
      projectsCollection
        .deleteOne({ name: req.body.name })
        .then((result) => res.json(`Deleted project`))
        .catch((error) => console.error(error));
    });

    app.delete("/contacts", (req, res) => {
      contactsCollection
        .deleteOne({ name: req.body.name })
        .then((result) => res.json(`Deleted contact`))
        .catch((error) => console.error(error));
    });

    app.listen(PORT, () => {
      console.log(`Server listening on ${PORT}`);
    });
  })
  .catch((error) => console.error(error));
