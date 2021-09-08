// user-model
const db = require('../../data/db-config')

module.exports = {
  async getPostsBy(user_id) {
    return [
      { username: 'Hypatia', contents: 'foo', post_id: 1 },
      { username: 'Hypatia', contents: 'bar', post_id: 2 },
      { username: 'Hypatia', contents: 'baz', post_id: 3 },
      { username: 'Hypatia', contents: 'fizz', post_id: 4 },
    ]
  }
}
