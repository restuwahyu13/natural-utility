var app = require('../tests')
var natural = require('../lib/index')
var inputs = []
var modules = []

describe('group all test module middleware', () => {
  it('multiple test  module loader middleware load 33 module default node', async (done) => {
    await natural.globalModule(
      ['assert', 'async_hooks', 'child_process', 'cluster', 'crypto', 'dns', 'events', 'fs', 'http', 'http2', 'https', 'inspector', 'net', 'os', 'path', 'perf_hooks', 'punycode', 'querystring', 'readline', 'repl', 'stream', 'string_decoder', 'timers', 'tls', 'trace_events', 'tty', 'dgram', 'url', 'util', 'v8', 'vm', 'worker_threads', 'zlib'], ['assert', 'async_hooks', 'child_process', 'cluster', 'crypto', 'dns', 'events', 'fs', 'http', 'http2', 'https', 'inspector', 'net', 'os', 'path', 'perf_hooks', 'punycode', 'querystring', 'readline', 'repl', 'stream', 'string_decoder', 'timers', 'tls', 'trace_events', 'tty', 'dgram', 'url', 'util', 'v8', 'vm', 'worker_threads', 'zlib'])

    expect('assert' in global).toBeTruthy()
    expect(global).toHaveProperty('assert')
    expect(global.assert).toBeDefined()

    expect('async_hooks' in global).toBeTruthy()
    expect(global).toHaveProperty('async_hooks')
    expect(global.async_hooks).toBeDefined()

    expect('child_process' in global).toBeTruthy()
    expect(global).toHaveProperty('child_process')
    expect(global.child_process).toBeDefined()

    expect('cluster' in global).toBeTruthy()
    expect(global).toHaveProperty('cluster')
    expect(global.cluster).toBeDefined()

    expect('crypto' in global).toBeTruthy()
    expect(global).toHaveProperty('crypto')
    expect(global.crypto).toBeDefined()

    expect('dns' in global).toBeTruthy()
    expect(global).toHaveProperty('dns')
    expect(global.dns).toBeDefined()

    expect('events' in global).toBeTruthy()
    expect(global).toHaveProperty('events')
    expect(global.events).toBeDefined()

    expect('events' in global).toBeTruthy()
    expect(global).toHaveProperty('fs')
    expect(global.fs).toBeDefined()

    expect('http' in global).toBeTruthy()
    expect(global).toHaveProperty('http')
    expect(global.http).toBeDefined()

    expect('http2' in global).toBeTruthy()
    expect(global).toHaveProperty('http2')
    expect(global.http2).toBeDefined()

    expect('https' in global).toBeTruthy()
    expect(global).toHaveProperty('https')
    expect(global.https).toBeDefined()

    expect('inspector' in global).toBeTruthy()
    expect(global).toHaveProperty('inspector')
    expect(global.inspector).toBeDefined()

    expect('net' in global).toBeTruthy()
    expect(global).toHaveProperty('net')
    expect(global.net).toBeDefined()

    expect('os' in global).toBeTruthy()
    expect(global).toHaveProperty('os')
    expect(global.os).toBeDefined()

    expect('path' in global).toBeTruthy()
    expect(global).toHaveProperty('path')
    expect(global.path).toBeDefined()

    expect('perf_hooks' in global).toBeTruthy()
    expect(global).toHaveProperty('perf_hooks')
    expect(global.perf_hooks).toBeDefined()

    expect('punycode' in global).toBeTruthy()
    expect(global).toHaveProperty('punycode')
    expect(global.punycode).toBeDefined()

    expect('querystring' in global).toBeTruthy()
    expect(global).toHaveProperty('querystring')
    expect(global.querystring).toBeDefined()

    expect('readline' in global).toBeTruthy()
    expect(global).toHaveProperty('readline')
    expect(global.readline).toBeDefined()

    expect('repl' in global).toBeTruthy()
    expect(global).toHaveProperty('repl')
    expect(global.repl).toBeDefined()

    expect('stream' in global).toBeTruthy()
    expect(global).toHaveProperty('stream')
    expect(global.stream).toBeDefined()

    expect('string_decoder' in global).toBeTruthy()
    expect(global).toHaveProperty('string_decoder')
    expect(global.string_decoder).toBeDefined()

    expect('timers' in global).toBeTruthy()
    expect(global).toHaveProperty('timers')
    expect(global.timers).toBeDefined()

    expect('tls' in global).toBeTruthy()
    expect(global).toHaveProperty('tls')
    expect(global.tls).toBeDefined()

    expect('trace_events' in global).toBeTruthy()
    expect(global).toHaveProperty('trace_events')
    expect(global.trace_events).toBeDefined()

    expect('tty' in global).toBeTruthy()
    expect(global).toHaveProperty('tty')
    expect(global.tty).toBeDefined()

    expect('dgram' in global).toBeTruthy()
    expect(global).toHaveProperty('dgram')
    expect(global.dgram).toBeDefined()

    expect('url' in global).toBeTruthy()
    expect(global).toHaveProperty('url')
    expect(global.url).toBeDefined()

    expect('util' in global).toBeTruthy()
    expect(global).toHaveProperty('util')
    expect(global.util).toBeDefined()

    expect('v8' in global).toBeTruthy()
    expect(global).toHaveProperty('v8')
    expect(global.v8).toBeDefined()

    expect('vm' in global).toBeTruthy()
    expect(global).toHaveProperty('vm')
    expect(global.vm).toBeDefined()

    expect('worker_threads' in global).toBeTruthy()
    expect(global).toHaveProperty('worker_threads')
    expect(global.worker_threads).toBeDefined()

    expect('zlib' in global).toBeTruthy()
    expect(global).toHaveProperty('zlib')
    expect(global.zlib).toBeDefined()
    done()
  })

  it('multiple test module loader middleware load 3300 duplicate module default node', async (done) => {
    for (let i = 0; i < 100; i++) {
      inputs.push('assert', 'async_hooks', 'child_process', 'cluster', 'crypto', 'dns', 'events', 'fs', 'http', 'http2', 'https', 'inspector', 'net', 'os', 'path', 'perf_hooks', 'punycode', 'querystring', 'readline', 'repl', 'stream', 'string_decoder', 'timers', 'tls', 'trace_events', 'tty', 'dgram', 'url', 'util', 'v8', 'vm', 'worker_threads', 'zlib')
    }

    for (let i = 0; i < 100; i++) {
      modules.push('assert', 'async_hooks', 'child_process', 'cluster', 'crypto', 'dns', 'events', 'fs', 'http', 'http2', 'https', 'inspector', 'net', 'os', 'path', 'perf_hooks', 'punycode', 'querystring', 'readline', 'repl', 'stream', 'string_decoder', 'timers', 'tls', 'trace_events', 'tty', 'dgram', 'url', 'util', 'v8', 'vm', 'worker_threads', 'zlib')
    }

    await natural.globalModule(inputs, modules)

    expect('assert' in global).toBeTruthy()
    expect(global).toHaveProperty('assert')
    expect(global.assert).toBeDefined()

    expect('async_hooks' in global).toBeTruthy()
    expect(global).toHaveProperty('async_hooks')
    expect(global.async_hooks).toBeDefined()

    expect('child_process' in global).toBeTruthy()
    expect(global).toHaveProperty('child_process')
    expect(global.child_process).toBeDefined()

    expect('cluster' in global).toBeTruthy()
    expect(global).toHaveProperty('cluster')
    expect(global.cluster).toBeDefined()

    expect('crypto' in global).toBeTruthy()
    expect(global).toHaveProperty('crypto')
    expect(global.crypto).toBeDefined()

    expect('dns' in global).toBeTruthy()
    expect(global).toHaveProperty('dns')
    expect(global.dns).toBeDefined()

    expect('events' in global).toBeTruthy()
    expect(global).toHaveProperty('events')
    expect(global.events).toBeDefined()

    expect('events' in global).toBeTruthy()
    expect(global).toHaveProperty('fs')
    expect(global.fs).toBeDefined()

    expect('http' in global).toBeTruthy()
    expect(global).toHaveProperty('http')
    expect(global.http).toBeDefined()

    expect('http2' in global).toBeTruthy()
    expect(global).toHaveProperty('http2')
    expect(global.http2).toBeDefined()

    expect('https' in global).toBeTruthy()
    expect(global).toHaveProperty('https')
    expect(global.https).toBeDefined()

    expect('inspector' in global).toBeTruthy()
    expect(global).toHaveProperty('inspector')
    expect(global.inspector).toBeDefined()

    expect('net' in global).toBeTruthy()
    expect(global).toHaveProperty('net')
    expect(global.net).toBeDefined()

    expect('os' in global).toBeTruthy()
    expect(global).toHaveProperty('os')
    expect(global.os).toBeDefined()

    expect('path' in global).toBeTruthy()
    expect(global).toHaveProperty('path')
    expect(global.path).toBeDefined()

    expect('perf_hooks' in global).toBeTruthy()
    expect(global).toHaveProperty('perf_hooks')
    expect(global.perf_hooks).toBeDefined()

    expect('punycode' in global).toBeTruthy()
    expect(global).toHaveProperty('punycode')
    expect(global.punycode).toBeDefined()

    expect('querystring' in global).toBeTruthy()
    expect(global).toHaveProperty('querystring')
    expect(global.querystring).toBeDefined()

    expect('readline' in global).toBeTruthy()
    expect(global).toHaveProperty('readline')
    expect(global.readline).toBeDefined()

    expect('repl' in global).toBeTruthy()
    expect(global).toHaveProperty('repl')
    expect(global.repl).toBeDefined()

    expect('stream' in global).toBeTruthy()
    expect(global).toHaveProperty('stream')
    expect(global.stream).toBeDefined()

    expect('string_decoder' in global).toBeTruthy()
    expect(global).toHaveProperty('string_decoder')
    expect(global.string_decoder).toBeDefined()

    expect('timers' in global).toBeTruthy()
    expect(global).toHaveProperty('timers')
    expect(global.timers).toBeDefined()

    expect('tls' in global).toBeTruthy()
    expect(global).toHaveProperty('tls')
    expect(global.tls).toBeDefined()

    expect('trace_events' in global).toBeTruthy()
    expect(global).toHaveProperty('trace_events')
    expect(global.trace_events).toBeDefined()

    expect('tty' in global).toBeTruthy()
    expect(global).toHaveProperty('tty')
    expect(global.tty).toBeDefined()

    expect('dgram' in global).toBeTruthy()
    expect(global).toHaveProperty('dgram')
    expect(global.dgram).toBeDefined()

    expect('url' in global).toBeTruthy()
    expect(global).toHaveProperty('url')
    expect(global.url).toBeDefined()

    expect('util' in global).toBeTruthy()
    expect(global).toHaveProperty('util')
    expect(global.util).toBeDefined()

    expect('v8' in global).toBeTruthy()
    expect(global).toHaveProperty('v8')
    expect(global.v8).toBeDefined()

    expect('vm' in global).toBeTruthy()
    expect(global).toHaveProperty('vm')
    expect(global.vm).toBeDefined()

    expect('worker_threads' in global).toBeTruthy()
    expect(global).toHaveProperty('worker_threads')
    expect(global.worker_threads).toBeDefined()

    expect('zlib' in global).toBeTruthy()
    expect(global).toHaveProperty('zlib')
    expect(global.zlib).toBeDefined()

    expect(inputs.length).toStrictEqual(3300)
    expect(modules.length).toStrictEqual(3300)
    done()
  })
})
