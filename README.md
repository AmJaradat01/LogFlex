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
let DateTimeStampFormat = 'dd-mm-yyyy'; //['mm-dd-yyyy', 'dd-mm', 'mm-dd'] 


logData(fileName, DateTimeStampFormat, fileExtension, 'data1', 'data2', 'dataX');
```

>At leaset you should add two data inputs

```js
logData(fileName, DateTimeStampFormat, fileExtension, dataHeader1, dataHeader2, ...dataHeaderX)
```
### Date TimeStamp Format Options:
- dd-mm-yyyy
- mm-dd-yyyy
- dd-mm
- mm-dd