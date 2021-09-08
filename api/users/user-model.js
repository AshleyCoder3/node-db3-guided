// user-model
const db = require('../../data/db-config')

module.exports = {
  async getPostsBy(user_id) {
    const result = await db('posts as p')
      .join('users as u', 'p.user_id', '=', 'u.id') // the '=' is optional
      .select('p.id as post_id', 'contents', 'username')
      .where('id', user_id)
  }
}
