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
    await page.setViewport({ width: 375, height: 812 })
    await page.goto(`http://localhost:${PORT}/signup/`)
    const image = await page.screenshot({ fullPage: true })
    expect(image).toMatchImageSnapshot()
  })

  it('goes through the whole signup process', async () => {
    await page.emulateMedia('screen')
    await page.setViewport({ width: 1366, height: 768 })

    await page.goto(`http://localhost:${PORT}/signup/`, { waitUntil: 'load' })
    const imgNameStep = await page.screenshot({ fullPage: true })

    const inputSelector = "input[aria-label='you-are-awesome@example.com']"
    await page.type(inputSelector, 'john.doe@example.com')
    await page.click('label')
    await page.click('button')
    const imgAfterName = await page.screenshot({ fullPage: true })

    const codeInput = i => `input[name='${i}']`
    await page.type(codeInput(0), '1')
    await page.type(codeInput(1), '2')
    await page.type(codeInput(2), '3')
    await page.type(codeInput(3), '4')
    await page.type(codeInput(4), '5')
    await page.type(codeInput(5), '6')
    const imgAfterCode = await page.screenshot({ fullPage: true })

    const passInput1Selector = "input[aria-label='set your password']"
    const passInput2Selector = "input[aria-label='retype your password']"
    await page.type(passInput1Selector, 'password')
    await page.type(passInput2Selector, 'password')
    await page.click('.create-password button')
    const imgAfterPassword = await page.screenshot({ fullPage: true })

    const startupNameInput = "input[aria-label='Are you the next Google?']"
    await page.type(startupNameInput, 'The next Google')
    await page.click('main button')
    const imgAfterStartupName = await page.screenshot({ fullPage: true })

    const milestoneInput = "input[aria-label='Your next big thing']"
    await page.type(milestoneInput, 'Huge thingy')
    await page.click('main button')
    const imgAfterMilestone = await page.screenshot({ fullPage: true })

    expect(imgNameStep).toMatchImageSnapshot()
    expect(imgAfterName).toMatchImageSnapshot()
    expect(imgAfterCode).toMatchImageSnapshot()
    expect(imgAfterPassword).toMatchImageSnapshot()
    expect(imgAfterStartupName).toMatchImageSnapshot()
    expect(imgAfterMilestone).toMatchImageSnapshot()
  })
})
