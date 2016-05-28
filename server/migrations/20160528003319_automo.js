
exports.up = function(knex, Promise) {

  return Promise.all([
    knex.schema.createTable('users', function (table) {
      table.increments('id').primary();
      table.string('username', 255);
      table.string('password', 255);
      table.timestamps();
    }).then(function (table) {
      console.log('Created users table.');
    }),

    knex.schema.createTable('cars', function (table) {
      table.increments('id').primary();
      table.string('user_id', 255);
      table.string('car_VIN', 255);
      table.timestamps();
    }).then(function (table) {
      console.log('Created cars table.');
    }),

    knex.schema.createTable('sessions', function (table) {
      table.increments('id').primary();
      table.integer('user_id')
      table.string('session_key');
      table.timestamps();
    }).then(function (table) {
      console.log('Created sessions table.');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all(
    [
      knex.schema.dropTable('users'),
      knex.schema.dropTable('cars'),
      knex.schema.dropTable('sessions')
    ]
  )
};
