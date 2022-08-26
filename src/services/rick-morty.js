import axios from 'axios'
import configService from './config'

const rickandmortyService = axios.create({
  baseURL: configService.apiURL
})

export default rickandmortyService
