import * as React from 'react'
import './button.css'
import { ExampleComponent } from '../../src/index'

export default {
  title: 'Example/Modal',
  component: ExampleComponent,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    text: 'Test'
  }
}

const Template = (args) => <ExampleComponent {...args} />

export const OpenModal = Template.bind({})
OpenModal.args = {
  text: 'Create React Library Example 😄'
}

export const ClosedModal = Template.bind({})
ClosedModal.args = {}
