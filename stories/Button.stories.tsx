import Button from '../src/components/buttons/button/index'
import React, { Fragment } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import GlobalStyle from '../src/global-style'

const meta: Meta<typeof Button> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Button',
  component: Button,
  parameters: {
    controls: { expanded: true } // Show full documentation for each property
  },
  args: {
    label: 'Button'
  },
  argTypes: {
    disabled: {
      defaultValue: false,
      options: [false, true],
      control: {
        type: 'radio' // for selecting between the array of options above
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof Button>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (props) => (
    <Fragment>
      <GlobalStyle />
      <Button {...props} />
    </Fragment>
  )
}

export const Secondary: Story = {
  render: (props) => (
    <Fragment>
      <GlobalStyle />
      <Button {...props} variant='secondary' />
    </Fragment>
  )
}
