const fs = require('fs')

let packageText = fs.readFileSync('./package.json').toString()
let packageJSON = JSON.parse(packageText);
packageJSON.homepage = "."
fs.writeFileSync('./package.json', JSON.stringify(packageJSON, null, 2))
console.log("Homepage added to package.json")