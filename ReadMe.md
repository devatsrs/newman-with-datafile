# Introduction

- This is cli tool for postman cli newman
  with datafile

- Following command will extract gst data from gst website and against list of gstno data.

- This will use postman collection.json file as input
  and csv datafile for data dynamic data.

## command to run

./node_modules/.bin/newman run curl.postman_collection.json -d datafiletest.csv -r csv --reporter-csv-includeBody
