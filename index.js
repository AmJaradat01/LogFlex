const fs = require('fs');

let date = new Date()
let year = date.getUTCFullYear();
let month = date.getUTCMonth() + 1;
let day = date.getUTCDate();
let hour = date.getHours();
let minutes = date.getMinutes();

let dd_mm_yyyy = `${day}-${month}-${year}`;
let mm_dd_yyyy = `${month}-${day}-${year}`;
let ddmmyyyy = `${day}${month}${year}`;
let mmddyyyy = `${month}${day}${year}`;

let yyyy_mm_dd = `${year}-${month}-${day}`;
let yyyy_dd_mm = `${year}-${day}-${month}`;
let yyyymmdd = `${year}${month}${day}`;
let yyyyddmm = `${year}${day}${month}`;

let dd_mm = `${day}-${month}`;
let mm_dd = `${day}-${month}`;
let ddmm = `${day}${month}`;
let mmdd = `${month}${day}`;

let dd_mm_yyyy_Time = `${dd_mm_yyyy}T${hour}:${minutes}`;
let ddmmyyyy_Time = `${ddmmyyyy}T${hour}:${minutes}`;
let mm_dd_yyyy_Time = `${mm_dd_yyyy}T${hour}:${minutes}`;
let mmddyyyy_Time = `${mmddyyyy}T${hour}:${minutes}`;

let yyyy_mm_dd_Time = `${yyyy_mm_dd}T${hour}:${minutes}`;
let yyyy_dd_mm_Time = `${yyyy_dd_mm}T${hour}:${minutes}`;
let yyyymmdd_Time = `${yyyymmdd}T${hour}:${minutes}`;
let yyyyddmm_Time = `${yyyyddmm}T${hour}:${minutes}`;

let dd_mm_Time = `${dd_mm}T${hour}:${minutes}`;
let mm_dd_Time = `${mm_dd}T${hour}:${minutes}`;
let ddmm_Time = `${ddmm}T${hour}:${minutes}`;
let mmdd_Time = `${mmdd}T${hour}:${minutes}`;


/**
 * @param {String} fileName name of the file that will export {ex: result.csv || data.log etc...}
 * @param {string} DateTimeStampFormat select one of these timestamps, 'dd-mm-yyyy', 'mm-dd-yyyy', 'dd-mm', 'mm-dd', or '' for no timestamp.
 * @param {string} fileExtention put the file extenstion like '.csv', '.txt', '.log', etc...
 * @param {any} data1 Mandatory data field
 * @param {any} data2 Mandatory data field
 * @param  {...any} dataX Optinal data fields
 * @returns {void}
 */
module.exports = function logDataToFile(fileName, DateTimeStampFormat, fileExtension, data1, data2, ...dataX) {
    DateTimeStampFormat = DateTimeStampFormat.toLocaleLowerCase();
    switch (DateTimeStampFormat) {
        case "dd-mm-yyyy":
            DateTimeStampFormat = dd_mm_yyyy;
            break;
        case "mm-dd-yyyy":
            DateTimeStampFormat = mm_dd_yyyy;
            break;
        case "ddmmyyyy":
            DateTimeStampFormat = ddmmyyyy;
            break;
        case "mmddyyyy":
            DateTimeStampFormat = mmddyyyy;
            break;
        case "yyyy-mm-dd":
            DateTimeStampFormat = yyyy_mm_dd;
            break;
        case "yyyy-dd-mm":
            DateTimeStampFormat = yyyy_dd_mm;
            break;
        case "yyyymmdd":
            DateTimeStampFormat = yyyymmdd;
            break;
        case "yyyyddmm":
            DateTimeStampFormat = yyyyddmm;
            break;
        case "dd-mm":
            DateTimeStampFormat = dd_mm;
            break;
        case "mm-dd":
            DateTimeStampFormat = mm_dd;
            break;
        case "ddmm":
            DateTimeStampFormat = ddmm;
            break;
        case "mmdd":
            DateTimeStampFormat = mmdd;
            break;
        case "dd-mm-yyyy-Time":
            DateTimeStampFormat = dd_mm_yyyy_Time;
            break;
        case "ddmmyyyy-Time":
            DateTimeStampFormat = ddmmyyyy_Time;
            break;
        case "mm-dd-yyyy-Time":
            DateTimeStampFormat = mm_dd_yyyy_Time;
            break;
        case "mmddyyyy-Time":
            DateTimeStampFormat = mmddyyyy_Time;
            break;
        case "yyyy-mm-dd-Time":
            DateTimeStampFormat = yyyy_mm_dd_Time;
            break;
        case "yyyy-dd-mm-Time":
            DateTimeStampFormat = yyyy_dd_mm_Time;
            break;
        case "yyyymmdd-Time":
            DateTimeStampFormat = yyyymmdd_Time;
            break;
        case "yyyyddmm-Time":
            DateTimeStampFormat = yyyyddmm_Time;
            break;
        case "ddmm-Time":
            DateTimeStampFormat = ddmm_Time;
            break;
        case "mm-dd-Time":
            DateTimeStampFormat = mm_dd_Time;
            break;
        case "mmdd-Time":
            DateTimeStampFormat = mmdd_Time;
            break;
        case "dd-mm-Time":
            DateTimeStampFormat = dd_mm_Time;
            break;
        case "default":
            DateTimeStampFormat = date;
            break;

        default:
            DateTimeStampFormat = "";
            break;
    }

    fs.appendFile(`${fileName}${DateTimeStampFormat}${fileExtension}`, `${data1},${data2},${dataX}\n`, function (err) {
        if (err) throw err;
    });
}