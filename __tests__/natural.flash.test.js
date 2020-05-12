var app = require('../tests')
var supertest = require('supertest')
var natural = require('../index')
var NaturalFlashTest = require('./data/natural.flash')

describe('group all test flash message', () => {
  it('multiple test flash message send 50 error messages', async (done) => {
    await natural.routeMiddleware(app, [NaturalFlashTest])

    const errorMessages = []

    const errorsData = await global.fs.readFileSync(global.path.join(__dirname, '../small.dummy.json'),
      { encoding: 'utf-8' })
    errorMessages.push(errorsData)
    const newErrorMessages = JSON.parse(errorsData)

    // POST METHOD
    supertest(app)
      .post('/flash')
      .send({ errors: newErrorMessages })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err)
        done()
        expect(typeof res.body.data).toBeDefined()
        expect(typeof res.body.data).toStrictEqual('object')
      })
  })
})
