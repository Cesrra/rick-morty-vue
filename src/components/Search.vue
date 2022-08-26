<template>
  <div class="search">
    <div class="select is-primary">
      <select @change="selectedStatus" v-model="selectValue">
        <option value="">Search by Status</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>
    <input
      v-model="searchQuery"
      class="input is-primary"
      type="text"
      placeholder="Search"
      @keyup.enter="search"
    >
    <button @click="search" class="button btn-s is-success">Search</button>
    <button @click="clear" class="button is-danger">&times</button>
  </div>
</template>

<script>

export default {
  components: {},
  data () {
    return {
      searchQuery: '',
      searchStatus: '',
      selectValue: ''
    }
  },
  methods: {
    search(){
      this.$bus.$emit('search-params', { name: this.searchQuery, status: this.searchStatus })
    },
    clear(){
      this.$bus.$emit('search-params', { name: '' })
      this.searchQuery = ''
      this.selectValue = ''
    },
    selectedStatus(event) {
      this.searchStatus = event.target.value
      this.search()
    }
  },
}
</script>

<style scoped>
.search {
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: space-around;
  margin-left: 30%;
}

.select {
  width: 172px;
}
.search input {
  min-width: 30%;
  max-width: 50%;
}

@media (max-width: 640px) {
  .search {
    margin-left: 0;
  }
  .btn-s {
    display: none;
  }
}
</style>
