import express from "express";
import cors from "cors"
import { load, save } from "./util/files.js"
import {body, validationResult} from "express-validator"
import "./config/config.js"
console.log(process.env.PORT)




const app = express()
//const PORT = 9999 wird ersetzt durch 
const PORT = process.env.PORT || 9090   
// mit alterntivem Port
// console.log(process.env.PORT)  
// ergibt 9999 und wenn mann diesen Port auslöscht, dann greift 9090


app.use(cors())
app.use(express.json())

// VLIDATOR
// pp.get("/api/v1/cinema",
// body("klasse").isString(), 
 //body("status").isBoolean(),
//body("preis").isNumeric(),
//(req, res) => {
 //   const errors = validtionResult(req)
 //if (!errors.isEmpty()) {
 //   return res.status(400).json({error:errors.array()})
// }

app.get("/api/v1/cinema", (req, res) => {
   load()
   .then(data => res.json(data))
   .catch(err => {
    console.log(err)
    res.status(500).end() 
})
})

app.put("/api/v1/cinema", (req, res) => {
  const sitz = req.body
    save(sitz)
  .then(data => res.json(data))
  .catch(err=> {
    console.log(err)
    res.status(500).end() 
  })
})
 

app.listen(PORT, () => console.log("Lausche auf Port:", PORT))
