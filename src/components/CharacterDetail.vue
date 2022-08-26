<template>
  <div class="container">

    <div class="img">
      <div class="img-background">
        <img :src="character.image" alt="RM">
      </div>
    </div>

    <div class="content">
      <div class="content-header">
        <h3>{{ character.name }}</h3>
      </div>
      <div class="container container-content">
        <div class="content-list columns is-multiline" v-if="character.episode">

          <pm-tag :information="{ key: 'Status', value: character.status }" />
          <pm-tag :information="{ key: 'Episodes', value: character.episode.length }" />
          <pm-tag :information="{ key: 'Gender', value: character.gender }" />
          <pm-tag :information="{ key: 'Specie', value: character.species }" />
          <pm-tag :information="{ key: 'Location', value: character.location.name }" />
          <pm-tag :information="{ key: 'Origin', value: character.origin.name }" />

        </div>

      </div>
    </div>

  </div>
</template>
<script>
import charactersService from '../services/characters'
import PmCharacter from '@/components/Character.vue'
import PmTag from '@/components/layout/Tag.vue'

export default {
  components: {
    PmCharacter,
    PmTag,
  },
  data() {
    return {
      character: {}
    }
  },
  created() {
    const id = this.$route.params.id
    charactersService.getById(id)
      .then(({ data }) => {
        this.character = data
      })

    this.$bus.$on('set-character', (character) => {
      this.character = character
    })
  }
}
</script>
<style scoped>
img {
  width: 300px;
  height: 230px;
  border-radius: 50%;
}
.img {
  width: 10%;
}
.img-background {
  position: absolute;
  border-radius: 50%;
  width: 250px;
  height: 200px;
  z-index: 50;
}
.img-background img {
  border: 5px #FFF solid;
}
.container {
  padding: 35px 50px;
  display: flex;
}
.container-content {
  border-radius: 0 0 15px 15px;
  /* box-shadow: 0 0 17px 0 #abc757; */
  box-shadow: 0 4px 24px 0 rgb(34 41 47 / 10%);
}

.content {
  margin-top: 75px;
  width: 90%;
  height: 450px;
}
.content-header {
  align-items: center;
  background-color: #dbdbdb;
  border-radius: 15px 15px 0 0;
  display: flex;
  justify-content: center;
  font-family: inherit;
  font-size: 1.5rem;
  height: 30%;
}
.content-header h3 {
  margin: 0;
  color: #09b0bf;
}
.content-list {
  width: 100%;
  height: 100%;
}

@media(max-width: 800px){
  .content {
    margin-top: 95px;
    height: 850px;
  }
  .content-header {
    height: 20%;
  }
  img {
    width: 200px;
    height: 160px;
  }
  .img-background {
    width: 200px;
    height: 160px;
    left: 35%;
    top: 15px;
  }
}

</style>
