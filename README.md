# log Data To File

## install

```shell
npm i logdatatofile
```

## Using

```js
const logData = require('logdatatofile');

logData('output', 'dd-mm-yyyy', '.csv', 'data1', 'dataX');
```

```js
const logData = require('logdatatofile');
let fileName = 'output';
let fileExtension = '.csv';
let DateTimeStampFormat = 'dd-mm-yyyy';


logData(fileName, DateTimeStampFormat, fileExtension, 'data1', 'dataX');
```

>File name Example "output20-11-2020.csv"
>At leaset you should add two data inputs

```js
logData(fileName, DateTimeStampFormat, fileExtension, data1, ...dataX)
```

### Date TimeStamp Format Options

| DateTime Format | Result                   |
|:---------------:|:------------------------:|
|    dd-mm-yyyy   |        6-12-2020         |
|    mm-dd-yyyy   |        12-6-2020         |
|     ddmmyyyy    |         6122020          |
|     mmddyyyy    |  1262020                 |
|    yyyy-mm-dd   | 2020-12-6                |
|    yyyy-dd-mm   | 2020-6-12                |
|     yyyymmdd    |  2020126                 |
|     yyyyddmm    |  2020612                 |
|       dd-mm     |   6-12                   |
|       mm-dd     |   12-6                   |
|       ddmm      |    612                   |
|       ddmm      |    126                   |
| dd-mm-yyyy-Time |  6-12-2020T14_33         |
| ddmmyyyy-Time   |  6122020T14_33           |
| mm-dd-yyyy-Time |  12-6-2020T14_33         |
| mmddyyyy-Time   |  6122020T14_33           |
| yyyy-mm-dd-Time |  2020-12-6T14_33         |
| yyyy-dd-mm-Time |  2020-6-12T14_33         |
| yyyymmdd-Time   |  2020126T14_33           |
| yyyyddmm-Time   |  2020612T14_33           |
| ddmm-Time       |  612T14_33               |
| mm-dd-Time      |  12-6T14_33              |
| mmdd-Time       |  12-6T14_33              |
| dd-mm-Time      |  6-12T14_33              |
| default         | 2020-12-06T12:20:08.335Z |
