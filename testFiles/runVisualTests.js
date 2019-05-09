const Path = require('path')
const Bundler = require('parcel-bundler')
const jest = require('jest')
const PORT = require('./visual.port.js')

const shouldUpdateSnapshots = process.env.UPDATE ? process.env.UPDATE : false

;(async () => {
  const bundler = new Bundler(Path.join(__dirname, '../src/index.html'))
  await bundler.serve(PORT)

  // run visual tests now, that the server is running locally
  const options = {
    projects: [__dirname],
    silent: false,
    'updateSnapshot': shouldUpdateSnapshots,
  }
  const result = await jest.runCLI(options, options.projects)

  const exitCode = result.results.success ? 0 : 1;
  process.exit(exitCode)
})()
