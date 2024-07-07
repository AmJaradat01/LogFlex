import fs from 'fs';
import path from 'path';
import { format } from 'date-fns';
import { ensureDirectoryExists } from './utils';

type LogOptions = {
  filePath?: string;
  dateFormat?: string;
  logLevel?: 'info' | 'warning' | 'error';
  fileType?: 'txt' | 'csv';
};

const defaultOptions: LogOptions = {
  filePath: './logs/log',
  dateFormat: 'yyyy-MM-dd HH:mm:ss',
  logLevel: 'info',
  fileType: 'txt'
};

export function logDataToFile(data: string, options: LogOptions = {}): void {
  const { filePath, dateFormat, logLevel, fileType } = { ...defaultOptions, ...options };
  ensureDirectoryExists(path.dirname(filePath!));

  const timestamp = format(new Date(), dateFormat!);
  const logMessage = fileType === 'csv'
    ? `"${timestamp}","${logLevel?.toUpperCase()}","${data}"\n`
    : `[${timestamp}] [${logLevel?.toUpperCase()}] ${data}\n`;

  const fileExtension = fileType === 'csv' ? 'csv' : 'txt';
  const fullFilePath = `${filePath}.${fileExtension}`;

  try {
    if (!fs.existsSync(fullFilePath)) {
      const header = fileType === 'csv'
        ? `"Timestamp","Level","Message"\n`
        : `Timestamp    Level    Message\n`;
      fs.writeFileSync(fullFilePath, header);
    }
    fs.appendFileSync(fullFilePath, logMessage);
  } catch (error) {
    console.error('Failed to write to log file:', error);
  }
}
