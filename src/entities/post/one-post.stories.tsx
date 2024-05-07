import type { Meta, StoryObj } from '@storybook/react';

import {OnePost} from "@/entities/post/one-post";
import {generatePost} from "@/share/mock/generate-post";

const meta = {
    title: 'Entities/Post/OnePost',
    component: OnePost,
} satisfies Meta<typeof OnePost>;

export default meta;

const post = generatePost(1)[0]
export const OnePostWithDivider: StoryObj<typeof OnePost> = {
    args: {
        post,
        isDivider: true
    },
};

export const OnePostWithOutDivider: StoryObj<typeof OnePost> = {
    args: {
        post,
        isDivider: false
    },
};
