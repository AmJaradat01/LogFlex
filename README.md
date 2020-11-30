# log Data To File

## install

```shell
npm i logdatatofile
```

## Using

```js
const logData = require('logdatatofile');

logData('output', 'dd-mm-yyyy', '.csv', 'data1', 'data2', 'dataX');
```

```js
const logData = require('logdatatofile');
let fileName = 'output';
let fileExtension = '.csv';
let DateTimeStampFormat = 'dd-mm-yyyy'; //[mm-dd-yyyy, dd-mm, mm-dd, dd-mm-yyyy-mn, mm-dd-yyyy-mn, dd-mm-mn, mm-dd-mn]


logData(fileName, DateTimeStampFormat, fileExtension, 'data1', 'data2', 'dataX');
```

>File name Example "output20-11-2020.csv"
>At leaset you should add two data inputs

```js
logData(fileName, DateTimeStampFormat, fileExtension, data1, data2, ...dataX)
```

### Date TimeStamp Format Options

- dd-mm-yyyy
- mm-dd-yyyy
- dd-mm
- mm-dd
- dd-mm-yyyy-mn
- mm-dd-yyyy-mn
- dd-mm-mn
- mm-dd-mn
- default
