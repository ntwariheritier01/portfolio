import request from 'supertest'
import app from '../server'
import mongoose from 'mongoose';
import { config } from 'dotenv'


beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI);
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('Auth Endpoints', () => {
  let username = 'caleb';
  let password = '123456';

  it('should register a new user', async () => {
    const res = await request(app).post('/api/auth/register').send({
      username,
      password,
      role: 'user'
    });
    expect(res.statusCode).toBe(201);
    expect(res.body.message).toBe('User registered');
  });

  it('should log in the user', async () => {
    const res = await request(app).post('/api/auth/login').send({
      username,
      password
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.token).toBeDefined();
  });
});
