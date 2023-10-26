import mysql from 'mysql2/promise';

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sneakerhead_db',
};

const connection = mysql.createPool(dbConfig);

export const query = (sql, values) => {
    return connection.query(sql, values);
};

export default connection;
