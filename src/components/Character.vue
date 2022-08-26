<template>
  <div
    v-if="character && character.id"
    class="card"
    @click="goToCharacterDetail(character.id)"
  >
    <div class="card-image">
      <figure class="image is-4by4">
        <img :src="character.image" :alt="character.name" />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <!-- <div class="media-left">
          <figure class="image is-48x48">
            <img
              style="border-radius: 50%;"
              :src="character.image"
              :alt="character.name"
            />
          </figure>
        </div> -->
        <div class="media-content">
          <p class="title card-title is-4">
            {{ character.name }}
          </p>
        </div>
      </div>
      <div class="content">
        <p class="subtitle is-6">
          {{ character | variables-to-text }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    character: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      description: ''
    }
  },
  methods: {
    selectCharacter() {
      this.$emit('selected', this.character.id)
      this.$bus.$emit('set-character', this.character)
    },
    goToCharacterDetail(id) {
      this.$router.push({ name: 'detail', params: { id } })
    }
  }
};
</script>
<style scoped>
.card {
  cursor: pointer;
}

.media-content {
  text-align: center;
}

.card:hover {
  z-index: 80;
  box-shadow: 0 0 10px 0 #abc757;
}
.card:hover .card-title {
  color: #abc757;
}

.card-title {
  color: #09b0bf;
  font-size: 2rem;
}

@media (min-width: 768px) {
.card:hover {
  transform: scale(1.1);
  opacity: 1;
}
}
</style>
