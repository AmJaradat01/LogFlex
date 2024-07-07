import { logDataToFile } from "../src";
import fs from "fs";
import path from "path";

describe("logDataToFile", () => {
  const testLogTxtPath = "./logs/test-log.txt";
  const testLogCsvPath = "./logs/test-log.csv";

  beforeEach(() => {
    [testLogTxtPath, testLogCsvPath].forEach((filePath) => {
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      } else {
        fs.mkdirSync(path.dirname(filePath), { recursive: true });
      }
    });
  });

  test("logs data to a text file with default options", () => {
    logDataToFile("Test log message", {
      filePath: testLogTxtPath.replace(".txt", ""),
      fileType: "txt",
    });
    const logContent = fs.readFileSync(testLogTxtPath, "utf-8");
    expect(logContent).toContain("Timestamp    Level    Message\n");
    expect(logContent).toContain("Test log message");
  });

  test("logs data to a CSV file with custom options", () => {
    logDataToFile("Custom log message", {
      filePath: testLogCsvPath.replace(".csv", ""),
      dateFormat: "yyyy/MM/dd HH:mm",
      logLevel: "error",
      fileType: "csv",
    });
    const logContent = fs.readFileSync(testLogCsvPath, "utf-8");
    expect(logContent).toContain('"Timestamp","Level","Message"\n');
    expect(logContent).toContain('"ERROR","Custom log message"');
  });
});
