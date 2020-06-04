var app = require('../tests')
var supertest = require('supertest')
var request = supertest(app)
var natural = require('../index')
var naturalFlashTest = require('./data/natural_flash')

describe('group all test flash message', () => {
  it('multiple test flash message send 50 error messages', async (done) => {

    const errorMessages = []
    await natural.pluginMiddleware(app, [natural.flashExpress()])
    await natural.routeMiddleware(app, [naturalFlashTest()])
    const res = await request.get('/tests5');
    errorMessages.push(res.body.errors);
    expect(typeof res.body.errors).toBeDefined()
    expect(typeof res.body.errors).toStrictEqual('object')

         supertest(app)
          .post('/tests6')
          .send({errors: errorMessages})
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err, res) => {
             if(err) new Error(err)
             done()
             expect(typeof res.body.errors).toBeDefined()
             expect(typeof res.body.errors).toStrictEqual('object')
          })
    })
})
