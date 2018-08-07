const Mock = require('mockjs')
const userList = []
const count = 100
var Random = Mock.Random
Random.first()
for (let i = 0; i < count; i++) {
  userList.push(Mock.mock({
    name: '@first'
  }))
}

module.exports = {
  searchUser: { data: userList, total: count }
}
