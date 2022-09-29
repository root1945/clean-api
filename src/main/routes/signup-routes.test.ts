import request from 'supertest'
import app from '../config/app'

describe('Signup Routes', () => {
  test('Should return an account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Victor',
        email: 'victor@gmail.com',
        password: 'victor123',
        passwordConfirmation: 'victor123'
      })
      .expect(200)
  })
})
