const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app');

afterAll(() => mongoose.disconnect());

describe('Test the root path', () => {
  test('It should response the GET method', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });
});
