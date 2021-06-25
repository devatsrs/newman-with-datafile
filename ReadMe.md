# Introduction

    * This is cli tool for postman cli newman
    with datafile

    * Following command will extract gst data from gst website and against list of gstno data.

    * This will use postman collection.json file as input

and csv datafile for data dynamic data.

## Prerequisites

    * node
    * postman

## Installation

    npm install

## Before Run

    * Copy header key 'at' from developer option from https://services.gst.gov.in/ after login.
    * Replace gstno from your list in datafiletest.csv in project folder.
    * Run following commands.

## command to run - Single Mode

    npm start [filename] [at]

    Example:
    npm start datafiletest.csv b57e47186f9548ae913bf1a117bccb94

## command to run - Batch Mode

    - Update bash.sh for csv files and 'at'

    bash.sh
