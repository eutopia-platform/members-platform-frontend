import { mount } from '@vue/test-utils'
import CodePopup from './CodePopup'

describe('A CodePopup', () => {
  it('renders same thing as always', () => {
    const popup = mount(CodePopup, {
      stubs: ['Shade', 'Paragraph', 'PinInput', 'Icon'],
    })
    expect(popup).toMatchSnapshot()
  })
})
