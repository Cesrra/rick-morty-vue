<template>
  <div class="tags is-large has-addons column is-half">
    <span class="tag">{{ information.key }}</span>
    <span class="tag is-success">{{ information.value }}</span>
  </div>
</template>
<script>
export default {
  props: {
    information: {
      type: Object,
      required: true
    }
  },
}
</script>
<style scoped>
.tags {
  display: flex;
  justify-content: center;
  cursor: pointer;
}
.tag{
  font-size: 1.1rem;
}
</style>
