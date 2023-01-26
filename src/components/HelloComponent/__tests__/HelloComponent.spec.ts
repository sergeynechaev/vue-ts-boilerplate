import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloComponent from '../HelloComponent.vue'

describe('HelloComponent', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloComponent, { props: { msg: 'Hello test' } })
    expect(wrapper.text()).toContain('Hello test')
  })
})
