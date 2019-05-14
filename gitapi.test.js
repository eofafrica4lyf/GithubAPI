const filed = require('./filed');
// const axios = require('axios');
jest.mock("./gitapi");
// import gitapi from './gitapi';


test('test to ensure that a valid string/username was passed and a response was gotten', ()=>{
    // console.log(gitapi());
    return filed().then(data =>{
        expect(data).toBe('GithubAPI');
    });
    // await expect(gitapi()).toContain('GithubAPI');
});

test('test to ensure that a valid string/username was passed and a response was gotten', ()=>{
    // console.log(gitapi());
    return filed().catch(e => 
        expect(e).toMatch('error'));

    // await expect(gitapi()).toContain('GithubAPI');
});