import express from "express"
import "dotenv/config"
import { DataTypes, Model, Sequelize } from "sequelize"
import cors from "cors"

const app = express()
const port = process.env.PORT ? parseInt(process.env.PORT as string) : 3030
app.use(cors())

app.get('/hello', (req, res) => {
  res. send('Hello World!')
})

app.get('/marmitop', (req, res) => {
  res. send ('marmitop')
})

app. listen(port, () => {
  console.log(`Listening port on ${port}`)
})
const mySequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./db.sqlite",
})

const recette = mySequelize.define("nouvellerecette", {
  nom: {
    type: DataTypes.STRING,
  },
  lienimage: {
    type: DataTypes.STRING,
  },
  duree: {
    type: DataTypes.STRING,
  },
  note: {
    type: DataTypes.STRING,
  }
}, {
  timestamps: false,
})


app.post("/add/:nomrecette/:lienimage/:duree/:note", async (req, res) => {
  recette.create({
    nom : req.params.nomrecette, 
    lienimage :req.params.lienimage,
    duree : req.params.duree,
    note : req.params.note,
  })
  res.sendStatus(200);
});
