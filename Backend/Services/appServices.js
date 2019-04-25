const pgp = require('pg-promise')();
const db = pgp('postgres://localhost/tvwatchlistapp');

const appService = {}


appService.getAllShows = () => {
    return db.any (
        'SELECT * FROM shows'
    )
};

appService.getComments = (comment_id) => {
    return db.any(
        `SELECT * FROM comments WHERE id = ($[comment_id])`, {comment_id} 
    )
};

appService.getUsers = () => {
    return db.any(
        `SELECT * FROM users`
    )
};

appService.getUser = (user_id) => {
    return db.one(
        `SELECT * FROM users WHERE id = ($[user_id])`, {user_id} 
    )
};

appService.getShowsByGenre = (genre_id) => {
    return db.any(
        `SELECT * FROM shows WHERE genre_id = ($[genre_id])`, {genre_id} 
    )
};

appService.getShowsById = (id) => {
    return db.one(
        `SELECT * FROM shows WHERE id = ($[id])`, {id} 
    )
};

appService.getShowsByUser = (user_id) => {
    return db.any(
        `SELECT * FROM shows WHERE user_id = ($[user_id])`, {user_id} 
    )
};

appService.postUser = (username) => {
    return db.one(
        `INSERT INTO users (username) VALUES ($[username]) RETURNING id`, {username}
    )
};

appService.postComments = (comment_body, user_id, show_id) => {
    return db.one(
        `INSERT INTO comments (comment_body, user_id, show_id) VALUES ($[comment_body], $[user_id], $[show_id]) RETURNING id`, {comment_body, user_id, show_id}
    )
};

appService.postShows = (title, img_url, user_id, genre_id) => {
    return db.one(
        `INSERT INTO shows (title, img_url, user_id, genre_id) VALUES ($[title], $[img_url], $[user_id], $[genre_id]) RETURNING id`, {title, img_url, user_id, genre_id}
    )
};

module.exports = appService;
