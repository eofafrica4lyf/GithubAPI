const gitapi = require('./gitapi');

test('test for empty parameter',()=>{
    expect(gitapi()).toBe('Invalid parameter was passed');
});

test('test to ensure that the parameter passed is a string',()=>{
    expect(gitapi([])).toBe('Invalid parameter was passed');
})