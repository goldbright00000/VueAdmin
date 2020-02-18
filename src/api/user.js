import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/',
    method: 'POST',
    data: {				
      query: `
        mutation {
          login(
              email: "${data.email}"
              password: "${data.password}"
            ) {
              token
              user {
                id
                name
                email
                role{
                  id
                  name
                }
            }
          }
        }
      `
    }
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-element-admin/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}
