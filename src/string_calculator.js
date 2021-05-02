export default input => {
  if (input === "")
    return 0;

  if (input.indexOf(',') === -1)
    return parseInt(input);

  const partA = input[0];
  const partB = input[2];

  return parseInt(partA) + parseInt(partB);
}
