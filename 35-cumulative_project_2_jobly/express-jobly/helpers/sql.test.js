// Import the necessary modules
const { sqlForPartialUpdate } = require('./sql.js');

// Describe your test suite
describe('sqlForPartialUpdate', () => {
  // Test case 1
  test('generates correct SQL query and values for partial update', () => {
    const dataToUpdate = { firstName: 'John', age: 30 };
    const columnMapping = { firstName: 'first_name' };

    const { setCols, values } = sqlForPartialUpdate(dataToUpdate, columnMapping);

    expect(setCols).toBe('"first_name"=$1, "age"=$2');
    expect(values).toEqual(['John', 30]);
  });

  // Test case 2
  test('throws an error if no data is provided', () => {
    const emptyData = {};

    expect(() => sqlForPartialUpdate(emptyData)).toThrow();
  });
});
