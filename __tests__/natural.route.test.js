var app = require('../tests')
var supertest = require('supertest')
var request = supertest(app)
var natural = require('../lib_clone/index')

var NaturalRouteTest = require('./data/natural_route/natural.custom.route')

describe('group all test route middleware', () => {

  it("multiple test custome route middleware send 5000 duplicate function middleware", async(done) => {

        const multipleRoute = []

        for(let i  = 0; i < 5000; i++) {

            multipleRoute.push(NaturalRouteTest())
        }

        const routeMiddleware = await natural.routeMiddleware(app, multipleRoute)

        expect(NaturalRouteTest()).toBeDefined()
        expect(multipleRoute.length).toStrictEqual(5000)
        expect(typeof multipleRoute).toStrictEqual("object")
        done()
    })

  it('custome route middleware test fetch 5000 photo from api', async (done) => {
    const routeMiddleware = await natural.routeMiddleware(app, [NaturalRouteTest()])
    const res = await request.get('/test4')

    res.body.data.map(users => {
      expect(typeof users).toStrictEqual('object')
    })

    expect(typeof res.body.data).toStrictEqual('object')
    expect(NaturalRouteTest()).toBeDefined()
    done()
  })
})
