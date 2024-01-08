/**
 * Generate the SQL query for a partial update based on the provided data and a mapping of JavaScript keys to SQL column names.
 * This function is particularly useful when updating records in a database table with a subset of fields.
 *
 * @param {Object} dataToUpdate - The data to update, where keys are JavaScript property names and values are the new values.
 * @param {Object} jsToSql - An optional mapping of JavaScript property names to corresponding SQL column names.
 * @returns {Object} An object containing the SQL SET clause and the corresponding values for updating.
 * @throws {BadRequestError} If no data is provided for the update.
 *
 * @example
 * const data = { firstName: 'John', age: 30 };
 * const columnMapping = { firstName: 'first_name' };
 * const { setCols, values } = sqlForPartialUpdate(data, columnMapping);
 * // setCols: '"first_name"=$1, "age"=$2'
 * // values: ['John', 30]
 */
function sqlForPartialUpdate(dataToUpdate, jsToSql = {}) {
  // Extract keys from the provided data
  const keys = Object.keys(dataToUpdate);

  // Throw an error if no data is provided for the update
  if (keys.length === 0) {
    throw new BadRequestError("No data");
  }

  // Generate the SET clause for the SQL query
  const cols = keys.map((colName, idx) =>
    `"${jsToSql[colName] || colName}"=$${idx + 1}`
  );

  return {
    setCols: cols.join(", "),
    values: Object.values(dataToUpdate),
  };
}

module.exports = { sqlForPartialUpdate };
