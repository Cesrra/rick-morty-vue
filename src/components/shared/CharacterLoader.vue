<template>
  <div class="card" >
    <div class="card-image">
      <figure class="image image-loader is-4by4">
        <img src="@/assets/img/transparent-loader.png" :alt="character.name" />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content media-content__loader">
          <p class="title is-4">
            <strong>{{ character.name }}</strong>
          </p>
        </div>
      </div>
      <div class="content content-loader">
        <p class="subtitle is-6">
          {{ character.id }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      description: '',
      character: {
        id : '',
        gender : '',
        image : '',
        name : '',
        species : '',
        status : '',
        origin: { name: ''}
      }
    }
  }
};
</script>
<style scoped>
.image-loader {
  animation: loading-skeleton infinite .5s;
  background-color: #dfdddda1;
  height: 240px;
  width: 270px;
}

.media-content__loader {
  animation: loading-skeleton infinite .5s;
  background-color: #dfdddda1;
  border-radius: 7px;
  height: 30px;
}

.content-loader {
  animation: loading-skeleton infinite .5s;
  background-color: #dfdddda1;
  height: 60px;
}

@keyframes loading-skeleton {
  0%, 100% {
    opacity: 100%;
  }
  50% {
    opacity: 0%;
  }
}

</style>
