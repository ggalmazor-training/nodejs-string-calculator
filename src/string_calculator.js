export default input => {
  if (input === "")
    return 0;

  if (input.indexOf(',') === -1 && input.indexOf("\n") === -1)
    return parseInt(input);

  if (input.indexOf("\n") === -1) {
    const parts = input.split(',');

    const numbers = parts.map(part => parseInt(part, 10))

    return numbers.reduce((a, b) => a + b, 0);
  }

  const normalizedInput = input.replaceAll("\n", ",");

  const parts = normalizedInput.split(',');

  const numbers = parts.map(part => parseInt(part, 10))

  return numbers.reduce((a, b) => a + b, 0);
}
