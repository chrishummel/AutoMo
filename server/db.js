var path = require('path');

var config = require('./knexfile.js')
var env = process.env.NODE_ENV || 'development'
var knex = require('knex')(config[env])

module.exports = knex

knex.schema.hasTable('users').then(function(exists) {
  if (!exists) {
    knex.schema.createTable('users', function (table) {
      table.increments('id').primary();
      table.string('username', 255);
      table.string('password', 255);
      table.timestamps();
    }).then(function (table) {
      console.log('Created users table.');
    });
  }
});

knex.schema.hasTable('cars').then(function(exists) {
  if (!exists) {
    knex.schema.createTable('cars', function (table) {
      table.increments('id').primary();
      table.string('user_id', 255);
      table.string('car_VIN', 255);
      table.timestamps();
    }).then(function (table) {
      console.log('Created cars table.');
    });
  }
});

knex.schema.hasTable('sessions').then(function(exists) {
  if (!exists) {
    knex.schema.createTable('sessions', function (table) {
      table.increments('id').primary();
      table.integer('user_id')
      table.string('session_key');
      table.timestamps();
    }).then(function (table) {
      console.log('Created sessions table.');
    });
  }
});