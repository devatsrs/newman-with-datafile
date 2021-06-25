var newman = require("newman");
var fs = require("fs");
const _ = require("lodash");

var args = process.argv.slice(2);
//console.log("myArgs: ", args);
console.log("Date Filename  ", args[0]);
var dataFilename = args[0];
const envVar = [
  {
    key: "at",
    value: args[1],
  },
];
//console.log("envVar");
//console.log(envVar);

// _.forEach(envVar, function (variable) {
//   console.log(variable.key, variable.value);
// });

newman.run(
  {
    collection: require("./curl.postman_collection.json"),
    bail: true,
    reporters: ["cli"],
    iterationData: dataFilename, // "datafiletest.csv",
    delayRequest: 500,
    envVar: envVar,
    globalVar: envVar,
  },
  function (err, summary) {
    if (err) {
      console.error("Error : " + err.message);
      return false;
      //throw err;
    }
    var output = [];
    summary.run.executions.forEach((exec) => {
      // console.log('Request name:', exec.item.name);
      //console.log("type of "+ typeof exec.response.stream );
      try {
        //console.log('Response:', JSON.parse(exec.response.stream));
        output.push(JSON.parse(exec.response.stream));
      } catch (error) {}
    });
    if (output.length > 0) {
      var date = new Date(Date.now());
      var date_string =
        date.getFullYear() +
        "_" +
        date.getMonth() +
        "_" +
        date.getDate() +
        "__" +
        date.getHours() +
        "_" +
        date.getMinutes() +
        "_" +
        date.getSeconds() +
        "_" +
        date.getMilliseconds();

      //console.log("date_string " + date_string);
      var filename = "./newman/" + date_string + "_data_report.json";
      fs.writeFile(filename, JSON.stringify(output), "utf8", () => {
        console.log(filename + " File written successfully.");
      });
      //console.log(output);
    }
  }
);
