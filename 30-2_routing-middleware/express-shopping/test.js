const request = require('supertest');
const app = require('./app');

describe('Shopping List API', () => {
  it('should get the list of items', async () => {
    const response = await request(app).get('/items');
    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
  });

  it('should add a new item', async () => {
    const newItem = { name: 'popsicle', price: 1.45 };
    const response = await request(app).post('/items').send(newItem);
    expect(response.status).toBe(201);
    expect(response.body).toEqual({ added: newItem });
  });

  it('should get a single item by name', async () => {
    const response = await request(app).get('/items/popsicle');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ name: 'popsicle', price: 1.45 });
  });

  it('should update a single item', async () => {
    const updatedData = { name: 'new popsicle', price: 2.45 };
    const response = await request(app).patch('/items/popsicle').send(updatedData);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ updated: updatedData });
  });

  it('should delete a single item', async () => {
    const response = await request(app).delete('/items/new%20popsicle');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Deleted' });
  });
});
