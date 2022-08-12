const fs = require('fs')

let packageText = fs.readFileSync('./package.json').toString()
let packageJSON = JSON.parse(packageText);
delete packageJSON.homepage
fs.writeFileSync('./package.json', JSON.stringify(packageJSON, null, 2))
console.log("Homepage removed from package.json")