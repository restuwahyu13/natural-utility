var app = require('../tests')
var natural = require('../lib/index')

describe('group all test plugin middleware', () => {
  it('multiple test plugin middleware send 5000 duplicate plugin', async (done) => {
    const multiplePlugin = []

    for (let i = 0; i < 1000; i++) {
      multiplePlugin.push(bodyParser.urlencoded({ extended: false }),
        bodyParser.json(), bodyParser.text(), bodyParser.raw(), cookieParser())
    }

    await natural.pluginMiddleware(app, multiplePlugin)

    expect(multiplePlugin.length).toStrictEqual(5000)
    expect(typeof multiplePlugin).toStrictEqual('object')
    done()
  })

  it('multiple test plugin middleware send 5000 duplicate plugin with space', async (done) => {
    const multiplePlugin = []

    for (let i = 0; i < 1000; i++) {
      multiplePlugin.push(

        bodyParser.urlencoded({ extended: false }),

        bodyParser.json(),

        bodyParser.text(),

        bodyParser.raw(),

        cookieParser()
      )
    }

    await natural.pluginMiddleware(app, multiplePlugin)

    expect(multiplePlugin.length).toStrictEqual(5000)
    expect(typeof multiplePlugin).toStrictEqual('object')
    done()
  })
})
