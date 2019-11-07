import config from '../config'
import TokenService from './Token-Service'

const ProfileApiService = {
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
  getProfiles() {
    return fetch(`${config.API_ENDPOINT}/profile`, {
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
  postProfile(profile_pic, bio) {
    return fetch(`${config.API_ENDPOINT}/profile`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
          profile_pic,
          bio
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}

export default ProfileApiService;