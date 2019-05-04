import { mount } from '@vue/test-utils'
import Paragraph from './Paragraph'

describe('A Paragraph', () => {
  it('renders something', () => {
    const wrapper = mount(Paragraph)
    expect(wrapper.exists()).toBe(true)
  })

  it('renders a html paragraph', () => {
    const paragraph = mount(Paragraph)
    const hasP = paragraph.contains('p.paragraph')
    expect(hasP).toBe(true)
  })

  it('is small, when variant is small', () => {
    const paragraph = mount(Paragraph, {
      propsData: {
        small: true,
      },
    })
    const hasSmallP = paragraph.contains('p.small')
    expect(hasSmallP).toBe(true)
  })

  it('renders passed content inside', () => {
    const paragraph = mount(Paragraph, {
      slots: {
        default: '<span></span>',
      },
    })
    const hasSpan = paragraph.contains('span')
    expect(hasSpan).toBe(true)
  })
})
