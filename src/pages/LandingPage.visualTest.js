const puppeteer = require('puppeteer')
const { toMatchImageSnapshot } = require('jest-image-snapshot')

expect.extend({ toMatchImageSnapshot })

const PORT = 4321

describe('The Landingpage', () => {
  let browser = null

  beforeEach(async () => {
    browser = await puppeteer.launch({
      args: ['--enable-logging', 'false']
    })
  })
  afterEach(async () => await browser.close())

  it('renders the same thing', async () => {
    const page = await browser.newPage()
    await page.emulateMedia('screen')
    page.on('console', () => {})
    await page.setViewport({ width: 1366, height: 768 })
    await page.goto(`http://localhost:${PORT}/`)
    const image = await page.screenshot({ fullPage: false })
    expect(image).toMatchImageSnapshot()
  })
})
