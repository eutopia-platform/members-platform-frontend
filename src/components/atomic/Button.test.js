import { mount } from '@vue/test-utils'
import Button from './Button'

describe('A Button', () => {
  it('renders something', () => {
    const wrapper = mount(Button)
    expect(wrapper.exists()).toBe(true)
  })

  it('renders an html button', () => {
    const button = mount(Button)
    const hasButton = button.contains('button[type=button]')
    expect(hasButton).toBe(true)
  })

  it('emits a click event when clicked', () => {
    const button = mount(Button)
    button.find('button').trigger('click')
    expect(button.emitted().click).toBeTruthy()
  })

  it('renders into the button', () => {
    const button = mount(Button, {
      slots: {
        default: '<span></span>',
      },
    })
    const hasSpan = button.find('button').contains('span')
    expect(hasSpan).toBe(true)
  })
})
