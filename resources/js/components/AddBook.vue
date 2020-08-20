<template>
  <div class="container-fluid">
    <form @submit.prevent="addBook">
      <div class="form-group">
        <label>Name</label>
        <input type="text" class="form-control" v-model="book.name" />
      </div>
      <div class="form-group">
        <label for>Author</label>
        <input type="text" name id class="form-control" v-model="book.author" />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      book: {},
    };
  },
  methods: {
    addBook() {
      this.axios
        .post("http://localhost:8000/api/book/addBook", this.book)
        .then(reponse => this.$router.push({name: 'home'}) )
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style scoped>
</style>