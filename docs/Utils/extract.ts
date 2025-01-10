export function extractFunction(fileContent: string, functionName: string) {
  const regex = new RegExp(
    `export function ${functionName}\\s*\\([^)]*\\)\\s*{[^]*?^}`,
    'm'
  );
  const match = fileContent.match(regex);
  if (!match) {
    throw new Error(`Function ${functionName} not found in the file.`);
  }

  return match[0];
}
