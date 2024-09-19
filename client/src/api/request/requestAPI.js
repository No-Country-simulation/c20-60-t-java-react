import { envs } from '@/config/envs'
import { requestMapper } from './requestMapper'

const ENDPOINT = envs.BASE_API_URL + '/api/requests'

export const requestAPI = {
  async getAll() {
    return fetch(ENDPOINT + '/')
      .then((response) => response.json())
      .then((response) => response.requests.map((request) => requestMapper(request)))
  },
  async getAllByPet(id) {
    return fetch(ENDPOINT + `/pet/` + id)
      .then((response) => response.json())
      .then((response) => response.requests.map((request) => requestMapper(request)))
  },
  async create(data) {
    return fetch(ENDPOINT + `/new`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => response.json())
  }
}
