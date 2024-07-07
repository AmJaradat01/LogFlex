# LogFlex

A flexible logging utility for Node.js with support for TXT, CSV, JSON formats, and more.

## Installation

```bash
npm install LogFlex
```

## Usage

### Basic Usage

By default, the library logs data to a text file (log.txt) in the logs directory:

```js
import { LogFlex } from 'LogFlex';

LogFlex('This is a log message');
```

### Custom File Path

You can specify a custom file path for the log file:

```js
LogFlex('This is a log message in a custom file', {
  filePath: './logs/custom-log'
});
```

### Logging to a CSV File

To log data in CSV format, set the fileType option to 'csv':

```js
LogFlex('This is a log message in CSV', {
  filePath: './logs/custom-log',
  fileType: 'csv'
});
```

### Custom Date Format and Log Level

You can customize the date format and log level:

```js
LogFlex('This is a custom log message', {
  filePath: './logs/custom-log',
  dateFormat: 'yyyy/MM/dd HH:mm',
  logLevel: 'error'
});
```

## Options

- **filePath:** Path to the log file (default: ./logs/log)
- **dateFormat:** Format for the timestamp (default: yyyy-MM-dd HH:mm:ss)
- **logLevel:** Log level (info, warning, error) (default: info)
- **fileType:** File type (txt or csv) (default: txt)

## Log File Formats

### TXT Format

When logging to a TXT file, the log entries will be in the following format:

```css
Timestamp    Level    Message
[2024-07-07 12:34:56] [INFO] This is a log message
```

### CSV Format

```arduino
"Timestamp","Level","Message"
"2024-07-07 12:34:56","INFO","This is a log message"
```

## Example

```js
import { LogFlex } from 'LogFlex';

// Log to a text file
LogFlex('This is a log message');

// Log to a CSV file
LogFlex('This is a log message in CSV', {
  filePath: './logs/custom-log',
  fileType: 'csv'
});

// Log to a custom text file
LogFlex('This is a custom log message', {
  filePath: './logs/custom-log',
  dateFormat: 'yyyy/MM/dd HH:mm',
  logLevel: 'error'
});
```

## Contributing

Please read [CONTRIBUTING](CONTRIBUTING) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
