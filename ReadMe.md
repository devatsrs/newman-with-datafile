# Introduction

    * This is cli tool for postman cli newman
    with datafile

    * Following command will extract gst data from gst website and against list of gstno data.

    * This will use postman collection.json file as input

and csv datafile for data dynamic data.

## Prerequisites

    * node
    * postman

## Preinstallation

    * Export collection json file in project root folder.
    * Replace gstno from your list in datafiletest.csv in project folder.
    * Run following commands.

## Installation

    npm install

## command to run

    ./node_modules/.bin/newman run {postman_collection}.json -d {yourdatafile}.csv -r csv --reporter-csv-includeBody
