function gitapi(username){
    if(typeof(username) !== 'string'){
        return 'Invalid parameter was passed';
    }
}

module.exports = gitapi;