<template>
  <div class="container">
    <div class="columns has-text-centered">
      <div class="column is-offset-2 is-two-thirds">
        <div class="notification is-danger">
            <slot name="body">Something was wrong!!!</slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="">

</style>
