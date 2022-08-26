<template>
<div class="nav-fixed">
  <nav class="navbar-custom is-shadow" role="navigation" aria-label="main navigation">
    <div class="navbar-brand-custom">
      <router-link to="/" class="logo-rm" >
        <img src="@/assets/img/ic_logo_rickandmorty.png" />
      </router-link>
        <pm-search />
    </div>
  </nav>
</div>
</template>

<script>
import PmCharacterDetail from '@/components/CharacterDetail.vue'
import PmSearch from '@/components/Search.vue'

export default {
  components: {
    PmCharacterDetail,
    PmSearch
  }
}

</script>

<style scoped>

.nav-fixed {
  box-shadow: 0 4px 24px 0 rgb(34 41 47 / 10%);
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 100;
}
.navbar-custom{
  background-color: #f2f1f1;
  height: 75px;
  justify-content: flex-end;
}

.navbar-brand-custom {
  width: 100%;
  height: 100%;
}
.logo-rm  img{
  max-height: 12rem;
  /* margin-top: -58px; */
  position: absolute;
  z-index: 100;
  left: 15px;
  top: -60px;
}

@media (max-width: 640px) {
  .logo-rm {
    display: none;
  }
  .logo-rm  img {
    margin-left: 0;
  }
}
</style>
