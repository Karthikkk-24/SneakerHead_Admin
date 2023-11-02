// server/app.mjs
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import fs from 'fs';
import multer from 'multer';
import path from 'path';
import db from './config/db.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

function getCurrentDateTime() {
    const now = new Date();

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
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

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        console.log('called');
        callback(null, 'public/uploads/banners'); // Store uploaded files in the "public/uploads/banners" folder
    },
    filename: (req, file, callback) => {
        callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
});


const upload = multer({ storage: storage });

app.post('/api/uploadBanner', upload.single('banner_image'), (req, res) => {
    // console.log(req)
    if (!req.body) {
        // console.log('hello')
        return res.status(400).json({ message: 'No file uploaded' });
    }

    
    const { bannerLocation, filename } = req.body;
    // console.log(bannerLocation);
    // console.log(filename);
    const location = `uploads/banners/${filename}`;

    const sql = 'INSERT INTO tbl_banner (banner_image, banner_location) VALUES (?, ?)';
    db.query(sql, [filename, location, `uploads/banners/${req.body.filename}`], (err, result) => {
        console.log('data inserted');
        if (err) {
            console.error('Error inserting into database:', err);
            return res.status(500).json({ message: 'Error inserting into database' });
        }
        // return res.status(200).json({ message: 'File uploaded and details saved to the database' });

        fs.copyFile(bannerLocation, `public/uploads/banners/${filename}`, (err) => {
            console.log('error');
            if (err) {
                console.error('Error copying file locally:', err);
                return res.status(500).json({ message: 'Error copying file locally' });
            }

            return res.status(200).json({ message: 'File uploaded and details saved to the database' });
        });
    });
});

app.get('/api/getBanners', async (req, res) => {
    const sql = 'SELECT * FROM tbl_banner';

    try {
        const results = await db.query(sql);
        return res.status(200).json(results);
    } catch (error) {
        console.error('Error retrieving banners:', error);
        return res.status(500).json({ message: 'An error occurred while retrieving banners' });
    }
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
