import { mount } from '@vue/test-utils'
import Card from './Card'

describe('A Card', () => {
  it('renders something', () => {
    const wrapper = mount(Card)
    expect(wrapper.exists()).toBe(true)
  })
  
  it('renders a div', () => {
    const card = mount(Card)
    expect(card.contains('div.card')).toBe(true)
  })

  it('renders passed contents', () => {
    const card = mount(Card, {
      slots: {
        default: '<span></span>'
      }
    })
    expect(card.contains('span')).toBe(true)
  })
})
