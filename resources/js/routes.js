import Index from './components/tasks/index.vue';
import Create from './components/tasks/create.vue';
import Edit from './components/tasks/edit.vue';
export const routes = [
    {
        path: '/tasks',
        component: Index,
        name: "Index"
    },
    {
        path: '/tasks/create',
        component: Create,
        name: "Create"
    },
    {
        path: '/tasks/edit/:taskId',
        component: Edit,
        name: "Edit"
    }
];