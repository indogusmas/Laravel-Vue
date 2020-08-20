import AllBook from './components/AllBooks.vue';
import AddBook from './components/AddBook.vue'

export const routes = [
    {
        name: 'home',
        path: '/',
        component: AllBook
    },
    {
        name: 'add',
        path: '/add',
        component: AddBook
    }
]