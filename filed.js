const {gitapi} = require('./gitapi');

const filed = function filed(){
    return gitapi();
}

// filed();

module.exports = filed;