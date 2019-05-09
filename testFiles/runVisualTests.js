const Path = require('path')
const Bundler = require('parcel-bundler')
const jest = require('jest')

;(async () => {
  const bundler = new Bundler(Path.join(__dirname, '../src/index.html'))
  await bundler.serve(4321)

  // run visual tests now, that the server is running locally
  const options = {
    projects: [__dirname],
    silent: false,
  }
  const result = await jest.runCLI(options, options.projects)

  const exitCode = result.results.success ? 0 : 1;
  process.exit(exitCode)
})()
