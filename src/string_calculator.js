export default input => {
  if (input === "")
    return 0;

  if (input.indexOf(',') === -1)
    return parseInt(input);

  const partA = input[0];
  const partB = input[2];
  const parts = [];
  parts.push(partA);
  parts.push(partB);

  const numbers = parts.map(part => parseInt(part, 10))
  const numberA = parseInt(partA);
  const numberB = parseInt(partB);

  return numbers.reduce((a, b) => a + b, 0);
}
