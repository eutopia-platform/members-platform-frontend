import { mount } from '@vue/test-utils'
import Input from './Input'

describe('An Input', () => {
  it('renders something', () => {
    const input = mount(Input)
    expect(input.exists()).toBe(true)
  })

  it('renders an html input', () => {
    const input = mount(Input)
    expect(input.is('input')).toBe(true)
  })

  it('supports v-model', () => {
    // passes down value prop
    const input = mount(Input, {
      propsData: {
        value: 'value',
      },
    })
    expect(input.contains("input[value='value']")).toBe(true)

    // emits input event
    input.find('input').trigger('input')
    expect(input.emitted().input).toBeTruthy()
  })
})
