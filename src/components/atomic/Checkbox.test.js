import { mount } from '@vue/test-utils'
import Checkbox from './Checkbox'

describe('A Checkbox', () => {
  it('renders something', () => {
    const checkbox = mount(Checkbox)
    expect(checkbox.exists()).toBe(true)
  })

  it('renders an html input of type checkbox', () => {
    const checkbox = mount(Checkbox)
    const htmlInput = checkbox.find("input[type='checkbox']")
    expect(htmlInput.exists()).toBe(true)
  })

  it('renders a label around the checkbox for accessibility', () => {
    const checkbox = mount(Checkbox)
    const hasSurroundingLabel = checkbox
      .find('label')
      .find("input[type='checkbox']")
      .exists()
    expect(hasSurroundingLabel).toBe(true)
  })

  it('renders the passed stuff into the label', () => {
    const checkbox = mount(Checkbox, {
      slots: {
        default: '<span></span>',
      },
    })
    const hasSpanInLabel = checkbox.find('label span').exists()
    expect(hasSpanInLabel).toBe(true)
  })

  it('passes the passed value to the html-input', () => {
    const checkbox = mount(Checkbox, {
      propsData: {
        value: true,
      },
    })
    expect(checkbox.find("input[type='checkbox'][value=true]").exists()).toBe(
      true
    )
  })

  it('emits input event when changed', () => {
    const checkbox = mount(Checkbox)
    checkbox.find("input[type='checkbox']").trigger('input')
    expect(checkbox.emitted().input).toBeTruthy()
  })
})
