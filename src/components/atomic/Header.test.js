import { mount } from '@vue/test-utils'
import Header from './Header'

describe('A Header', () => {
  it('renders something', () => {
    const header = mount(Header)
    expect(header.exists()).toBe(true)
  })

  it('renders an h1 as primary header', () => {
    const header = mount(Header, {
      propsData: {
        primary: true
      }
    })
    expect(header.is('h1.primary')).toBe(true)
  })

  it('renders an h2 as secondary header', () => {
    const header = mount(Header, {
      propsData: {
        secondary: true
      }
    })
    expect(header.is('h2.secondary')).toBe(true)
  })

  it('renders an h3 as tertiary header', () => {
    const header = mount(Header, {
      propsData: {
        tertiary: true,
      }
    })
    expect(header.is('h3.tertiary')).toBe(true)
  })

  it('renders an h4 as quaternary header', () => {
    const header = mount(Header, {
      propsData: {
        quaternary: true,
      }
    })
    expect(header.is('h4.quaternary')).toBe(true)
  })

  it('renders passed content in header', () => {
    const header = mount(Header, {
      propsData: {
        primary: true
      },
      slots: {
        default: '<span></span>',
      },
    })
    const isInH1 = header.contains('h1 span')
    expect(isInH1).toBe(true)
  })
})
