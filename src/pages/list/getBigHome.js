import service from '@/utils/request'

const dataGetHome = function() {
  return service({
    url: 'skin/GetWallSkin/333',
    method: 'POST'
  })
    .then(response => {
      return response.data
    })
}

export default dataGetHome
