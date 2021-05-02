import sc from '../src/string_calculator';

test('An empty string produces 0', () => {
    expect(sc("")).toBe(0);
});

test('A string with a number produces that number', () => {
    expect(sc("1")).toBe(1);
    expect(sc("11")).toBe(11);
})

test('A string with numbers separated by commas produce the sum of those numbers', () => {
    expect(sc("1,2")).toBe(3);
});

test('Numbers can also be separated by the newline character', () => {
    expect(sc("1\n2")).toBe(3);
});

test('A custom delimited can be defined', () => {
    expect(sc("//;\n1;2")).toBe(3);

})
