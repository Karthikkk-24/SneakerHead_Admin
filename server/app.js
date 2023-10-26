// server/app.mjs
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import db from './config/db.js'; // Import the database connection

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

function getCurrentDateTime() {
    const now = new Date();

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Month is zero-based, so add 1.
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    return formattedDateTime;
}

const currentDateTime = getCurrentDateTime();
console.log(currentDateTime);

// Define a route to add a category to your MySQL database
app.post('/api/addCategory', (req, res) => {
    console.log(req);

    console.log(res);
    // const { category } = req.body;

    // if (!category) {
    //     return res.status(400).json({ message: 'Category name is required' });
    // }

    // const sql = 'INSERT INTO tbl_category (category_name, updated_at) VALUES (?)';

    // db.query(sql, [category], (err, results) => {
    //     if (err) {
    //         console.error('Error adding category:', err);
    //         return res.status(500).json({ message: 'An error occurred while adding the category' });
    //     }

    //     return res.status(200).json({ message: 'Category added successfully' });
    // });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});