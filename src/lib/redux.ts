import { createStore } from 'redux';
export const actions = {
  ARCHIVE_TASK: 'ARCHIVE_TASK',
  PIN_TASK: 'PIN_TASK',
};
export const archiveTask = (id:any) => ({ type: actions.ARCHIVE_TASK, id });
export const pinTask = (id:any) => ({ type: actions.PIN_TASK, id });

// All our reducers simply change the state of a single task.
function taskStateReducer(taskState:any) {
    return (state:any, action:any) => {
        return {
            ...state,
            tasks: state.tasks.map((task:any) =>
                task.id === action.id ? { ...task, state: taskState } : task
            ),
        };
    };
}
export const reducer = (state:any, action:any) => {
    switch (action.type) {
        case actions.ARCHIVE_TASK:
            return taskStateReducer('TASK_ARCHIVED')(state, action);
        case actions.PIN_TASK:
            return taskStateReducer('TASK_PINNED')(state, action);
        default:
            return state;
    }
};
const defaultTasks = [
    { id: '1', title: 'Something', state: 'TASK_INBOX' },
    { id: '2', title: 'Something more', state: 'TASK_INBOX' },
    { id: '3', title: 'Something else', state: 'TASK_INBOX' },
    { id: '4', title: 'Something again', state: 'TASK_INBOX' },
];
export default createStore(reducer, { tasks: defaultTasks });