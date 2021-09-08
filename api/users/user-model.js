// user-model
const db = require('../../data/db-config')

module.exports = {
  async getPostsBy(user_id) {
    const result = await db('posts as p')
      .join('users as u', 'p.user_id', '=', 'u.id') // the '=' is optional
      .select('p.id as post_id', 'contents', 'username')
      .where('u.id', user_id) // CAREFUL WITH AMBIGUOUS COLUMN NAMES

    return result
  },

  async getUserBy(id) {
    const rows = await db('posts as p')
      .join('users as u', 'p.user_id', '=', 'u.id') // the '=' is optional
      .select('p.id as post_id', 'contents', 'username', 'u.id as user_id')
      .where('u.id', id) // CAREFUL WITH AMBIGUOUS COLUMN NAMES
    // javascript time

    const result = {
      user_id: rows[0].
    }
  }
}
