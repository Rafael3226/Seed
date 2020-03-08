const csvFilePath='listings.csv';
const csv=require('csvtojson');
const fs= require('fs');

csv().fromFile(csvFilePath).then((jsonObj)=> {
  fs.writeFile('listings.json', JSON.stringify(jsonObj),'utf8', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
})

//console.log(jsonArray);

/*



module.exports =  r;
console.log(jsonArray);
*/
