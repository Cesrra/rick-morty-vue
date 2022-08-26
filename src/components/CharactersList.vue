<template>
  <main>
    <section class="section">
      <transition name="move">
        <pm-notification v-show="showNotification">
          <template slot="body">
            The problem was you...
          </template>
        </pm-notification>
      </transition>
      <pm-pagination />
      <div class="container contariner-list">
        <div class="columns is-multiline">
          <div v-for="characterL in charactersLoader" class="column is-one-quarter" v-if="isLoading">
            <pm-character-loader />
          </div>

          <div v-for="character in characters" class="column is-one-quarter" v-if="!isLoading">
            <pm-character
              :class="{ 'is-active': character.id === selectedCharter }"
              :character="character"
              @selected="setSelectedCharacter"
            />
          </div>
        </div>
        <pm-pagination />
      </div>

    </section>
  </main>
</template>

<script>
import charactersService from '@/services/characters'
import PmCharacter from '@/components/Character.vue'
import PmNotification from '@/components/shared/Notification.vue'
import PmCharacterLoader from '@/components/shared/CharacterLoader.vue'
import PmPagination from '@/components/layout/Pagination.vue'

export default {
  components: {
    PmCharacter,
    PmNotification,
    PmCharacterLoader,
    PmPagination
  },
  data () {
    return {
      characters: [],
      charactersLoader: [
        {}, {}, {}, {},
        {}, {}, {}, {}
      ],
      requestInfo: {
        count: null,
        next: null,
        pages: null,
        prev: null
      },
      params: {},
      isLoading: false,
      selectedCharter: '',
      showNotification: false,
    }
  },
  created() {
    this.$bus.$on('search-params', (params) => {
      this.charactersSearch(params)
    })

    this.$bus.$on('next-page', (messge) => {
      if(this.requestInfo.next){
        const page  = this.requestInfo.next.split('?')[1]
        this.params.page = page
        this.charactersSearch(this.params)
        window.scrollTo(0,0)
      }
    })

    this.$bus.$on('prev-page', (messge) => {
      if(this.requestInfo.prev){
        const page  = this.requestInfo.prev.split('?')[1]
        this.params.page = page
        this.charactersSearch(this.params)
        window.scrollTo(0,0)
      }
    })

    this.getAllCharacters()
  },
  watch: {
    showNotification() {
      if(this.showNotification){
        setTimeout(() => {
          this.showNotification = false
        }, 3000)
      }
    }
  },
  methods: {
    emitPageInfo(pageInfo) {
      this.$bus.$emit('new-page-info', pageInfo)
    },
    getAllCharacters() {
      this.isLoading = true
      charactersService.getAll()
      .then(({ data }) => {
        console.log(data)
        this.isLoading = false
        this.characters = data.results
        this.requestInfo = data.info
        this.emitPageInfo(data.info)
      })
      .catch(err => {
        this.isLoading = false
        this.showNotification = true
        console.error(err.message)
      })
    },

    charactersSearch(params){
      this.params = params
      this.isLoading = true
      charactersService.search(params)
      .then(({data}) => {
        this.isLoading = false
        this.characters = data.results
        this.requestInfo = data.info
        this.emitPageInfo(data.info)
      })
      .catch(err => {
        this.isLoading = false
        this.showNotification = true
        console.error(err.message)
      })
    },

    setSelectedCharacter(id){
      this.selectedCharter = id
    }
  },
}
</script>

<style>
.results {
  margin-top: 50px;
}

.is-active {
  border: 3px rgba(5, 32, 32, 0.815) solid;
}

.contariner-list:hover .card {
  opacity: 0.7;
}

@media(max-width: 800px) {
  .contariner-list {
    padding: 0;
  }
}
</style>
