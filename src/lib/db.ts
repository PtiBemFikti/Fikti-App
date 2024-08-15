import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Dan123',
  database: 'pemira',
});

export default pool;
