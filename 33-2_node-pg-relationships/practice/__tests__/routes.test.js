// __tests__/routes.test.js

const request = require('supertest');
const app = require('../app');

describe('GET /companies', () => {
  test('It should respond with a list of companies', async () => {
    const response = await request(app).get('/companies');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('companies');
  });
});

// Add similar tests for other routes
