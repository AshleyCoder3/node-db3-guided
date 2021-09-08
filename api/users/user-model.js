const db = require('../../data/db-config');

module.exports = {
    async getPostsBy(user_id) {
        const result = await db('posts as p') //select * from posts
            .join('users as u', 'p.user_id', '=', 'u.id') // join users as u on p.user_id = u.id ('=' optional)
            .select('p.id as post_id', 'contents', 'username')//select p.id as post_id, contents, username
            .where('u.id', user_id); //where u.id =1;

        return result;
    },
    async getUserBy(id) {
        // step 1- build in raw SQL
        // step 2 - use knex docs to build it in knex

        const rows = await db('users as u') //select * from posts
            .leftJoin('posts as p', 'p.user_id', '=', 'u.id') // join users as u on p.user_id = u.id ('=' optional)
            .select('p.id as post_id', 'contents', 'username', 'u.id as user_id')//select p.id as post_id, contents, username
            .where('u.id', id); //where u.id =1;
        //JS time to change shape
        // step 3- hammer the rows into desired shape
        const postsMap = rows[0].post_id ? rows.map(item => {
            return {
                contents: item.contents,
                post_id: item.post_id
            };
        }) : [];
        const result = { //not work with 4th user cause rows id empty
            user_id: rows[0].user_id,
            username: rows[0].username,
            posts: postsMap
        };
        return result;
    }


};
