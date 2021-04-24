import sc from '../src/string_calculator';

test('An empty string produces 0', () => {
    expect(sc("")).toBe(0);
});

test('A string with a number produces that number', () => {
    expect(sc("1")).toBe(1);
})