import sc from '../src/string_calculator';

test('An empty string produces 0', () => {
    expect(sc("")).toBe(0);
});