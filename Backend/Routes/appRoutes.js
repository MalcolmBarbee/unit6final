const express = require('express');

const showHandler = require('../Services/appServices')

const showRouter = express.Router();

//HOME

showRouter.get('/', (req, res) => {
    showHandler.getAllShows()
        .then(shows => {
            res.json({
                shows
            })
        })
        .catch(err => {
            res.json({
                err
            })
        })
})

// USER ROUTES

showRouter.get('/users', (req, res) => {
    showHandler.getUsers()
        .then(users => {
            res.json({
                users
            })
        })
        .catch(err => {
            res.json({
                err
            })
        })
});

showRouter.get('/users/:user_id', (req, res) => {
    const {user_id} = req.params
    showHandler.getUser(user_id)
    .then(id => {
        res.json({
            id
        })
    })
    .catch(err => {
        res.json({
            err
        })
    })
});

showRouter.post(`/postusers`, (req, res) => {
    const {username} = req.body
    showHandler.postUser(username)
    .then(users => {
        res.json(
            users
        )
    })
    .catch(err => {
        res.json(
            err
        )
    })
});

// SHOW ROUTES

showRouter.get(`/shows`, (req, res) => {
    showHandler.getAllShows()
        .then(shows => {
            res.json({
                shows
            })
        })
        .catch(err => {
            res.json({
                err
            })
        })
});

showRouter.get(`/shows/genre/:genre_id`, (req, res) => {
    const {genre_id} = req.params
    showHandler.getShowsByGenre(genre_id)
        .then(id => {
            res.json({
                id
            })
        })
        .catch(err => {
            res.json({
                err
            })
        })
});

showRouter.get(`/shows/show/:id`, (req, res) => {
    const {id} = req.params
    showHandler.getShowsById(id)
        .then(id => {
            res.json({
                id
            })
        })
        .catch(err => {
            res.json({
                err
            })
        })
});


showRouter.get(`/shows/user/:user_id`, (req, res) => {
    const {user_id} = req.params
    showHandler.getShowsByUser(user_id)
        .then(id => {
            res.json({
                id
            })
        })
        .catch(err => {
            res.json({
                err
            })
        })
});

showRouter.post(`/postshows`, (req, res) => {
    const {title, img_url, user_id, genre_id} = req.body
    showHandler.postShows(title, img_url, user_id, genre_id)
    .then(() => {
        res.json(
            {msg: "Title has been added!"}
        )
    })
    .catch(err => {
        res.json(
            err
        )
    })
});

// COMMENT ROUTES

showRouter.get('/post/:show_id', (req, res) => {
    const {show_id} = req.params
    showHandler.getComments(show_id)
        .then(comment_id => {
            res.json({
                comment_id
            })
        })
        .catch(err => {
            res.json({
                err
            })
        })
});

showRouter.post(`/postcomments`, (req, res) => {
    const {comment_body, user_id, show_id} = req.body
    showHandler.postComments(comment_body, user_id, show_id)
    .then(comments => {
        res.json(
            comments
        )
    })
    .catch(err => {
        res.json(
            err
        )
        console.log(err)
    })
});

module.exports = showRouter;