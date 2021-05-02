export default input => {
  if (input === "")
    return 0;

  let normalizedInput;
  if (!input.startsWith("//")) {
    normalizedInput = input.replaceAll("\n", ",");
  } else {
    const separators = [];
    separators.push("\n");
    separators.push(input[2]);
    normalizedInput = separators.reduce((body, separator) => body.replaceAll(separator, ","), input.substr(4));
  }

  const parts = normalizedInput.split(',');
  const numbers = parts.map(part => parseInt(part, 10))

  let negativeNumbers = numbers.filter(number => number < 0);
  if (negativeNumbers.length > 0)
    throw new Error(`Negative numbers are not supported: ${negativeNumbers.join(", ")}`);

  return numbers.reduce((a, b) => a + b, 0);
}
