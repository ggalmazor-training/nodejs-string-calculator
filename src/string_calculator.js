export default input => {
  if (input === "")
    return 0;

  if (input.indexOf(',') === -1 && input.indexOf("\n") === -1)
    return parseInt(input);

  const normalizedInput = input.replaceAll("\n", ",");

  const parts = normalizedInput.split(',');

  const numbers = parts.map(part => parseInt(part, 10))

  return numbers.reduce((a, b) => a + b, 0);
}
