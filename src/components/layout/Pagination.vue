<template>
  <nav class="pagination is-centered" role="navigation" aria-label="pagination">
    <a
      @click="prevPage"
      :class="{
        'pagination-previous': true,
        'is-disabled': pageInfo.prev == null
      }"
      title="This is the first page"
    >
      Previous page
    </a>
    <a
      @click="nextPage"
      :class="{ 'pagination-next': true, 'is-disabled': pageInfo.next == null }"
    >
      Next page
    </a>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      pageInfo: {
        next: null,
        prev: null
      }
    };
  },
  created() {
    this.$bus.$on("new-page", params => {
      this.charactersSearch(params);
    });

    this.$bus.$on("new-page-info", pageInfo => {
      this.pageInfo = pageInfo;
    });
  },
  methods: {
    nextPage() {
      this.$bus.$emit('next-page', 'Go to next page.');
    },
    prevPage() {
      this.$bus.$emit('prev-page', 'Go to previous page.');
    },
  }
};
</script>
<style scoped>
.pagination {
  margin-bottom: 2.5rem;
}
</style>
