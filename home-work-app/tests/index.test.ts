const testFunction = function() {
    return 'Passed';
}

test('Test should be passed', () => {
    expect(testFunction()).toBe('Passed')
});