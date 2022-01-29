import { render } from '@redwoodjs/testing/web'

import BlogLayout from './BlogLayout'

describe('BlogLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BlogLayout />)
    }).not.toThrow()
  })
})
