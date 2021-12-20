import React from 'react';

import { PureTaskList } from './TaskList';
import * as TaskStories from './Task.stories';

export default {
    component: PureTaskList,
    title: 'TaskList',
    decorators: [(story:any) => <div style={{ padding: '3rem' }}>{story()}</div>],
};

const Template = (args:any) => <PureTaskList {...args} />;

export const Default = Template.bind({});
(Default as any).args = {
    // Shaping the stories through args composition.
    // The data was inherited the Default story in task.stories.js.
    tasks: [
        { ...(TaskStories.Default as any).args.task, id: '1', title: 'Task 1' },
        { ...(TaskStories.Default as any).args.task, id: '2', title: 'Task 2' },
        { ...(TaskStories.Default as any).args.task, id: '3', title: 'Task 3' },
        { ...(TaskStories.Default as any).args.task, id: '4', title: 'Task 4' },
        { ...(TaskStories.Default as any).args.task, id: '5', title: 'Task 5' },
        { ...(TaskStories.Default as any).args.task, id: '6', title: 'Task 6' },
    ],
};

export const WithPinnedTasks = Template.bind({});
(WithPinnedTasks as any).args = {
    // Shaping the stories through args composition.
    // Inherited data coming from the Default story.
    tasks: [
        ...(Default as any).args.tasks.slice(0, 5),
        { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
    ],
};

export const Loading = Template.bind({});
(Loading as any).args = {
    tasks: [],
    loading: true,
};

export const Empty = Template.bind({});
(Empty as any).args = {
    // Shaping the stories through args composition.
    // Inherited data coming from the Loading story.
    ...(Loading as any).args,
    loading: false,
};
