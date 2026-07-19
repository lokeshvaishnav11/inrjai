const mysql = require('mysql2/promise');

// const connection = mysql.createPool({
//     host: 'localhost',
//     user: 'demoprojects',
//     // user:'root',
//     // password:'',
//     // database:'goa',
//     password: '#demoProjects#$4@',
//     database: 'goagamesclub',
//     port: 8000
// });

// module.exports = connection;

// const mysql = require('mysql2/promise');

// const connection = mysql.createPool({
//         host: '127.0.0.1',
//         user: 'lokesh',
//         password: 'lokeshkumar123',
//         database: 'cgame',
//         port: 3306
//     });

// #1D4268

// const connection = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: '',  // XAMPP's default root password is blank
//     database: '1xbet',
//     port: 3306
// });

const connection = mysql.createPool({
  host: '127.0.0.1',  // or '127.0.0.1'
  user: 'avaitorgame',
  password: 'Avatior123',
  database: 'gamedb'
});
module.exports = connection;
