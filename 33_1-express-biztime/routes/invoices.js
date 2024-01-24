const express = require('express');
const router = express.Router();
const db = require('../db');
const ExpressError = require('../expressError');

router.get('/', async (req, res, next) => {
  try {
    const result = await db.query('SELECT * FROM invoices');
    return res.json({ invoices: result.rows });
  } catch (err) {
    return next(err);
  }
});

// Add GET /invoices/:id, POST /invoices, PUT /invoices/:id, DELETE /invoices/:id

module.exports = router;
