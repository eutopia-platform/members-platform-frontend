import { toMatchImageSnapshot } from 'jest-image-snapshot'
import PORT from '../../testFiles/visual.port.js'

expect.extend({ toMatchImageSnapshot })

describe('The signup', () => {
  it('renders the same thing', async () => {
    await page.emulateMedia('screen')
    await page.setViewport({ width: 1366, height: 768 })
    await page.goto(`http://localhost:${PORT}/signup/`)
    const image = await page.screenshot({ fullPage: true })
    expect(image).toMatchImageSnapshot()
  })

  it('renders mobile view', async () => {
    await page.emulateMedia('screen')
    await page.setViewport({ width: 500, height: 700 })
    await page.goto(`http://localhost:${PORT}/signup/`)
    const image = await page.screenshot({ fullPage: true })
    expect(image).toMatchImageSnapshot()
  })
})
