var path = require('path');

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename:  './db/autoMo_dev.sqlite'
    }
  },

  test: {
    client: 'sqlite3',
    connection: {
      filename: './db/autoMo_test.sqlite'
    }
  },

};
