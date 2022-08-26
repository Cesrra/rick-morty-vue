import rickandmortyService from './rick-morty'

const charactersService = {}

charactersService.search = function ({ name = '', status = '', page = '' }) {
  const complementURL = `character/?name=${name}&status=${status}&${page}`
  return rickandmortyService.get(complementURL)
    .then((res) => {
      return res
    })
}

charactersService.getAll = function () {
  const complementURL = 'character'
  return rickandmortyService.get(complementURL)
    .then((res) => {
      return res
    })
}

charactersService.getById = function (id) {
  const complementURL = `/character/${id}`
  return rickandmortyService.get(complementURL)
    .then((res) => {
      return res
    })
}

export default charactersService
