export default input => {
  if (input === "")
    return 0;

  let numbers;
  if (!input.startsWith("//")) {
    const normalizedInput = input.replaceAll("\n", ",");
    const parts = normalizedInput.split(',');
    numbers = parts.map(part => parseInt(part, 10))
  } else {
    const separators = [];
    separators.push("\n");
    separators.push(input[2]);
    const normalizedInput = separators.reduce((body, separator) => body.replaceAll(separator, ","), input.substr(4));
    const parts = normalizedInput.split(',');
    numbers = parts.map(part => parseInt(part, 10))
  }

  return numbers.reduce((a, b) => a + b, 0);
}
