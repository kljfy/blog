import myAxios from '@/utils/request.js'

export function getListAPI (paramsList) {
  return myAxios({
    url: '/info',
    method: 'get'
  })
}
