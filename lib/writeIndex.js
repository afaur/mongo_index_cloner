#!/usr/bin/env node

// this file is for applying an already generated index to a db
var mongodb = require('mongodb');

var connection = new mongodb.MongoClient();

// This is the host and database you want to apply your indexes to
connection.connect(process.argv[2],
  function(err, db) {
    // This is the file where your generated indexes were stored
    require(process.argv[3])(db);
  }
);

