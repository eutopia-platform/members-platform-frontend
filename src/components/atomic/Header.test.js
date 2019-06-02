import { mount } from '@vue/test-utils'
import Header from './Header'

describe('A Header', () => {
  it('renders something', () => {
    const header = mount(Header)
    expect(header.exists()).toBe(true)
  })

  it('renders an h1 as s1 header', () => {
    const header = mount(Header, {
      propsData: {
        s1: true,
      },
    })
    expect(header.is('h1.s1')).toBe(true)
  })

  it('renders an h2 as s2 header', () => {
    const header = mount(Header, {
      propsData: {
        s2: true,
      },
    })
    expect(header.is('h2.s2')).toBe(true)
  })

  it('renders an h3 as s3 header', () => {
    const header = mount(Header, {
      propsData: {
        s3: true,
      },
    })
    expect(header.is('h3.s3')).toBe(true)
  })

  it('renders an h4 as s4 header', () => {
    const header = mount(Header, {
      propsData: {
        s4: true,
      },
    })
    expect(header.is('h4.s4')).toBe(true)
  })

  it('renders an h5 as s5 header', () => {
    const header = mount(Header, {
      propsData: {
        s5: true,
      },
    })
    expect(header.is('h5.s5')).toBe(true)
  })

  it('renders passed content in header', () => {
    const header = mount(Header, {
      propsData: {
        s1: true,
      },
      slots: {
        default: '<span></span>',
      },
    })
    const isInH1 = header.contains('h1 span')
    expect(isInH1).toBe(true)
  })
})
