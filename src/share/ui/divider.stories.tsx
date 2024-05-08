import type {Meta, StoryObj} from '@storybook/react';

import {Divider} from "./divider";


const meta = {
    title: 'share/ui/divider',
    component: Divider,
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"],
    argTypes: {
        width: {
            description: "길이를 나타냅니다. default는 기본적으로 393px를 나타냅니다.",
            options: ['default', 'full'],
            control: {type: 'select'}
        },
        thickness: {
            description: "선의 두꺼운 정도를 나타냅니다.",
            options: ['default', 'bolder'],
            control: {type: 'select'}
        },
    },
    decorators: (Story) => {
        return <div className="w-[700px] border 1px border-gray-200 h-20 flex justify-center items-center"><Story/></div>
    }
} satisfies Meta<typeof Divider>;

export default meta;

export const Default: StoryObj<typeof Divider> = {
    args: {
        width: "default",
        thickness: "default"
    },
};
