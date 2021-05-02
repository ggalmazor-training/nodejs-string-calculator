export default input => {
  if (input === "")
    return 0;

  if (!input.startsWith("//")) {
    const normalizedInput = input.replaceAll("\n", ",");

    const parts = normalizedInput.split(',');

    const numbers = parts.map(part => parseInt(part, 10))

    return numbers.reduce((a, b) => a + b, 0);
  }

  const separator = input[2];
  let normalizedInput = input.substr(4);
  normalizedInput = normalizedInput.replaceAll(separator, ",");
  normalizedInput = normalizedInput.replaceAll("\n", ",");
  const parts = normalizedInput.split(',');
  const numbers = parts.map(part => parseInt(part, 10))
  return numbers.reduce((a, b) => a + b, 0);
}
