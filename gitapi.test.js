const gitapi = require('./gitapi');

test('test for empty parameter',()=>{
    expect(gitapi()).toBe('No username was provided');
});