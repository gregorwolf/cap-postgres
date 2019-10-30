const { Client } = require('@sap/cds-sqlite')
var credentials = {
  credentials: {
    database:   './bookshop.db'
  }
}
const client = new Client(credentials)
client.connect().then(function(connection) {
  connection.execute("SELECT * FROM `my_bookshop_Books`").then(function(result) {
    console.log(result)
  }, function(error) {
    console.error("Failed!", error);
  })
}, function(error) {
  console.error("Failed!", error);
})
