var app = require('../tests')
var natural = require('../index')

describe('group all test plugin middleware', () => {
  it('multiple test plugin middleware send 5000 duplicate plugin', async (done) => {
    const multiplePlugin = []

    for (let i = 0; i < 1000; i++) {
      multiplePlugin.push(global.bodyParser.urlencoded({ extended: false }),
        global.bodyParser.json(), global.bodyParser.text(), global.bodyParser.raw(),
        global.cookieParser())
    }

    await natural.pluginMiddlewareAsync(app, multiplePlugin)

    expect(multiplePlugin.length).toStrictEqual(5000)
    expect(typeof multiplePlugin).toStrictEqual('object')
    done()
  })

  it('multiple test plugin middleware send 5000 duplicate plugin with space', async (done) => {
    const multiplePlugin = []

    for (let i = 0; i < 1000; i++) {
      multiplePlugin.push(

        global.bodyParser.urlencoded({ extended: false }),

        global.bodyParser.json(),

        global.bodyParser.text(),

        global.bodyParser.raw(),

        global.cookieParser()
      )
    }

    await natural.pluginMiddlewareAsync(app, multiplePlugin)

    expect(multiplePlugin.length).toStrictEqual(5000)
    expect(typeof multiplePlugin).toStrictEqual('object')
    done()
  })
})
