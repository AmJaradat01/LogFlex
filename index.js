const fs = require('fs');

let current_datetime = new Date()
let dd_mm_yyyy = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear();
let mm_dd_yyyy = (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + "-" + current_datetime.getFullYear();
let dd_mm = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1);
let mm_dd = (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate();

/**
 * @param {String} fileName name of the file that will export {ex: result.csv || data.log etc...}
 * @param {string} DateTimeStampFormat select one of these timestamps, 'dd-mm-yyyy', 'mm-dd-yyyy', 'dd-mm', 'mm-dd', or '' for no timestamp.
 * @param {string} fileExtention put the file extenstion like '.csv', '.txt', '.log', etc...
 * @param {any} data1 Mandatory data field
 * @param {any} data2 Mandatory data field
 * @param  {...any} dataX Optinal data fields
 */

module.exports = function logDataToFile(fileName, DateTimeStampFormat, fileExtension, data1, data2, ...dataX) {

    switch (DateTimeStampFormat) {
        case "dd-mm-yyyy":
            DateTimeStampFormat = dd_mm_yyyy;
            break;
        case "mm-dd-yyyy":
            DateTimeStampFormat = mm_dd_yyyy;
            break;
        case "dd-mm":
            DateTimeStampFormat = dd_mm;
            break;
        case "mm-dd":
            DateTimeStampFormat = mm_dd;
            break;
        default:
            DateTimeStampFormat = '';
            break;
    }
    fs.appendFile(`${fileName}${DateTimeStampFormat}${fileExtension}`, `${data1},${data2},${dataX}\n`, function (err) {
        if (err) throw err;
    });
}
