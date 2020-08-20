<template>
    <div>
        <h3 class="text-center"> All Books</h3>

        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Author</th>
                    <th>Created At</th>
                    <th>Updated At</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="book in books" :key="book.id">
                    <td>{{ book.id }}</td>
                    <td>{{ book.name }}</td>
                    <td>{{ book.author }}</td>
                    <td>{{ format_date(book.created_at) }}</td>
                    <td>{{ format_date(book.updated_at) }}</td>
                    <td>
                        <div class="btn-group" role = "group">
                            <router-link :to="{name: 'edit',params: { id: book.id }}" class="btn btn-primary" >Edit</router-link>
                            <button class="btn btn-danger" @click="deleteBook(book.id)">Delete</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import moment from 'moment'
export default {
    data(){
        return {
            books:[]
        }
    },
    mounted(){
        this.load();
    },
    methods: {
         load(){
        this.axios
        .get('http://localhost:8000/api/books')
        .then(response => {
            console.log(response.data)
            this.books = response.data
        })
    },
    format_date(value){
        if(value){
            return moment(String(value)).format('DD MMMM YYYY')
        }
    }
    }
}
</script>

<style scoped>

</style>