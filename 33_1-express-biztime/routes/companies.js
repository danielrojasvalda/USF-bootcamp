const express = require('express');
const router = express.Router();
const db = require('../db');
const ExpressError = require('../expressError');

// Middleware to parse JSON
router.use(express.json());

// GET /companies
router.get('/', async (req, res, next) => {
  try {
    const result = await db.query('SELECT code, name FROM companies');
    return res.json({ companies: result.rows });
  } catch (err) {
    return next(err);
  }
});

// GET /companies/:code
router.get('/:code', async (req, res, next) => {
  try {
    const { code } = req.params;
    const result = await db.query('SELECT * FROM companies WHERE code = $1', [code]);

    if (result.rows.length === 0) {
      throw new ExpressError('Company not found', 404);
    }

    return res.json({ company: result.rows[0] });
  } catch (err) {
    return next(err);
  }
});

// POST /companies
router.post('/', async (req, res, next) => {
  try {
    const { code, name, description } = req.body;
    const result = await db.query('INSERT INTO companies (code, name, description) VALUES ($1, $2, $3) RETURNING *', [code, name, description]);
    return res.status(201).json({ company: result.rows[0] });
  } catch (err) {
    return next(err);
  }
});

// PUT /companies/:code
router.put('/:code', async (req, res, next) => {
  try {
    const { code } = req.params;
    const { name, description } = req.body;
    const result = await db.query('UPDATE companies SET name = $1, description = $2 WHERE code = $3 RETURNING *', [name, description, code]);

    if (result.rows.length === 0) {
      throw new ExpressError('Company not found', 404);
    }

    return res.json({ company: result.rows[0] });
  } catch (err) {
    return next(err);
  }
});

// DELETE /companies/:code
router.delete('/:code', async (req, res, next) => {
  try {
    const { code } = req.params;
    const result = await db.query('DELETE FROM companies WHERE code = $1 RETURNING *', [code]);

    if (result.rows.length === 0) {
      throw new ExpressError('Company not found', 404);
    }

    return res.json({ status: 'deleted' });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
