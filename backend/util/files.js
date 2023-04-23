import fs from "fs"

const DB_PATH = "./data.json"

// diese ftion muss die dateien holen
export function load () {
    return new Promise ((resolve, reject)  => {
        fs.readFile(DB_PATH, "utf8", (err, data) => {       // oder (err, data)
            if (err) reject (err)
            else resolve(JSON.parse(data.toString()))
        })
    })
   
}

// die funktion muss die daten auslesen und dann muss sie die daten finzufügen/ dazuschreiben 
// 
export function save(item) {
    return new Promise ((resolve, reject) => {
        load(). then(data => {
          //console.log(data.find((seat) => seat.id == item.id ))
            data[item.id-1].status=true
            fs.writeFile(DB_PATH, JSON.stringify(data, null, 2), (err) => {
                if (err) reject(err)
                else {
                    resolve(data)
                }
            } )
        })
    })
}



