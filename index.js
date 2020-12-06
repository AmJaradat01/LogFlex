const fs = require('fs');

let date = new Date()
let year = date.getUTCFullYear();
let month = (date.getUTCMonth() + 1);
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
let mm_dd = `${month}-${day}`;
let ddmm = `${day}${month}`;
let mmdd = `${month}${day}`;

let dd_mm_yyyy_time = `${dd_mm_yyyy}T${hour}_${minutes}`;
let ddmmyyyy_time = `${ddmmyyyy}T${hour}_${minutes}`;
let mm_dd_yyyy_time = `${mm_dd_yyyy}T${hour}_${minutes}`;
let mmddyyyy_time = `${mmddyyyy}T${hour}_${minutes}`;

let yyyy_mm_dd_time = `${yyyy_mm_dd}T${hour}_${minutes}`;
let yyyy_dd_mm_time = `${yyyy_dd_mm}T${hour}_${minutes}`;
let yyyymmdd_time = `${yyyymmdd}T${hour}_${minutes}`;
let yyyyddmm_time = `${yyyyddmm}T${hour}_${minutes}`;

let dd_mm_time = `${dd_mm}T${hour}_${minutes}`;
let mm_dd_time = `${mm_dd}T${hour}_${minutes}`;
let ddmm_time = `${ddmm}T${hour}_${minutes}`;
let mmdd_time = `${mmdd}T${hour}_${minutes}`;


/**
 * @param {String} fileName name of the file that will export {ex: result.csv || data.log etc...}
 * @param {string} DatetimeStampFormat select one of these timestamps, 'dd-mm-yyyy', 'mm-dd-yyyy', 'dd-mm', 'mm-dd', or '' for no timestamp.
 * @param {string} fileExtention put the file extenstion like '.csv', '.txt', '.log', etc...
 * @param {any} data1 Mandatory data field
 * @param {any} data2 Mandatory data field
 * @param  {...any} dataX Optinal data fields
 * @returns {void}
 */
module.exports = function logDataToFile(fileName, DatetimeStampFormat, fileExtension, data1, data2, ...dataX) {
    DatetimeStampFormat = DatetimeStampFormat.toLocaleLowerCase();
    switch (DatetimeStampFormat) {
        case "dd-mm-yyyy":
            DatetimeStampFormat = dd_mm_yyyy;
            break;
        case "mm-dd-yyyy":
            DatetimeStampFormat = mm_dd_yyyy;
            break;
        case "ddmmyyyy":
            DatetimeStampFormat = ddmmyyyy;
            break;
        case "mmddyyyy":
            DatetimeStampFormat = mmddyyyy;
            break;
        case "yyyy-mm-dd":
            DatetimeStampFormat = yyyy_mm_dd;
            break;
        case "yyyy-dd-mm":
            DatetimeStampFormat = yyyy_dd_mm;
            break;
        case "yyyymmdd":
            DatetimeStampFormat = yyyymmdd;
            break;
        case "yyyyddmm":
            DatetimeStampFormat = yyyyddmm;
            break;
        case "dd-mm":
            DatetimeStampFormat = dd_mm;
            break;
        case "mm-dd":
            DatetimeStampFormat = mm_dd;
            break;
        case "ddmm":
            DatetimeStampFormat = ddmm;
            break;
        case "mmdd":
            DatetimeStampFormat = mmdd;
            break;
        case "dd-mm-yyyy-time":
            DatetimeStampFormat = dd_mm_yyyy_time;
            break;
        case "ddmmyyyy-time":
            DatetimeStampFormat = ddmmyyyy_time;
            break;
        case "mm-dd-yyyy-time":
            DatetimeStampFormat = mm_dd_yyyy_time;
            break;
        case "mmddyyyy-time":
            DatetimeStampFormat = mmddyyyy_time;
            break;
        case "yyyy-mm-dd-time":
            DatetimeStampFormat = yyyy_mm_dd_time;
            break;
        case "yyyy-dd-mm-time":
            DatetimeStampFormat = yyyy_dd_mm_time;
            break;
        case "yyyymmdd-time":
            DatetimeStampFormat = yyyymmdd_time;
            break;
        case "yyyyddmm-time":
            DatetimeStampFormat = yyyyddmm_time;
            break;
        case "ddmm-time":
            DatetimeStampFormat = ddmm_time;
            break;
        case "mm-dd-time":
            DatetimeStampFormat = mm_dd_time;
            break;
        case "mmdd-time":
            DatetimeStampFormat = mmdd_time;
            break;
        case "dd-mm-time":
            DatetimeStampFormat = dd_mm_time;
            break;
        case "default":
            DatetimeStampFormat = date;
            break;

        default:
            DatetimeStampFormat = "";
            break;
    }

    fs.appendFile(`${fileName}${DatetimeStampFormat}${fileExtension}`, `${data1},${data2},${dataX}\n`, function (err) {
        if (err) throw err;
    });
}