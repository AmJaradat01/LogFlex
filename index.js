const fs = require('fs');
 
/**
 * 
 * @param {String} fileName name of the file that will export {ex: result.csv || data.log etc...}
 * @param {any} dataHeader1 Mandetory data field
 * @param {any} dataHeader2 Mandetory data field
 * @param  {...any} dataHeader3 Optinal data field
 */
module.exports = function logDataToFile(fileName, dataHeader1, dataHeader2, ...dataHeader3) {

     fs.appendFile(fileName, `${dataHeader1},${dataHeader2},${dataHeader3}\n`, function (err) {
         if (err) throw err;
         console.log('Saved!');
     });
}