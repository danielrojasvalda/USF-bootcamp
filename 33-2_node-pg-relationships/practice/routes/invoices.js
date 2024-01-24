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

// GET /invoices/:id
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await db.query(`
      SELECT i.id, i.comp_code, i.amt, i.paid, i.add_date, i.paid_date, c.code AS company_code, c.name AS company_name, c.description AS company_description
      FROM invoices AS i
      JOIN companies AS c ON i.comp_code = c.code
      WHERE i.id = $1
    `, [id]);

    if (result.rows.length === 0) {
      throw new ExpressError('Invoice not found', 404);
    }

    const invoice = result.rows[0];
    return res.json({ invoice });
  } catch (err) {
    return next(err);
  }
});

// POST /invoices
router.post('/', async (req, res, next) => {
  try {
    const { comp_code, amt } = req.body;
    const result = await db.query('INSERT INTO invoices (comp_code, amt) VALUES ($1, $2) RETURNING *', [comp_code, amt]);

    return res.status(201).json({ invoice: result.rows[0] });
  } catch (err) {
    return next(err);
  }
});

// PUT /invoices/:id
router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { amt, paid } = req.body;

    let paidDate = null;
    if (paid && !paid_date) {
      paidDate = new Date();
    } else if (!paid) {
      paidDate = null;
    }

    const result = await db.query('UPDATE invoices SET amt = $1, paid = $2, paid_date = $3 WHERE id = $4 RETURNING *', [amt, paid, paidDate, id]);

    if (result.rows.length === 0) {
      throw new ExpressError('Invoice not found', 404);
    }

    return res.json({ invoice: result.rows[0] });
  } catch (err) {
    return next(err);
  }
});

// PUT /invoices/:id
router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { amt, paid } = req.body;

    let paidDate = null;
    if (paid && !paid_date) {
      paidDate = new Date();
    } else if (!paid) {
      paidDate = null;
    }

    const result = await db.query('UPDATE invoices SET amt = $1, paid = $2, paid_date = $3 WHERE id = $4 RETURNING *', [amt, paid, paidDate, id]);

    if (result.rows.length === 0) {
      throw new ExpressError('Invoice not found', 404);
    }

    return res.json({ invoice: result.rows[0] });
  } catch (err) {
    return next(err);
  }
});


module.exports = router;
