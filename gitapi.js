const axios = require('axios');
// import axios from 'axios';

function gitapi(){
    return axios.get('https://api.github.com/users/eofafrica4lyf/repos').then(function(res) {
        console.log("data:",res)
        return res
    });
}

console.log(gitapi());
exports.gitapi = gitapi;