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


app.post('/api/addCategory', (req, res) => {
    // console.log(req);

    // console.log(res);
    // const { category } = req.body;

    const categoryName = req.body.categoryName;
    if (!categoryName) {
        return res.status(400).json({ message: 'Category name is required' });
    }

    const sql = 'INSERT INTO tbl_category (category_name, updated_at) VALUES (?, ?)';

    db.query(sql, [categoryName, currentDateTime], (err, results) => {
        if (err) {
            console.error('Error adding category:', err);
            return res.status(500).json({ message: 'An error occurred while adding the category' });
        }

        return res.status(200).json({ message: 'Category added successfully' });
    });
});

app.post('/api/addSubCategory', (req, res) => {
    const { subcategoryName, categoryId } = req.body;
    if (!subcategoryName || !categoryId) {
        return res.status(400).json({ message: 'Subcategory name and Category ID are required' });
    }

    const sql = 'INSERT into tbl_subcategory (subcategory_name, category_id, updated_at) VALUES (?, ?, ?)';

    db.query(sql, [subcategoryName, categoryId, currentDateTime], (err, results) => {
        if (err) {
            console.error('Error adding subcategory:', err);
            return res.status(500).json({ message: 'An error occurred while adding the subcategory' });
        }

        return res.status(200).json({ message: 'Subcategory added successfully' });
    })
});

app.post('/api/addProduct', (req, res) => {
    const { productName, categoryId, subcategoryId, description, price } = req.body;
    if (!productName || !categoryId || !subcategoryId || !description || !price) {
        return res.status(400).json({ message: 'Product name, category ID, subcategory ID, description, and price are required' });
    }

    const sql = 'INSERT INTO tbl_product (product_name, category_id, subcategory_id, description, price, updated_at) VALUES (?, ?, ?, ?, ?, ?)';

    db.query(sql, [productName, categoryId, subcategoryId, description, price, currentDateTime], (err, results) => {
        if (err) {
            console.error('Error adding product:', err);
            return res.status(500).json({ message: 'An error occurred while adding the product' });
        }
    })

    return res.status(200).json({ message: 'Product added successfully' });
});

app.get('/api/getCategories', async (req, res) => {
    const sql = 'SELECT * FROM tbl_category';

    try {
        const results = await db.query(sql);
        return res.status(200).json(results);
    } catch (error) {
        console.error('Error retrieving categories:', error);
        return res.status(500).json({ message: 'An error occurred while retrieving categories' });
    }
});

app.get('/api/getSubCategories', async (req, res) => {
    const sql = 'SELECT sc.*, c.category_name FROM `tbl_subcategory` sc LEFT JOIN `tbl_category` c ON sc.category_id = c.id;';

    try {
        const results = await db.query(sql);
        return res.status(200).json(results);
    } catch (error) {
        console.error('Error retrieving categories:', error);
        return res.status(500).json({ message: 'An error occurred while retrieving sub-categories' });
    }
});

app.get('/api/getProducts', async (req, res) => {
    const sql = 'SELECT p.*, sc.subcategory_name, c.category_name FROM `tbl_products` p LEFT JOIN tbl_subcategory sc ON p.subcategory_id = sc.id LEFT JOIN tbl_category c ON p.category_id = c.id;';

    try {
        const results = await db.query(sql);
        return res.setMaxListeners(200).json(results);
    } catch (error) {
        console.log('Error retrieving products:', error);
        return res.status(500).json({ message: 'An error occurred while retrieving products' });
    }
});

app.get('/api/getAccessories', async (req, res) => {
    const sql = 'SELECT a.*, p.product_name FROM `tbl_accessories` a LEFT JOIN `tbl_products` p ON a.product_id = p.id;';

    try {
        const results = await db.query(sql);
        return res.setMaxListeners(200).json(results);
    } catch (error) {
        console.log('Error retrieving accessories:', error);
        return res.status(500).json({ message: 'An error occurred while retrieving accessories' });
    }
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
