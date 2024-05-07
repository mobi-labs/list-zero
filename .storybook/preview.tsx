import type {Preview} from '@storybook/react'
import '../app/globals.css'
import {MobileLayout} from "../src/widget/layout";

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: (Story) => <Story/>
}

export default preview
