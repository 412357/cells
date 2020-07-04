import React from 'react'
import { mount } from 'enzyme'

import Home from './index'

describe('app Home index component', () => {
    it('renders', () => {
        const mountedComponent = mount(<Home />)

        expect(mountedComponent.children()).toHaveLength(1)
    })
})
