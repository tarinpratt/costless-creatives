import config from '../config'
import TokenService from './Token-Service'

const PostsApiService = {
  getUsers() {
      return fetch(`${config.API_ENDPOINT}/users`, {
          headers: {
            'authorization': `bearer ${TokenService.getAuthToken()}`,
          },
      })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getPosts() {
    return fetch(`${config.API_ENDPOINT}/posts`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postBoard(project_pic, description) {
    return fetch(`${config.API_ENDPOINT}/posts`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
          project_pic,
          description
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}

export default PostsApiService;