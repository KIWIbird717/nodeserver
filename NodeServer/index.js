import express from "express"
import { dirname } from "path"
import { fileURLToPath } from 'url'
import cors from "cors"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const PORT = 8080

const app = express()

app.use(cors())

app.listen(PORT, () => {
  console.log("\x1b[36m" + `App started and Listening on port ${PORT}`)
})


app.get("/", (req, res) => {
  res.send("This info from index.html")
})

app.get("/more-info", (req, res) => {
  res.send("This MORE info about index.html")
})
