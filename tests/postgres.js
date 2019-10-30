const { Client } = require('../lib/index')

var credentials = {
  credentials: {
    user:     'gwolf',
    host:     'localhost',
    database: 'gwolf',
    password: '',
    port:     5432
    ,schema:   'bookstore'
  }
}
// 

const client = new Client(credentials)

client.connect().then(function(connection) {
  connection.execute("SELECT * FROM my_bookshop_books").then(function(result) {
    console.log(result)
  }, function(error) {
    console.error("Failed!", error);
  })
}, function(error) {
  console.error("Failed!", error);
})
