import express, { Request } from "express"
import "dotenv/config"
import { DataTypes, Model, Sequelize } from "sequelize"
import cors from "cors"
import bodyParser from "body-parser"

const app = express()
const port = process.env.PORT ? parseInt(process.env.PORT as string) : 3030
app.use(cors())
app.use(bodyParser.json())


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

const Recette = mySequelize.define("recettes", {
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

interface IMaRequetBody {
  name: string
}
app.post("/marmitops", async (req, res) => {
  console.log('ping reussi');
  
  const recette = await Recette.create({
    nom : req.body.nom, 
    lienimage :req.body.lien_image,
    duree : req.body.duree,
    note : req.body.note,
  })
  res.json(recette)
})


app.get("/marmitops", async (req, res) => {
  console.log('ping reussi');
  
  const recettes = await Recette.findAll()
  res.json(recettes)
})

// app.post("/add/:nomrecette/:lienimage/:duree/:note", async (req, res) => {
  // await recette.create({
//     nom : req.params.nomrecette, 
//     lienimage :req.params.lienimage,
//     duree : req.params.duree,
//     note : req.params.note,
//   })
//   res.sendStatus(200);
// });

// mySequelize.sync({force : true})
mySequelize.sync()