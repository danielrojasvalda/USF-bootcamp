const request = require('supertest');
const app = require('./app');

describe('GET /mean', () => {
  it('should calculate the mean of numbers', async () => {
    const response = await request(app).get('/mean?nums=1,2,3,4,5');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ operation: 'mean', value: 3 });
  });

  it('should handle invalid numbers', async () => {
    const response = await request(app).get('/mean?nums=foo,2,3');
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: 'foo is not a number.' });
  });

  it('should handle empty input', async () => {
    const response = await request(app).get('/mean');
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: 'nums are required.' });
  });
});

describe('GET /median', () => {
  it('should calculate the median of numbers', async () => {
    const response = await request(app).get('/median?nums=1,2,3,4,5');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ operation: 'median', value: 3 });
  });

  it('should handle invalid numbers', async () => {
    const response = await request(app).get('/median?nums=foo,2,3');
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: 'foo is not a number.' });
  });

  it('should handle empty input', async () => {
    const response = await request(app).get('/median');
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: 'nums are required.' });
  });
});

describe('GET /mode', () => {
  it('should calculate the mode of numbers', async () => {
    const response = await request(app).get('/mode?nums=1,2,2,3,4,5');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ operation: 'mode', value: [2] });
  });

  it('should handle invalid numbers', async () => {
    const response = await request(app).get('/mode?nums=foo,2,3');
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: 'foo is not a number.' });
  });

  it('should handle empty input', async () => {
    const response = await request(app).get('/mode');
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: 'nums are required.' });
  });
});
