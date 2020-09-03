const testTest = () => {
    return 'Passed';
}
console.log('asd')

test('Test should be passed', () => {
    expect(testTest()).toBe('Passed')
});