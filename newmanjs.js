var newman = require('newman');
newman.run({
    collection: require("./curl.postman_collection.json"),
    reporters: 'cli'
}, function(err, summary) {
    if (err) {
        throw err;
    }
    summary.run.executions.forEach(exec => {
        console.log('Request name:', exec.item.name);
        console.log('Response:', JSON.parse(exec.response.stream));
    });
});



