import { toMatchImageSnapshot } from 'jest-image-snapshot'
import PORT from '../../testFiles/visual.port.js'

expect.extend({ toMatchImageSnapshot })

describe('The Landingpage', () => {
  it('renders the same thing', async () => {
    await page.emulateMedia('screen')
    await page.setViewport({ width: 1366, height: 768 })
    await page.goto(`http://localhost:${PORT}/`)
    const image = await page.screenshot({ fullPage: false })
    expect(image).toMatchImageSnapshot()
  })
})
