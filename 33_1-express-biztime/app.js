// app.js

const express = require("express");
const app = express();
const companiesRoutes = require('./routes/companies');
const invoicesRoutes = require('./routes/invoices');


app.use(express.json());

// Use modular routing for companies
app.use('/companies', companiesRoutes);
app.use('/invoices', invoicesRoutes);


/** 404 handler */
app.use(function(req, res, next) {
  const err = new ExpressError("Not Found", 404);
  next(err);
});

/** General error handler */
app.use((err, req, res, next) => {
  const status = err.status || 500;

  return res.status(status).json({
    error: { message: err.message, status: status }
  });
});

module.exports = app;

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
